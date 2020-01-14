import React, { useState }from 'react';
import './App.scss';
import data from '../../data/App.data.json';

function App() {
    // Declare a new state variable, which we'll call "count"
  const [service, setService] = useState(null);
  const [user, setUser] = useState({'id': 'edgar', 'permissions': ['elections', 'dpw']});

  const buildServices = () => {
    const markup = data.services.map((service) =>
        (user.permissions.includes(service.id)) ? <option key={service.id} value={service.id}>{service.name}</option> : ''
    );
    return markup;
  }

  const handleServiceChange = (ev) => {
    setService(ev.target.value);
  }

  const buildGroupFilters = () => {
    const markup = data.services.map((s) =>
    (service == s.id) ? <fieldset>{buildFilter(s)}</fieldset> : ''
    );
    return markup;
  }

  const buildFilter = (s) => {
    console.log(s);
    const markup = s.filters.map((filter) =>
    (filter.valuesSource == 'static') ? buildStaticFilters(filter) : buildDynamicFilters(filter)
    );
    return markup;
  }

  const buildStaticFilters = (filter) => {
    const markup = filter.values.map((value) =>
      <option value="list-1">List 1</option>
    );
    return markup;
  }

  const buildDynamicFilters = () => {
    const markup = <p>Dyanic call</p>;
    return markup;
  }

  return (
    <section className="App">
      <p>{document.title}</p>
     <form>
        <fieldset>
          <label htmlFor="services" className="required-field">Select SMS Service</label>
          <select id="services" required onChange={handleServiceChange}>
            <option value="">--Please choose a service--</option>
            {buildServices()}
          </select>
        </fieldset>
        {(service) ? buildGroupFilters() : ""}
        <fieldset>
          <label htmlFor="en-msg" className="required-field">Message</label>
          <textarea id="en-msg" type="text" required></textarea>
          <label htmlFor="sp-msg" className="required-field">Spanish Translation</label>
          <textarea id="sp-msg" type="text" required></textarea>
          <label htmlFor="ar-msg" className="required-field">Arabic Translation</label>
          <textarea id="ar-msg" type="text"required></textarea>
          <label htmlFor="bg-msg" className="required-field">Bengal Translation</label>
          <textarea id="bg-msg" type="text" required></textarea>
        </fieldset>
        <fieldset>
        <button type="submit">Send</button>
        <button type="clear">Clear</button>
        </fieldset>
     </form>
    </section>
  );
}

export default App;

