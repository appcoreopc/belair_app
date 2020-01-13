async function fetch(targetUri: string) 
{ 
    let headers : string = "";

    await fetch("/charge/pay", null).then((response) => {
        if (response.status >= 400 && response.status < 600) {
          throw new Error("Bad response from server");
        }
        return response;
    }).then((returnedResponse) => {
       // Your response to manipulate
       this.setState({
         complete: true
       });
    }).catch((error) => {
      // Your error is here!
      console.log(error)
    });
}