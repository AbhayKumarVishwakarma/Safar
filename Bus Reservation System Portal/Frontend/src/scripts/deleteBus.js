const form = document.querySelector("form");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    deleteBus();
})

async function deleteBus(){
try {      
    const res = await fetch(`http://localhost:8999/safar/admin/bus/delete/${document.querySelector("#busId").value}?key=safar123`,{
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    });

    console.log(res);
    if(res.ok){
       
         //bus delete , 2sec delay
        alert("Bus Deleted successfully!")
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