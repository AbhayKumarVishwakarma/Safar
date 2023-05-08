const form = document.querySelector("form");
form.addEventListener("submit", (event)=> {
    event.preventDefault(); 

    const data = new FormData(form);
    let obj = {}
    for (let [key, value] of data.entries()) {
                switch(key) {
            case 'busName':
            obj['busName'] = value;
            break;
            case 'driverName':
            obj['driverName'] = value;
            break;
            case 'bus_type':
            obj['busType'] = value;
            break;
            case 'source':
            obj['routeFrom'] = value;
            break;
            case 'destination':
            obj['routeTo'] = value;
            break;
            case 'busJourneyDate':
            obj['busJourneyDate'] = value;
            break;
            case 'arrival_time':
            obj['arrivalTime'] = value;
            break;
            case 'departure_time':
            obj['departureTime'] = value;
            break;
            case 'totalSeats':
            obj['seats'] = value;
            break;
            case 'fare':
            obj['fare'] = value;
            break;
            obj[key] = value;
            break;
        }
        obj['availableSeats'] = obj.seats;
        obj.route = {
            'routeFrom' : "a",
            'routeTo' : "b",
            'distance' : `${document.querySelector('#distance').value}`
        }
    }
    // send a fetch request with the form data
    addBus(obj);
})


async function addBus(obj){
    try {      
        const res = await fetch("http://localhost:8999/safar/admin/bus/add?key=safar123",{
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const out = await res.json();
        //bus added , 2sec delay
        alert("Bus added successfully!")
        setTimeout(function() {
            window.location.href = "busmenu.html";
          }, 2000); 

    } catch (error) {
        //showing alert for error
        alert(error);
    }
}


document.querySelector(".view-button").addEventListener("click",()=>{
    window.location.href = "viewBus.html";
})

document.querySelector(".update-button").addEventListener("click",()=>{
    window.location.href = "updateBusForm.html";
})

document.querySelector(".delete-button").addEventListener("click",()=>{
    window.location.href = "deleteBus.html";
})