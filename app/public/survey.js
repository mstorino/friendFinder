// $(document).ready(function(){
//     $("#myBtn").click(function(){
//         $("#myModal").modal();
//     });
// });


$("#submit").on("click", function(event) {
      event.preventDefault();

      	var currentUrl = window.location.origin;
      	// var userArray;
      
      //create new friend object with information from user
	    var newFriend = {
	        userName: $("#userName").val().trim(),
	        scores: [
	            $("#q1Selected").val(), 
	           	$("#q2Selected").val()
	        ]
	     };

		var bestFriend = "";
		var total = 100;
		var newTotal;

	// get data from api

      	$.ajax({url: currentUrl + "/api/friends", method: "GET" }).done(function(userArray){
      		
	        

			apiCounter();
			
			function apiCounter(){
				for (var i=0; i < userArray.length; i++) {
						oldFriend = userArray[i];
						answerCompare();
				}
				console.log("Low Score: " + total + ". Your new best friend: " + bestFriend);
			}
		

	//functions

		function answerCompare(){
			newTotal = 0;
			for (var j = 0; j < newFriend.scores.length; j++) {

				if(oldFriend.scores[j] === newFriend.scores[j]) {
					newTotal += 0;
				} else {		
					newTotal += Math.abs(oldFriend.scores[j] - newFriend.scores[j]);
				}		
			}

			totalCompare();
		}

		function totalCompare(){
			if (newTotal < total) {
				total = newTotal;
				bestFriend = oldFriend.userName;
				console.log("new total is:" + total);
			} else if (newTotal === total) {
				bestFriend += " & " + oldFriend.userName;
			}
		}

		//empty fields

		//post data to friends API
		$.post("/api/friends", newFriend);
		
		$("#myModal").modal('show');
		$("#myModal").on('shown.bs.modal', function(){
				$('#myModal').find('.modal-body').append('<p>Friend: ' + bestFriend + '</p>');
		});



							

    
  // });



	});

//reset values

		$("#userName").val(" ");
	    $("#q1Selected").val("1"); 
	    $("#q2Selected").val("1");
	
});
