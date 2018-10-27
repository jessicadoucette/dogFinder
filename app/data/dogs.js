var dogList = [
  {
    name: "fido",
    photo: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71d59cd22de21da8d2939bc203617983&auto=format&fit=crop&w=2776&q=80",
    scores: [
			5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
		]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = dogList;