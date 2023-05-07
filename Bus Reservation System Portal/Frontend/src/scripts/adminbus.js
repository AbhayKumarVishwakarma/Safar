let busid = localStorage.getItem("adminBus");

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

         fillData(bus);
         
    } catch(error){
        console.log(error);
    }
}

fetchData();

function fillData(bus){
    document.querySelector("#busid").value = bus.busId;
    document.querySelector("#busName").value = bus.busName;
    document.querySelector("#driverName").value = bus.driverName;
    document.querySelector("#bustype").value = bus.busType;
    document.querySelector("#from").value = bus.routeFrom;
    document.querySelector("#to").value = bus.routeTo;
    document.querySelector("#date").value = bus.busJourneyDate;
    document.querySelector("#arrival").value = bus.arrivalTime;
    document.querySelector("#departure").value = bus.departureTime;
    document.querySelector("#totalseat").value = bus.availableSeats;
    document.querySelector("#available").value = bus.availableSeats;
    document.querySelector("#fare").value = bus.fare;
}