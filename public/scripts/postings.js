$(() => {
  $(".fa-heart").on('click', function(e) {
    e.preventDefault();
    const $postingIdClicked = $(this).parents(".posting-container").find(".posting-id").text();
    $(this).toggleClass("fas far");
    let actionToDo = $(this).attr('class');
    $.ajax({
      method: "POST",
      url: "/postings",
      data: {
        postingId: $postingIdClicked,
        actionToDo: actionToDo
      }
    }).then((response) => {
    });
  });
});

$(() => {
  $(".mark-item-button, .remove-item-button").on('click', function(e) {
    e.preventDefault();
    let buttonText = "Mark as Sold";
    if ($(this).hasClass("mark-item-button")) {
      $(this).siblings("#item-availability").toggleClass("fa-check fa-times-circle");
      buttonText = $(this).text();
      $(this).text(buttonText == "Mark as Sold" ? "Mark as Available" : "Mark as Sold");
    }
    const $postingIdClicked = $(this).parents(".posting-container").find(".posting-id").text();

    if ($(this).hasClass("remove-item-button")) {
      $(this).parents(".posting-container").remove();
    }

    $.ajax({
      method: "POST",
      url: "/markItems",
      data: {
        actionToDo: buttonText,
        postingId: $postingIdClicked
      }
    }).then((res) => {
      console.log("AJAX request completed.");
    });
  });

  $(".sentMessage").click(function() {
    console.log("whatsup")
    $(this).addClass("alreadySent");
    $(this).siblings(".newConversation").addClass("alreadySent");
    $(this).siblings(".sentConfirm").removeClass("alreadySent");
  });


});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

