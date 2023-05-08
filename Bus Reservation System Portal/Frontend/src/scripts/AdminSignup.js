

    document.querySelector("form").addEventListener("submit", myfun)
    let arr = JSON.parse(localStorage.getItem("PDetails")) || [];

    function myfun(event) {
        event.preventDefault()

        let pName = document.querySelector("#name").value;
        let pEmail = document.querySelector("#email").value;
        let pReEmail = document.querySelector("#reEmail").value;
        let pPassword = document.querySelector("#password").value;
        // let pBdate = document.querySelector("#date").value;
        // let pCountry = document.querySelector("#country").value;
        // let pState = document.querySelector("#state").value;

        if (pName == "" || pEmail == "" ) {

            alert("Please fill correct details")
        }
        // if(pEmail != pReEmail) {
        //     alert("Email not match")
        // }
        else {
            let obj = {
                pName,
                pEmail,
                pPassword,
                // pBdate,
                // pCountry,
                // pState
            }
            arr.push(obj)
            console.log(arr)
            localStorage.setItem("pDetails", JSON.stringify(arr))
            alert("Sign Up successful")
            location.href = "index.html"
        }

    }

    document.querySelector("#home").addEventListener("click", function myhome() {
        location.href = "index.html"
    })

    document.querySelector("#b2").addEventListener("click", function mylogin() {
        location.href = "Adminlogin.html"
    })

    document.querySelector("#b3").addEventListener("click", function mySign() {
        location.href = "AdminSignup.html"
    })

    // document.querySelector("#recipes").addEventListener("click", function myhome() {
    //     location.href = "recipes.html"
    // })

    // document.querySelector("#artical").addEventListener("click", function myhome(){
    //     location.href = "artical.html"

    // })

