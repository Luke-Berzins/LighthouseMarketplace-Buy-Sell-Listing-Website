$(() => {
$(".far").on('click', function(e) {
  e.preventDefault();
  const $postingIdClicked = $(this).parents(".posting-container").find(".posting-id").text();
  $.ajax({
    method: "POST",
    url: "/postings",
    data: {postingId: $postingIdClicked}
  }).then((response) => {
    console.log(response);
  });;
});
});

