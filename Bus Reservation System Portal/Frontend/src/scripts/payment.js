
let reservation = JSON.parse(localStorage.getItem("rev"));
let userkey = localStorage.getItem("userkey");
let url = "http://localhost:8999/safar/user/reservation/add" + "?key=" + userkey;
console.log(reservation);


document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();

    let card_number = document.querySelector("#card_number").value;
    let cvv = document.querySelector("#cvv").value;

    if((card_number + "").length === 16 && (cvv + "").length == 3 ){
        alert("Payment successfull \n Reservation Booked");
        fetchData();
    } else {
        alert("Payment failed");
    }
})

async function fetchData(){
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservation)
      };

    await fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));

    
     window.location.href = "./AllRev.html";
}