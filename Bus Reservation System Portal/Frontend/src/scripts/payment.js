let submit = document.querySelector("form")
    submit.addEventListener("submit", myfun)

    function myfun(e){
        e.preventDefault()

        let cardNum = document.querySelector("#card_number").value;
        let cvv = document.querySelector("#cvv").value;
        if(cardNum.length===16&&cvv.length===3){
            alert("OTP sent successfully");
            location.href="otp.html";
        } 
        else{
            alert("Invalid details! Try again !");
        }
    }