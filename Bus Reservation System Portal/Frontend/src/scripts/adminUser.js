

fetch("http://localhost:8999/safar/admin/user/all?key=safar123")
    .then((res) => res.json())
    .then((data) => displayTable(data))
    .catch((err) => alert(err))

function displayErr(err) {
    document.querySelector("h2").innerHTML = err;
}

function displayTable(arr) {

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
        td7.innerHTML = "Delete"
        // td7.style.width = 100%
        td7.style.background
        
        
        
        
        
        
        Color = "red"

        row.append(td1, td2, td3, td4, td5, td6, td7)

        document.querySelector("tbody").append(row)
    })


}
