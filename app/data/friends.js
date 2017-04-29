// ===============================================================================
// DATA
// Below data will hold all of the user surveys.
// Initially we just set it equal to a "dummy" user.
// ===============================================================================

var userArray = [
  {
    userName: "Maggie",
    photo: "google.com",
    scores: [
		5,
		5
      	
    ]
  },
  {
    userName: "Bob",
    photo: "google.com",
    scores: [
		4,
		5
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = userArray;