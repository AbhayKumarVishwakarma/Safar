let reservation = JSON.parse(localStorage.getItem("rev"));

console.log(reservation);

// After successfull payment this reservation object should be
// send to backend to store in the database by calling /reservation/add API