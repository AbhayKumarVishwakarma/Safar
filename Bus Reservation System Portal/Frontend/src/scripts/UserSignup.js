

    document.querySelector("form").addEventListener("submit", myfun)
    // let arr = JSON.parse(localStorage.getItem("PDetails")) || [];

    function myfun(event) {
        event.preventDefault()

        let fName = document.querySelector("#firstname").value;
        let lName = document.querySelector("#lastname").value;
        let pEmail = document.querySelector("#email").value;
        
        let pReEmail = document.querySelector("#reEmail").value;
        let mobile = document.querySelector("#mobile").value;
        let pPassword = document.querySelector("#password").value;
        // let pBdate = document.querySelector("#date").value;
        // let pCountry = document.querySelector("#country").value;
        // let pState = document.querySelector("#state").value;

        // if (pName == "" || pEmail == "" ) {

        //     alert("Please fill correct details")
        // }
        // if(pEmail != pReEmail) {
        //     alert("Email not match")
        // }
         {
            let obj = {
                "firstName":fName,
                "lastName":lName,
                "mobile":mobile,
                "email":pEmail,
                "password":pPassword
                // pBdate,
                // pCountry,
                // pState
            }
            // arr.push(obj)
            // console.log(arr)
            // localStorage.setItem("pDetails", JSON.stringify(arr))
            // alert("Sign Up successful")
            // location.href = "index.html"
            addUser(obj)
        }

    }

    document.querySelector("#home").addEventListener("click", function myhome() {
        location.href = "index.html"
    })

    document.querySelector("#b2").addEventListener("click", function mylogin() {
        location.href = "Userlogin.html"
    })

    document.querySelector("#b3").addEventListener("click", function mySign() {
        location.href = "UserSignup.html"
    })

    // document.querySelector("#recipes").addEventListener("click", function myhome() {
    //     location.href = "recipes.html"
    // })

    // document.querySelector("#artical").addEventListener("click", function myhome(){
    //     location.href = "artical.html"

    // })

    async function addUser(obj){
        try {      
            const res = await fetch("http://localhost:8999/safar/user/register",{
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            const out = await res.json();
            //bus added , 2sec delay
            alert("User added successfully!")
            setTimeout(function() {
                window.location.href = "index.html";
              }, 2000); 
    
        } catch (error) {
            //showing alert for error
            alert(error);
        }
    }