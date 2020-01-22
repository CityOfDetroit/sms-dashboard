'use strict';

export default class Connector {

  static buildRequest(url, data){
    return new Request(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-type': 'application/json' 
        }),
        mode: 'cors',
        cache: 'default'
    });
  }

  static start(type, url, data, success, error){
    let request = (type == 'post') ? Connector.buildRequest(url, data) : url;
    fetch(request)
    .then((res) => {
        success(res);
    })
    .catch((error) => {
        error(error);
    });
  }
}

