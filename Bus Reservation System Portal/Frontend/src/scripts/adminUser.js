async function FetchedAllData() {
    try {
        let fetch_todo_request = await fetch(`http://localhost:8999/safar/admin/user/all?key=safar123`, {
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

FetchedAllData()

function ShowData(arr) {

    arr.forEach((elem) => {
        let row = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = elem.userID
        let td2 = document.createElement("td")
        td2.innerHTML = elem.firstName
        let td3 = document.createElement("td")
        td3.innerHTML = elem.lastName
        let td4 = document.createElement("td")
        td4.innerHTML = elem.mobile
        let td5 = document.createElement("td")
        td5.innerHTML = elem.email
        let td6 = document.createElement("td")
        td6.innerHTML = "********"
        let td7 = document.createElement("td")

        row.append(td1, td2, td3, td4, td5, td6)

        document.querySelector("tbody").append(row)
    })

}
