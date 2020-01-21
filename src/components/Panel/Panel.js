import React, { useState }from 'react';
import './Panel.scss';
import data from '../../data/App.data.json';

function Panel() {
    // Declare a new state variable, which we'll call "count"
  const [service, setService]     = useState();
  const [filters, setFilters]     = useState();
  const [message, setMessage]     = useState();
  const [date, setDate]           = useState();
  const [spMessage, setspMessage] = useState();
  const [arMessage, setarMessage] = useState();
  const [bnMessage, setbnMessage] = useState();
  const [user, setUser] = useState({'id': 'edgar', 'permissions': ['census', 'dpw']});

  const buildServices = () => {
    const markup = data.services.map((service) =>
        (user.permissions.includes(service.id)) ? <option key={service.id} value={service.id}>{service.name}</option> : ''
    );
    return markup;
  }

  const handleChange = (ev) => {
    switch (ev.target.id) {
      case 'services':
        setService(ev.target.value);
        break;
      
      case 'date':
        let tempDate = ev.target.value.replace(/-/g, '/');
        console.log(tempDate);
        setDate(tempDate);
        break;

      case 'services':
        setService(ev.target.value);
        break;

      case 'en-msg':
        setMessage(ev.target.value);
        break;

      case 'sp-msg':
        setspMessage(ev.target.value);
        break;

      case 'ar-msg':
        setarMessage(ev.target.value);
        break;

      case 'bn-msg':
        setbnMessage(ev.target.value);
        break;

      case 'msg-form':
        ev.preventDefault(); 
        let param = {
          "day": date
        };
        let request = new Request(`https://apis.detroitmi.gov/messenger/clients/${filters.groups}/notifications/`, {
          method: 'POST',
          body: JSON.stringify(param),
          headers: new Headers({
            'Content-type': 'application/json' 
          }),
          mode: 'cors',
          cache: 'default'
        });
        fetch(request)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        break;
    
      default:
        const newValue = {};
        const listOfFilters = document.querySelectorAll('.sms-filters');
        listOfFilters.forEach((f)=>{
          newValue[f.id] = f.value;
        });
        setFilters(newValue);
        break;
    }
    
  }

  const buildGroupFilters = () => {
    const markup = data.services.map((s) =>
    (service == s.id) ? buildFilter(s) : ''
    );
    return markup;
  }

  const buildFilter = (s) => {
    const markup = s.filters.map((filter) =>
    (filter.valuesSource == 'static') ? buildStaticFilters(filter) : buildDynamicFilters(filter)
    );
    return markup;
  }

  const buildStaticFilters = (filter) => {
    let markup;
    switch (filter.type) {
      case 'checkbox':
        markup = filter.values.map((value) =>
          buildStaticValue(filter, value, 'checkbox')
        )
        break;

      case 'radio':
        markup = filter.values.map((value) =>
          buildStaticValue(filter, value, 'radio')
        )
        break;

      case 'select':
        markup = <fieldset><label htmlFor={filter.id} className="required-field">{filter.name}</label><select id={filter.id} className="sms-filters" aria-describedby={filter.description} aria-required="true" required onChange={handleChange}>{buildStaticValue(filter, null, 'select')}</select></fieldset>;
        break;
    
      default:
        break;
    }
    return markup;
  }

  const buildStaticValue = (filter, value, type) => {
    let markup;
    switch (type) {
      case 'checkbox':
        
        break;
        
      case 'radio':
        
        break;
        
      case 'select':
        markup = filter.values.map((value) =>
          <option key={value.key} value={value.value}>{value.name}</option>
        );
        break;
    
      default:
        break;
    }
    
    return markup;
  }

  const buildDynamicFilters = (filter) => {
    fetch(filter.values)
    .then((resp) => resp.json()) // Transform the data into json
    .then((data) => {
      console.log(data);
    }).catch( err => {
      console.log(err);
    });
    const markup = <p>Dyanic call</p>;
    return markup;
  }

  const getTodayDate = () => {
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let year = today.getFullYear();
    return `${year}-${month}-${day}`;
  }

  return (
      <form id="msg-form" onSubmit={handleChange}>
        <fieldset>
          <label htmlFor="services" className="required-field">Select SMS Service</label>
          <select id="services" required aria-required="true" aria-describedby="Service client used to send message." onChange={handleChange}>
            <option value="">--Please choose a service--</option>
            {buildServices()}
          </select>
        </fieldset>
        {(service) ? buildGroupFilters() : ""}
        <fieldset>
          <label htmlFor="date" className="required-field">Date</label>
          <input type="date" id="date" name="date"
          required aria-required="true" aria-describedby="Date for message scheduling."
          min={getTodayDate()}
          onChange={handleChange}
          ></input>
        </fieldset>
        <fieldset>
          <label htmlFor="en-msg" className="required-field">Message (Eng)</label>
          <textarea id="en-msg" type="text" aria-describedby="Message that users will receive." aria-required="true" required onChange={handleChange}></textarea>
          <label htmlFor="sp-msg">Spanish Translation</label>
          <textarea id="sp-msg" type="text" aria-describedby="Message that spanish speaking users will receive." onChange={handleChange}></textarea>
          <label htmlFor="ar-msg">Arabic Translation</label>
          <textarea id="ar-msg" type="text" aria-describedby="Message that arabic speaking users will receive." onChange={handleChange}></textarea>
          <label htmlFor="bn-msg">Bengal Translation</label>
          <textarea id="bn-msg" type="text" aria-describedby="Message that bengali speaking users will receive." onChange={handleChange}></textarea>
        </fieldset>
        <fieldset>
        <button type="submit">Send</button>
        <button type="clear">Clear</button>
        </fieldset>
     </form>
  );
}

export default Panel;

