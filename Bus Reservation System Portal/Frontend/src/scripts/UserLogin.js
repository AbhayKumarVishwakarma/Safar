

    document.querySelector("form").addEventListener("submit", myfun)

    function myfun(event) {
        event.preventDefault();

        // let login = JSON.parse(localStorage.getItem("pDetails"))

        let pEmail = document.querySelector("#email").value
        let pPassword = document.querySelector("#password").value

        let obj = {
            "email":pEmail,
            "password":pPassword
        }
        // let flag = "no";
        // login.forEach(function (element, index) {
        //     if (element.pEmail === pObj.pEmail && element.pPassword === pObj.pPassword) {
        //         flag = "yes"
        //     }

        //     else if (element.pEmail !== pObj.pEmail) {
        //         alert("Wrong Email")
        //     }
        //     else if (element.pPassword !== pObj.pPassword) {

        //         alert("Wrong Password")
        //     }
        // })

        // if (flag == "yes") {
        //     alert("login Succesfully")
        //     location.href = "index.html"
        // }

        loginUser(obj)
    }


    document.querySelector("#home").addEventListener("click", function myhome() {
        location.href = "index.html"
    })

    document.querySelector("#b3").addEventListener("click", function mySign() {
        location.href = "UserSignup.html"
    })

    document.querySelector("#b2").addEventListener("click", function mylogin() {
        location.href = "UserLogin.html"
    })

    // document.querySelector("#recipes").addEventListener("click", function myhome() {
    //     location.href = "recipes.html"
    // })

    // document.querySelector("#artical").addEventListener("click", function myhome(){
    //    location.href = "artical.html"

    
    // })

    async function loginUser(obj){
        try {      
            const res = await fetch("http://localhost:8999/safar/user/login",{
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    "Content-Type": "application/json"
                }
            });
    
            const out = await res.json();
            if(res.ok){
                alert("User Logged-in successfully!")
            setTimeout(function() {
                window.location.href = "index.html";
              }, 2000); 
            }
            
    
        } catch (error) {
            //showing alert for error
            alert(error);
        }
    }
