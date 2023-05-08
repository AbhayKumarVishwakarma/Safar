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
        obj['busId'] = `${document.querySelector('#busId').value}`
        obj['availableSeats'] = obj.seats;
        obj.route = {
            'routeFrom' : `${document.querySelector('#source').value}`,
            'routeTo' : `${document.querySelector('#destination').value}`,
            'distance' : `${document.querySelector('#distance').value}`
        }
    }
    // send a fetch request with the form data
    updateBus(obj);
})


async function updateBus(obj){
    try {      
        const res = await fetch("http://localhost:8999/safar/admin/bus/update?key=safar123",{
            method: 'PUT',
            body: JSON.stringify(obj),
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log(res);
        if(res.ok){
           
             //bus delete , 2sec delay
            alert("Bus updated successfully!")
            setTimeout(function() {
                window.location.href = "busmenu.html";
            }, 2000); 
        } else {
            const out = await res.json();
            //showing error in alert
            alert(out.message);
            
        }

    } catch (error) {
        //showing alert for error
        alert(error);
    }
}

document.querySelector(".view-button").addEventListener("click",()=>{
    window.location.href = "viewBus.html";
})

document.querySelector(".add-button").addEventListener("click",()=>{
    window.location.href = "addBus.html";
})

document.querySelector(".delete-button").addEventListener("click",()=>{
    window.location.href = "deleteBus.html";
})