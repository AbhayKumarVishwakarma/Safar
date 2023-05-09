viewBus();
async function viewBus(){
try {      
    const res = await fetch("http://localhost:8999/safar/bus/all");
    if(!res.ok){{
        alert("Some error occurred!")
    }}
    const out = await res.json();
    display(out)
    // console.log(out);
    //bus added , 2sec delay
    // alert("Bus added successfully!")
    // setTimeout(function() {
    //     window.location.href = "busmenu.html";
    //   }, 2000); 

} catch (error) {
    //showing alert for error
    alert(error);
}
}

async function display(data){
document.querySelector('tbody').innerHTML=null;
data.forEach((el,ind)=>{

    let tr=document.createElement("tr");

    let td1=document.createElement('td');
    td1.textContent=el.busId;
    
    let td2=document.createElement('td');
    td2.textContent=el.busName;

    let td3=document.createElement('td');
    td3.textContent=el.driverName;

    let td4=document.createElement('td');
    td4.textContent=el.busType;

    let td5=document.createElement('td');
    td5.textContent=el.routeFrom;

    let td6=document.createElement('td');
    td6.textContent=el.routeTo;

    let td7=document.createElement('td');
    td7.textContent=el.busJourneyDate;

    let td8=document.createElement('td');
    td8.textContent=el.arrivalTime;

    let td9=document.createElement('td');
    td9.textContent=el.departureTime;

    let td10=document.createElement('td');
    td10.textContent=el.seats;

    let td11=document.createElement('td');
    td11.textContent=el.availableSeats;

    let td12=document.createElement('td');
    td12.textContent=el.route.distance;

    let td13=document.createElement('td');
    td13.textContent=el.fare;

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9,td10,td11,td12,td13);
    document.querySelector("tbody").append(tr)
})
}

document.querySelector(".update-button").addEventListener("click",()=>{
    window.location.href = "updateBusForm.html";
})

document.querySelector(".add-button").addEventListener("click",()=>{
    window.location.href = "addBus.html";
})

document.querySelector(".delete-button").addEventListener("click",()=>{
    window.location.href = "deleteBus.html";
})