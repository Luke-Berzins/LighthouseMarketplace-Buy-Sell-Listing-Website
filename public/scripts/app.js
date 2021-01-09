$(() => {
  $.ajax({
    method: "GET",
    url: "/api/users"
  }).done((users) => {
    for(user of users) {
      $("<div>").text(user.name).appendTo($("body"));
    }
  });;
});

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/postings"
  }).done((postings) => {
    for(post of postings) {
      $("<div>").text(post.name).appendTo($("body"));
    }
  });;
});

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/favorites"
  }).done((favorites) => {
    for(fav of favorites) {
      $("<div>").text(fav.name).appendTo($("body"));
    }
  });;
});

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/conversations"
  }).done((conversations) => {
    for(conversation of conversations) {
      $("<div>").text(conversation.name).appendTo($("body"));
    }
  });;
});

$(() => {
  $.ajax({
    method: "GET",
    url: "/api/messages"
  }).done((messages) => {
    for(message of messages) {
      $("<div>").text(message.name).appendTo($("body"));
    }
  });;
});


// Webpages

$(() => {
  $.ajax({
    method: "GET",
    url: "/favorites"
  }).done((favorites) => {
    for(fav of favorites) {
      $("<div>").text(fav.name).appendTo($("body"));
    }
  });;
});

$(() => {
  $.ajax({
    method: "GET",
    url: "/conversations"
  }).done((conversations) => {
    for(conversation of conversations) {
      $("<div>").text(conversation.name).appendTo($("body"));
    }
  });;
});
