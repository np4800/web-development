


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      authorization: 'Bearer 00633d1f-4a06-41c5-b63b-a19be22cc188'
    }
  };
  
  fetch('https://gmscmp.hpegmsservices.com/api/usage?max=25&offset=0&sort=name&direction=asc', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));