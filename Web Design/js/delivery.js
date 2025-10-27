// Author: Tan Kok Hong
// Date:   23/9/2023
// Filename: addtocart.html 


function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "sender@email_address.com",
    Password: "Enter your password",
    To: "receiver@email_address.com",
    From: "sender@email_address.com",
    Subject: "Sending Email using javascript",
    Body: "Well that was easy!!",
  }).then(function (message) {
    new swal({
      title: "Email sent successfully!",
      icon: "success",
      confirmButtonText: "ok",
    }).then(function (result) {
      if (result) {
        location.href = "../html/delivery.html";
      }
    });
    // alert("mail sent successfully")
  });
}
