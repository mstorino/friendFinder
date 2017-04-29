$("#submit").on("click", function(event) {
      event.preventDefault();

      	var currentUrl = window.location.origin;
      	var userArray;

      	$.ajax({url: currentUrl + "/api/friends", method: "GET" }).done(function(userArray){
      		
	        //create new friend object with information from user
	        var newFriend = {
	            userName: $("#userName").val().trim(),
	            scores: [
	            	$("#q1Selected").val(), 
	            	$("#q2Selected").val()
	            ]
	        };

			var bestFriend = "";
			var total = 0;
			var newTotal = 0;
			var oldFriend = "";
			var i = 0;
			apiCounter();
			
			function apiCounter(){
				for (i; i < userArray.length; i++) {
						oldFriend = userArray[i];
						answerCompare();
				}
			}

			function answerCompare(){
				for (var j = 0; j < newFriend.scores.length; j++) {
					newTotal = 0;

					if(oldFriend.scores[j] === newFriend.scores[j]) {
								// console.log(total);
						newTotal += 0;
					} else {
								
						newTotal += Math.abs(oldFriend.scores[j] - newFriend.scores[j]);
						console.log("newTotal" + newTotal + " " + oldFriend.userName);
						totalCompare();
					}
				}

			}

			function totalCompare(){
				if (newTotal > total) {
					total = newTotal;
					bestFriend = oldFriend.userName;
				} else if (newTotal === total) {
					bestFriend += " & " + oldFriend.userName
				} 
			}



		// for (i; i < userArray.length; i++) {
		// 			oldFriend = userArray[i];
					
		// 			for (var j = 0; j < newFriend.scores.length; j++) {

		// 				newTotal = 0;

		// 				if(oldFriend.scores[j] === newFriend.scores[j]) {
						
		// 					newTotal += 0;
		// 				} else {
							
		// 					newTotal += Math.abs(oldFriend.scores[j] - newFriend.scores[j]);
		// 						console.log("newTotal" + newTotal + " " + oldFriend.userName);
								
		// 						if (newTotal > total) {
		// 							total = newTotal;
		// 							bestFriend = oldFriend.userName;
		// 						} else if (newTotal === total) {
		// 							bestFriend += " & " + oldFriend.userName
		// 						} 
		// 				}
		// 			}

		// 	}

			console.log("High Score: " + total + ". Your new best friend: " + bestFriend);

		//empty fields

		//post data to friends API
		$.post("/api/friends", newFriend);
	});
});
