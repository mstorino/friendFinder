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
	        userPhoto: $("#userPhoto").val().trim(),
	        scores: [
	            $("#q1Selected").val(), 
	           	$("#q2Selected").val(),
	           	$("#q3Selected").val(),
	           	$("#q4Selected").val(),
	           	$("#q5Selected").val(),
	           	$("#q6Selected").val()
	        ]
	     };

		var bestFriend = [];
		var total = 100;
		var newTotal;

		// console.log(newFriend.userPhoto);

	// get data from api

      	$.ajax({url: currentUrl + "/api/friends", method: "GET" }).done(function(userArray){
      		
	        console.log(userArray);

			apiCounter();
			
			function apiCounter(){
				for (var i=0; i < userArray.length; i++) {
						oldFriend = userArray[i];
						answerCompare();
				}
				// console.log(bestFriend);
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
				// bestFriend = oldFriend.userName;
				bestFriend = oldFriend;
			} 
		}



		// post data to friends API

		$.post("/api/friends", newFriend);


		// Display Results in Survey Modal
		
		$("#myModal").modal('show');
		$("#myModal").on('shown.bs.modal', function(){
		$('#myModal').find('.modal-body').html('<div class="col-lg-12"><div class="text-center"><img src="' + bestFriend.userPhoto + '" alt="Picture Of Your Best Friend"></div><div class="text-center caption"><h3>' + bestFriend.userName + '</h3></div></div>');
		});



	});

//reset values

		$("#userName").val(" ");
		$("#userPhoto").val(" ");
	    $("#q1Selected").val("1"); 
	    $("#q2Selected").val("1");
	
});
