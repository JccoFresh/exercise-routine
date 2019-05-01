//I would like an exercise routine I can carry out at the gym or at home. (Which exercises do I execute on which day)
let request = new XMLHttpRequest(); //exercise image request
let url = "https://wger.de/api/v2/daysofweek/?format=json";

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
            if(rowCounter % 4 == 0 ){
                 row = document.createElement('div');
                 row.className = "row center";
                 daysofweek.appendChild(row);
             }    
           let flipCard = document.createElement('div'); 
           flipCard.className = "flip-card";
           let flipCardInner = document.createElement('div'); 
           flipCardInner.className = "flip-card-inner";
           let flipCardFront = document.createElement('div');
           flipCardFront.className = "flip-card-front"; 
           let flipCardBack = document.createElement('div');
           flipCardBack.className = "flip-card-back";
           //creates the placeholder divs
           let day = document.createElement('p');
           day.className = "day";
           day.textContent = values[i].day_of_week; 
           // Front content
           let dayBack = document.createElement('p');
           dayBack.className = "day";
           dayBack.textContent = "back"; 
           //Back content
           let col = document.createElement('div');
           col.className = "col-md-1";
           flipCardFront.appendChild(day); 
           flipCardBack.appendChild(dayBack);    
           flipCardInner.appendChild(flipCardFront);
           flipCardInner.appendChild(flipCardBack);
           flipCard.appendChild(flipCardInner);
           row.appendChild(flipCard);
           row.appendChild(col);
           rowCounter++;
       }
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
            section: "Shoulders",

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





//scroll function
var shiftWindow = function() {
     scrollBy(0, -50); 
 };
window.addEventListener("hashchange", shiftWindow);

function load() { 
    if (window.location.hash) 
    shiftWindow(); 
}
