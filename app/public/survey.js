$("#submit").on("click", function(event) {
      event.preventDefault();

        
          var newFriend = {
            userName: $("#userName").val().trim(),
            scores: $("#q1selected").val()
          	
          };

          console.log(newFriend);
});
 