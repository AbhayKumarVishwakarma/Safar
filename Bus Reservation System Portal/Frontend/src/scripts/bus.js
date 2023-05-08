let busid = localStorage.getItem("busid");

let url = "http://localhost:8999/safar/bus/" + busid;
let bus = null;


fetch(url)
  .then(response => response.json())
  .then(json => {
    bus = json;

    fetchData();
  })
  .catch(error => {
    console.error('Error fetching data: ', error);
  });


function fetchData(){
    document.getElementById("driver").innerHTML += bus.driverName;
    document.getElementById("from").innerHTML += bus.routeFrom;
    document.getElementById("to").innerHTML += bus.routeTo;
    document.getElementById("date").innerHTML += bus.busJourneyDate;
    document.getElementById("arrival").innerHTML += bus.arrivalTime;
    document.getElementById("departure").innerHTML += bus.departureTime;
    document.getElementById("seats").innerHTML += bus.availableSeats;
    document.getElementById("fare").innerHTML += bus.fare;
    document.getElementById("name").innerHTML += bus.busName;
}


document.querySelector("form").addEventListener("submit", save);


function save(event){
    event.preventDefault();
    console.log(bus)

    let rev = {
        "source" : bus.routeFrom,
        "destination" : bus.routeTo,
        "journeyDate" : bus.busJourneyDate,
        "bookedSeat" : document.querySelector("#booked").value
    }

    localStorage.setItem("rev", JSON.stringify(rev));

    console.log(rev);

    window.location.href = "./payment.html";
}