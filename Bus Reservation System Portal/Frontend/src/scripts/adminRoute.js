window.addEventListener("load", () => {
    FetchedAllData()
});

let add_btn = document.getElementById("routeAdd");
add_btn.addEventListener("click", function() {
    location.href ="addRoute.html"
});


async function FetchedAllData() {
    try {
        let fetch_todo_request = await fetch(`http://localhost:8999/safar/route/all?key=safar123`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (fetch_todo_request.ok) {
            let all_data = await fetch_todo_request.json()
            console.log(all_data)
            ShowData(all_data)
        }
    }
    catch (error) {
        console.log(error)
    }
}

// FetchedAllData()

function ShowData(arr) {

    arr.forEach((elem) => {
        let row = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = elem.routeID
        let td2 = document.createElement("td")
        td2.innerHTML = elem.routeFrom
        let td3 = document.createElement("td")
        td3.innerHTML = elem.routeTo
        let td4 = document.createElement("td")
        td4.innerHTML = elem.distance

        row.append(td1, td2, td3, td4)

        document.querySelector("tbody").append(row)
    })

}


// delete --------------------------

let delete_btn = document.getElementById("routeDelete");
delete_btn.addEventListener("click", function() {
    let id = document.getElementById("delete_ID").value;
    console.log(id)
    DeleteTodo(id);
});

async function DeleteTodo(id) {
    try {
      let delete_request = await fetch(`http://localhost:8999/safar/admin/route/delete/${id}?key=safar123`, {
        method: "DELETE"
      })
      if (delete_request.ok) {
        alert(`Route id ${id} deleted successfully`)
      }
      window.location.href = "./adminRoute.html"
    } catch (error) {
  
    }
  }