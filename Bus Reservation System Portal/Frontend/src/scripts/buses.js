let url = "http://localhost:8999/safar/bus/all";
let buttons = null;

async function fetchData(){
    try{
         let res = await fetch(url);
         let out = await res.json();

         console.log(out)

         out.forEach(element => {
            document.querySelector(".busData").innerHTML +=   `<tr>
                    <td class="column1">${element.busName}</td>
                    <td class="column2">${element.routeFrom}</td>
                    <td class="column3">${element.routeTo}</td>
                    <td class="column4">₹ ${element.fare}</td>
                    <td class="column5">${element.availableSeats}</td>
                    <td class="column6"><button id="bus${element.busId}" >Book</button></td>
                </tr>`;
         });

         buttons = document.querySelectorAll('button');
         
         let busid;
         buttons.forEach(button => {
            button.addEventListener('click', function(event) {
              busid = event.target.id[3];

              localStorage.setItem("busid", busid);
              window.location.href = "./bus.html"
            });
          });
    } catch(error){
        console.log(error);
    }
}

fetchData();