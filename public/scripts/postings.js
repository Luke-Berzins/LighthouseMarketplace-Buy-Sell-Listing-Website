$(() => {
  $(".fa-heart").on('click', function(e) {
    e.preventDefault();
    console.log("REACHED")
    const $postingIdClicked = $(this).parents(".posting-container").find(".posting-id").text();
    console.log("THE POSTING ID IS >>>>>>", $postingIdClicked);
    console.log("THE POSTING ID type IS >>>>>>", typeof $postingIdClicked);
    $.ajax({
      method: "POST",
      url: "/postings",
      data: {postingId: $postingIdClicked}
    }).then((response) => {
      console.log("HELLOOOO");
    });;
  });
  });

  function setColor(e, btn, color) {
    var target = e.target,
        count = +target.dataset.count;

     target.style.backgroundColor = count === 1 ? "#FF0000" : '#FFFFFF';
     target.dataset.count = count === 1 ? 0 : 1;
  }

