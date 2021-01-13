const { on } = require("nodemon");

$(() => {
  $(".fa-heart").on('click', function(e) {
    e.preventDefault();
    const $postingIdClicked = $(this).parents(".posting-container").find(".posting-id").text();
    $.ajax({
      method: "POST",
      url: "/postings",
      data: {postingId: $postingIdClicked}
    }).then((response) => {
      console.log(response)
    });;
  });
  });

  function setColor(e, btn, color) {
    var target = e.target,
        count = +target.dataset.count;

     target.style.backgroundColor = count === 1 ? "#FF0000" : '#FFFFFF';
     target.dataset.count = count === 1 ? 0 : 1;
  };

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }




