let addURL = "http://localhost:8999/safar/admin/route/add?key=safar123";

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    // send a fetch request with the form data
    addRoute();
})

async function addRoute() {
    try {
        let routeFrom = document.getElementById("from").value;
        let routeTo = document.getElementById("to").value;
        let distance = document.getElementById("dis").value;

        let obj = {
            "routeFrom": routeFrom,
            "routeTo": routeTo,
            "distance": distance
        }
        console.log(obj)

        let post_request = await fetch(addURL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })

        if(post_request.ok){
            alert("Route added successfully")
            location.href ="adminRoute.html"
        }

    } catch {
        
    }
}