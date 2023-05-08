let id = localStorage.getItem("userid");
let key = localStorage.getItem("userkey");

async function fetchData(){
    try{
        let res = await fetch("http://localhost:8999/safar/user/reservation/"+ id +"?key=" + key);
        let out = await res.json();

        console.log(out);

        out.forEach(element => {
            document.querySelector(".busData").innerHTML +=   `<tr>
                    <td class="column1">${element.reservationID}</td>
                    <td class="column2">${element.source}</td>
                    <td class="column3">${element.destination}</td>
                    <td class="column4">₹ ${element.fare}</td>
                    <td class="column5">${element.bookedSeat}</td>
                    <td class="column5">${element.journeyDate}</td>
                    <td class="column5">${element.date}</td>
                    <td class="column5">${element.status}</td>
                    <td class="column6"><button id="bus${element.reservationID}" >Delete</button></td>
                </tr>`;
         });

         let buttons = document.querySelectorAll("button");

         buttons.forEach(button => {
            button.addEventListener('click', function(event) {
              let id = event.target.id[3];
              var result = confirm("Are you sure you want to delete?");

              if(result){
                deleteData(id);
              }
            });
          });

    } catch(error){
        console.log(error)
    }
}

async function deleteData(rid){

    fetch("http://localhost:8999/safar/user/reservation/delete/"+ rid +"?key=" + "zxc@12", {
        method: "DELETE",
        headers: {
            'Content-Type' : 'application/json',
        }
    }).error(error => console.log(error))
}

fetchData();