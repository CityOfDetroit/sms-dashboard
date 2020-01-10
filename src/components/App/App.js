import React, { useState }from 'react';
import './App.scss';

function App() {
    // Declare a new state variable, which we'll call "count"
  const [form, setForm] = useState();

  return (
    <section className="App">
     <form>
        <fieldset>
          <label htmlFor="service" className="required-field">Service</label>
          <select id="group" required>
          <option value="">--Please choose a service--</option>
          <option value="elections">Elections</option>
          <option value="waste">DPW Waste Pick up</option>
          <option value="census">Census</option>
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="group" className="required-field">Group</label>
          <select id="group" required>
          <option value="">--Please choose a group--</option>
          <option value="all">All</option>
          <option value="list-1">List 1</option>
          <option value="list-2">List 2</option>
          </select>
        </fieldset>
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

