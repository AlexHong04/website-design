// Author: Tan Kok Hong
// Date:   21/9/2023
// Filename: addtocart.html 

$("#form_submit").submit(function (e) {
    e.preventDefault();
    new swal({
        title: "Success!",
        icon: "success",
        confirmButtonText: "ok",
    }).then(function (result) {
        if (result) {
            location.href = "../html/delivery.html"
        }
    })
});

function checkbox() {
    var validemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (document.form.f_name.value == "") {
        alert("Please enter your name !")
        document.form.f_name.focus();
    }
    else if (document.form.e_mail.value == "") {
        alert("Please enter your email address !")
        document.form.e_mail.focus();
    }
    else if (document.form.e_mail.value != "") {
        if (document.form.e_mail.value.match(validemail)) {
            if (document.form.address.value == "") {
                alert("Please enter your address !")
                document.form.address.focus();
            }
            else if (document.form.city.value == "") {
                alert("Please enter your city !")
                document.form.city.focus();
            }
            else if (document.form.state.value == "") {
                alert("Please enter your state !")
                document.form.state.focus();
            }
            else if (document.form.Z_code.value == "") {
                alert("Please enter your Zip code !")
                document.form.Z_code.focus();
            }
            else if (document.form.N_card.value == "") {
                alert("Please enter your Name on Card !")
                document.form.N_card.focus();
            }
            else if (document.form.C_card.value == "") {
                alert("Please enter your Card Number !")
                document.form.C_card.focus();
            }
            else if (document.form.E_month.value == "") {
                alert("Please enter your Exp Month !")
                document.form.E_month.focus();
            }
            else if (document.form.P_number.value == "") {
                alert("Please enter your Phone Number !")
                document.form.P_number.focus();
            }
            else if (document.form.CVV.value == "") {
                alert("Please enter your CVV !")
                document.form.CVV.focus();
            }
        }
        else {
            alert("Please enter valid email!!");
            document.form.e_mail.value.focus();
        }
    }
}