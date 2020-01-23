import React, { useState }from 'react';
import './Geocoder.scss';

function Geocoder(props) {
  // Declare a new state variable, which we'll call when changing panel render
  const [sugg, setSugg]     = useState();
  const {
    address: [address, setAddress]
  } = {
    naddressav: useState(0),
    ...(props.state || {})
  };

  const getAddressSuggestions = (addr) => {
    let tempAddr = addr.split(",");
    tempAddr = tempAddr[0];
    tempAddr = tempAddr.split(" ");
    let newTempAddr = '';
    let size = tempAddr.length;
    tempAddr.forEach(function(item, index) {
      newTempAddr += item;
      ((index < size) && (index + 1) !== size) ? newTempAddr += '+': 0;
    });
    let url = `https://gis.detroitmi.gov/arcgis/rest/services/DoIT/CompositeGeocoder/GeocodeServer/findAddressCandidates?Street=&City=&ZIP=&SingleLine=${newTempAddr}&category=&outFields=User_fld&maxLocations=4&outSR=4326&searchExtent=&location=&distance=&magicKey=&f=json`;
    
    try {
        fetch(url)
        .then((resp) => resp.json()) // Transform the data into json
        .then(function(data) {
            setSugg(data.candidates);
        })
        .catch((error) => {
            error(error);
        });
    }catch (error) {
        console.log(error);
    }
  }

  const handleChange = (ev) => {
      getAddressSuggestions(ev.target.value);
      (ev.target.value == '') ? setAddress('1301 3rd Ave') : setAddress(ev.target.value);
  }

  const buildOptions = () => {
    const markup = sugg.map((item) =>
        <option value={item.address}></option>
    );
    return markup;
  }

  return (
      <fieldset>
        <label htmlFor="address">Address</label>
        <input list="address-list" id="address" name="address" placeholder="Ex. 1301 3rd Ave" aria-describedby="Address of subscriber." onChange={handleChange}></input>
        <datalist id="address-list">
            {(sugg) ? buildOptions() : ''}
        </datalist>
      </fieldset>
  );
}

export default Geocoder;
