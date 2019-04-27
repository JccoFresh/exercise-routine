//I would like an exercise routine I can carry out at the gym or at home. (Which exercises do I execute on which day)
let request = new XMLHttpRequest(); //exercise image request
let url = "https://wger.de/api/v2/daysofweek/?format=json"

request.open("GET", url, true);
request.setRequestHeader('Authorization', 'Token 2af6480d6fc89f692fcc471714fe36c76d4d89a2');
request.onload = function() {
    let data = JSON.parse(this.response);
    let daysofweek = document.getElementById("daysofweek");
    let rowCounter = 0;
    let row = null;
    if (request.status >= 200 && request.status < 400) {
        //condition for when request is succesful, status code of request 
       let days = data.results;
       let values = Object.values(days);
       
       for(let i=0; i <values.length; i++) {
            if(rowCounter % 4 == 0){
                 row = document.createElement('div');
                 row.className = "row center";
                 daysofweek.appendChild(row);
             }    
           let day = document.createElement('p');
           day.className = "col-2 day inline";
           day.textContent = values[i].day_of_week;
           row.appendChild(day);
           rowCounter++;
           
       }
        //      let routine = document.createElement('div');
        //      routine.className = "col-3 day";
        //      let p = document.createElement('p');
        //      p.textContent = days.day_of_week;
        //      routine.appendChild(p);
        //      day.appendChild(routine);
        //      rowCounter++;
    //   forEach(day_of_week => {
    //         if(rowCounter % 4 == 0){
    //             let day = document.createElement('div');
    //             day.className = "row";
    //             daysofweek.appendChild(day);
    //         }
    //         let card = document.createElement('div');
    //         card.className = "col-3 day";
    //         let p = document.createElement('p');
    //         p.textContent = day_of_week;
    //         card.appendChild(p);
    //         day.appendChild(card);
    //         rowCounter++;
    //   });
    }
};
request.send();

let data = {
    "gymResults": [
        {
            section: "Arms",
            name: [
                    "Hammer Curls", "One Arm Extensions"
                ],
            image: ""
        },
        {
            section: "Legs",
        },
        {
            section: "Abs",

        },
        {
            section: "Chest",

        },
        {
            section: "Back",

        },
        {
            section: "shoulders",

        },
        {
            section: "calves",

        }
    ],

    "homeResults": [
        {
            section: "arms",

        },
        {
            section: "legs",
        },
        {
            section: "abs",

        },
        {
            section: "chest",

        },
        {
            section: "back",

        },
        {
            section: "shoulders",

        },
        {
            section: "calves",

        }
    ]
};

    let homeButton = document.getElementById("home");
    let gymButton = document.getElementById("gym");
    let exercise = document.getElementById("exercise");
    let gym = document.getElementById("gym");
    let bg = document.getElementById("bg");
 
function gymLoad() {
         homeButton.style.display = "none";
         gymButton.style.display = "none";
         //bg.src = "https://i.postimg.cc/cLhPxJv9/alora-griffiths-770619-unsplash.jpg";
}

function homeLoad() {
         homeButton.style.display = "none";
         gymButton.style.display = "none";
         //bg.src = "https://i.postimg.cc/cLhPxJv9/alora-griffiths-770619-unsplash.jpg";
}



//window.onload = gymLoad();

// function homeLoad() {
//      let exercise = document.getElementById("exercise");
//      let gym = document.getElementById("gym"); 
//      exercise.textContent = data.homeResults[0].section;
// }
// window.onload = homeLoad();