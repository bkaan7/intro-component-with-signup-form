
// a control for firstname section
$(document).ready(function () {
  $(".downBtn").click(function () {
    if ($(".FirstName").val() == "") {
      $(".warningFN").css("display", "block");
      $(".fn-error").css("display", "block");
      $(".FirstName").css("border","1px solid red")
    } else {
      $(".warningFN").css("display", "none");
      $(".fn-error").css("display", "none");
      $(".FirstName").css("border","1px solid black")
    }
  });
});



// a control for lastname section
$(document).ready(function () {
  $(".downBtn").click(function () {
    if ($(".LastName").val() == "") {
      $(".warningLN").css("display", "block");
      $(".ln-error").css("display", "block");
      $(".LastName").css("border","1px solid red")

    } else {
      $(".warningLN").css("display", "none");
      $(".ln-error").css("display", "none");
      $(".LastName").css("border","1px solid black")

    }
  });
});



// a control for password section
$(document).ready(function () {
  $(".downBtn").click(function () {
    if ($(".Password").val() == "") {
      $(".warningPS").css("display", "block");
      $(".ps-error").css("display", "block");
      $(".Password").css("border","1px solid red")

    } else {
      $(".warningPS").css("display", "none");
      $(".ps-error").css("display", "none");
      $(".Password").css("border","1px solid black")

    }
  });
});




// a control for email section
$(document).ready(function () {
  $(".downBtn").click(function () {
    var email = $(".eMail").val();
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
      $(".warningMail").css("display", "block");
      $(".mail-error").css("display", "block");
      $(".eMail").css("border","1px solid red")


    } else {
      $(".warningMail").css("display", "none");
      $(".mail-error").css("display", "none");
      $(".eMail").css("border","1px solid black")

      
    }
  });
});
