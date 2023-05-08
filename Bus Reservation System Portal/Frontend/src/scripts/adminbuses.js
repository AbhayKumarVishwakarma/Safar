let url = "https://6385feaa875ca3273d4cccf8.mockapi.io/ItsNix";
let buttons = null;

async function fetchData(){
    try{
         let res = await fetch(url);
         let out = await res.json();

         console.log(out)

         out.forEach(element => {
            document.querySelector(".busData").innerHTML +=   `<tr id="bus${element.busId}" class="bus">
                    <td class="column1">${element.busName}</td>
                    <td class="column2">${element.driverName}</td>
                    <td class="column3">${element.routeFrom}</td>
                    <td class="column4">${element.routeTo}</td>
                    <td class="column5">₹ ${element.fare}</td>
                    <td class="column6">${element.availableSeats}</td>
                </tr>`;
         });

         buttons = document.querySelectorAll('tr');
         
         let busid;
         buttons.forEach(button => {
            button.addEventListener('click', function(event) {
              busid = button.id[3];

              localStorage.setItem("adminBus", busid);
              window.location.href = "./adminbus.html"
            });
          });
    } catch(error){
        console.log(error);
    }
}

fetchData();