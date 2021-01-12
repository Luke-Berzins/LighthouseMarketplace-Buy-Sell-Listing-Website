// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/postings"
//   }).done((postings) => {
//     for(post of postings) {
//       $("<div>").text(post.name).appendTo($("body"));
//     }
//   });;
// });

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/favorites"
//   }).done((favorites) => {
//     for(fav of favorites) {
//       $("<div>").text(fav.name).appendTo($("body"));
//     }
//   });;
// });

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/conversations"
//   }).done((conversations) => {
//     for(conversation of conversations) {
//       $("<div>").text(conversation.name).appendTo($("body"));
//     }
//   });;
// });

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/messages"
//   }).done((messages) => {
//     for(message of messages) {
//       $("<div>").text(message.name).appendTo($("body"));
//     }
//   });;
// });


// // Webpages

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/favorites"
//   }).done((favorites) => {
//     for(fav of favorites) {
//       $("<div>").text(fav.name).appendTo($("body"));
//     }
//   });;
// });

// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/conversations"
//   }).done((conversations) => {
//     for(conversation of conversations) {
//       $("<div>").text(conversation.name).appendTo($("body"));
//     }
//   });;
// });

//Ajax GET request to render search results.

// $(".search-postings-button").on('click', function(e) {
//   // e.preventDefault();
//   console.log("HELLOOO")
//   $.ajax({
//     method: "GET",
//     url: "/postings",
//     dataType: "json"
//   })
//     .then(response => {
//       let search = $(".search-bar").innerHTML;
//       console.log("search", search)
//       const searchPostings = query => {
//         db.query(`
//       SELECT postings.*, users.name FROM postings
//       JOIN users ON postings.user_id = users.id
//       WHERE postings.name = $1
//     `, [search])
//       .then(data => {
//         const templateVars = {
//           user: req.session["userName"],
//           postings: data.rows
//         };
//         res.render('postings', templateVars)
//       })
//       }
//       searchPostings(e);
//       $()
//     })
//     .catch(err => console.log(err));
// });

