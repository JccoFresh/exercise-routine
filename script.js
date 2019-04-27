//I would like an exercise routine I can carry out at the gym or at home. (Which exercises do I execute on which day)
let request = new XMLHttpRequest(); //exercise image request
let url = "https://wger.de/api/v2/exerciseimage/?format=json"

request.open("GET", url, true);
request.setRequestHeader('Authorization', 'Token 2af6480d6fc89f692fcc471714fe36c76d4d89a2');
request.onload = function() {
    let data = JSON.parse(this.response);
    let exercise = document.getElementById("exercise");
    let gym = document.getElementById("gym");
    
    if (request.status >= 200 && request.status < 400) {
        //condition for when request is succesful, status code of request 
       
    } else {
       
       
    }
    
};
request.send();
