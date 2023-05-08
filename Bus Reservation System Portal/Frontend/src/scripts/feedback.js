
// #########################################################################Add Functon ###############################################################################
// ####################################################################################################################################################################
// #####################################################################################################################################################################
function AddFeedback(){
    let busId=document.getElementById("busId").value;
    let driverRating=document.getElementById("Driver").value;
    let serviceRating=document.getElementById("Service").value;
    let overallRating=document.getElementById("Overall").value;
    let comments=document.getElementById("Feedback").value;
    let feedbackDateTime=document.getElementById("Date").value;
    const modal = document.querySelector(".modal");

    
    fetch(`http://localhost:8999/safar/user/feedback/add/${busId}?key=asd@12`,{
    
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            "driverRating": driverRating,
            "serviceRating": serviceRating,
            "overallRating": overallRating,
            "comments": comments,
            "feedbackDateTime": feedbackDateTime,
    
        })
    }).then(response => {
        document.getElementById("p").innerHTML = "Feedback added Successfully";
        var modal = document.getElementById("myModal");
        modal.style.display = "block"; 
        
    })
    
    
    }





// ######################################################################## Upadate function ##############################################################################
// ####################################################################################################################################################################
// #####################################################################################################################################################################



    function UpdateFeedback(){
        let  feedBackId1=document.getElementById("feedBackId1").value;
        let driverRating1=document.getElementById("Driver1").value;
        let serviceRating1=document.getElementById("Service1").value;
        let overallRating1=document.getElementById("Overall1").value;
        let comments1=document.getElementById("Feedback1").value;
        let feedbackDateTime1=document.getElementById("Date1").value;
       
        
        fetch(`http://localhost:8999/safar/user/feedback/update?key=asd@12`,{
        
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                "feedBackId":feedBackId1,
                "driverRating":driverRating1,
                "serviceRating":serviceRating1,
                "overallRating":overallRating1,
                "comments":comments1,
                "feedbackDateTime":feedbackDateTime1,
        
            })
        }).then(response => {
            
               
            document.getElementById("p").innerHTML = "Feedback Updated Successfully";
            var modal = document.getElementById("myModal");
            modal.style.display = "block"; 
                
           
            
        })
        
        
        }

// // #########################################################################View Function ##############################################################################
// #
// // ####################################################################################################################################################################
// // #####################################################################################################################################################################



        function f1(){

            const viewfeedback = document.getElementById('viewfeedback');
            
            fetch("http://localhost:8999/safar/feedback/all").then(response => {
              
                    response.json().then(data => {
                       
                       data.forEach(Feedback =>{
            
                        const row = document.createElement('tr');
              row.innerHTML = `
                <td>${Feedback.feedBackId}</td> 
                <td>${Feedback.driverRating}</td>
                <td>${Feedback.serviceRating}</td>
                <td>${Feedback.overallRating}</td>
                <td>${Feedback.comments}</td>
                <td>${Feedback.bus.busName}</td>
                <td>${Feedback.user.firstName}</td>
               
              `;
              viewfeedback.appendChild(row);
            
             })
            })
               
            } ) 
                }


// #########################################################################Deletebutton###############################################################################
// ####################################################################################################################################################################
// #####################################################################################################################################################################

                function deleteRecord(){
                    document.getElementById("p").innerHTML = "Are You Sure ?";
                    var modal = document.getElementById("myModal");
                    modal.style.display = "block"; 

                    
                    let  id=document.getElementById("feedBackId2").value
                
                    fetch(`http://localhost:8999/safar/user/feedback/delete/${id}?key=asd@12`, {
                    
                    method: "DELETE"
                    
                    }).then(response => {
                   
                        
                        document.getElementById("p").innerHTML = "Feedback Deleted Successfully";
                        var modal = document.getElementById("myModal");
                        modal.style.display = "block"; 
                            
                       
                    
                    })
                    
                    
                    }
                    




// #########################################################################alertbutton###############################################################################
// ####################################################################################################################################################################
// #####################################################################################################################################################################
               
var modal = document.getElementById("myModal");


var span = document.getElementsByClassName("close")[0];


span.onclick = function() {
    modal.style.display = "none";
}





    
             
               
               
              