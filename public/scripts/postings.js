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

