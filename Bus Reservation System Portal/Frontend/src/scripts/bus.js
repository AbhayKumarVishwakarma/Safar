let busid = localStorage.getItem("busid");

let url = "https://6385feaa875ca3273d4cccf8.mockapi.io/ItsNix";

async function fetchData(){
    try{
         let res = await fetch(url);
         let out = await res.json();

         let bus;

         console.log(out);

         out.forEach(element => {
            if(element.busId == busid) bus = element;
            
         });

         console.log(bus);

         document.getElementById("driver").innerHTML += bus.driverName;
         document.getElementById("from").innerHTML += bus.routeFrom;
         document.getElementById("to").innerHTML += bus.routeTo;
         document.getElementById("date").innerHTML += bus.busJourneyDate;
         document.getElementById("arrival").innerHTML += bus.arrivalTime;
         document.getElementById("departure").innerHTML += bus.departureTime;
         document.getElementById("seats").innerHTML += bus.availableSeats;
         document.getElementById("fare").innerHTML += bus.fare;
         document.getElementById("name").innerHTML += bus.busName;
         
    } catch(error){
        console.log(error);
    }
}

fetchData();