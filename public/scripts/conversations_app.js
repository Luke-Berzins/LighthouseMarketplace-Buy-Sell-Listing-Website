$(() => {
  $(".conversation_title").click(function(){
     $(this).siblings(".conversations-container").toggle();
  });

  $(".sendMessage").click(function(){
    let newMess = $("[name='message']").val();
    console.log("newMess", newMess);
    let newMessage = `<div class='conversations-container userSent userSentNew'>
    <p> ${newMess} </p>
    <p style="color: white;"> Just sent </p>
    </div>`


    $(this).parents(".findMe").append(newMessage);


 });
});
<<<<<<< HEAD






=======
>>>>>>> 5aee0571b838e351b401dfc6966b4196b5d481b1
