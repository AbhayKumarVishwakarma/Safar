async function FetchedAllData() {
    try {
        let fetch_todo_request = await fetch(`http://localhost:8999/safar/feedback/all`, {
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
        td1.innerHTML = elem.feedBackId
        let td2 = document.createElement("td")
        td2.innerHTML = elem.user.firstName
        let td3 = document.createElement("td")
        td3.innerHTML = elem.bus.busName
        let td4 = document.createElement("td")
        td4.innerHTML = elem.bus.busJourneyDate
        let td5 = document.createElement("td")
        td5.innerHTML = elem.bus.routeFrom
        let td6 = document.createElement("td")
        td6.innerHTML = elem.bus.routeTo
        let td7 = document.createElement("td")
        td7.innerHTML = elem.bus.driverName
        let td8 = document.createElement("td")
        td8.innerHTML = elem.driverRating
        let td9 = document.createElement("td")
        td9.innerHTML = elem.serviceRating
        let td10 = document.createElement("td")
        td10.innerHTML = elem.overallRating
        let td11 = document.createElement("td")
        td11.innerHTML = elem.comments
        let td12 = document.createElement("td")
        td12.innerHTML = elem.feedbackDateTime

        row.append(td1, td2, td3, td4, td5, td6, td7, td8, td9, td10, td11, td12)

        document.querySelector("tbody").append(row)
    })

}
