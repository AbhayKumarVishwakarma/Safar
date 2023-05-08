let url = "";


async function fetchData(){
    try{
        let res = await fetch(url);
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
                    <td class="column6"><button id="bus${element.reservationID}" >Book</button></td>
                </tr>`;
         });

         buttons.forEach(button => {
            button.addEventListener('click', function(event) {
              let id = event.target.id[3];

              deleteData(id);
            });
          });

    } catch(error){
        console.log(error)
    }
}

async function deleteData(id){

}