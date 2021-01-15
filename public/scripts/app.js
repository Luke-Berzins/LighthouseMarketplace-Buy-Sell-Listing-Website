$(() => {
  $(".logo-and-name").on("click", function() {
    window.location.replace("/");
  });
});

function playAudio(url) {
  new Audio(url).play();
}

