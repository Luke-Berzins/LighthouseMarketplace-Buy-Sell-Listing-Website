$(() => {
  $(".conversation_title").click(function() {
    $(this).siblings(".conversations-container").toggle();
  });

  $(".sendMessage").click(function() {
    let newMess = $(this).siblings(".newMessageBody").val();
    console.log("newMess", newMess);
    let newMessage = `<div class='conversations-container userSent userSentNew'>
    <p> ${newMess} </p>
    <p style="color: white;"> Just sent </p>
    </div>`;


    $(this).parents(".findMe").append(newMessage);


  });
});
