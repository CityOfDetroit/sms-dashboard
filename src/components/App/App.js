import React, { useState }from 'react';
import './App.scss';
import data from '../../data/App.data.json';

function App() {
    // Declare a new state variable, which we'll call "count"
  const [service, setService] = useState(null);
  const [user, setUser] = useState({'id': 'edgar', 'permissions': ['elections']});

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

    const markup = <fieldset>
    <label htmlFor="group" className="required-field">Group</label>
    <select id="group" required>
    <option value="">--Please choose a group--</option>
    <option value="all">All</option>
    <option value="list-1">List 1</option>
    <option value="list-2">List 2</option>
    </select>
  </fieldset>;
  return markup;
  }

  const buildStaticFilters = () => {

  }

  const buildDynamicFilters = () => {
    
  }

  return (
    <section className="App">
      <p>{document.title}</p>
     <form>
        <fieldset>
          <label htmlFor="services" className="required-field">Service</label>
          <select id="services" onChange={handleServiceChange} required>
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

