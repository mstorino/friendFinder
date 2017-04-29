// ===============================================================================
// DATA
// Below data will hold all of the user surveys.
// Initially we just set it equal to a "dummy" user.
// ===============================================================================

var userArray = [
  {
    userName: "Sorrento",
    userPhoto: "http://placekitten.com/90/90",
    scores: [
		1,
		2,
      	3,
      	5,
      	1,
      	5
    ]
  },
  {
    userName: "Aech",
    userPhoto: "http://placekitten.com/90/90",
    scores: [
		2,
		3,
		5,
		1,
		4,
		1
    ]
  },
  {
    userName: "Daito",
    userPhoto: "http://placekitten.com/90/90",
    scores: [
		1,
		5,
		2,
		3,
		4,
		3
      	
    ]
  },
  {
    userName: "Shoto",
    userPhoto: "http://placekitten.com/90/90",
    scores: [
		4,
		5,
      	2,
      	3,
      	3,
      	3
    ]
  },
  {
    userName: "Art3mis",
    userPhoto: "http://placekitten.com/90/90",
    scores: [
		5,
		1,
		1,
		1,
		2,
		4
      	
    ]
  },
  {
    userName: "iRok",
    userPhoto: "http://placekitten.com/90/90",
    scores: [
		3,
		2,
		4,
		4,
		1,
      	5
    ]
  },
  {
    userName: "Parzival",
    userPhoto: "http://placekitten.com/90/90",
    scores: [
		5,
		4,
		1,
		2,
		5,
		2
      	
    ]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = userArray;