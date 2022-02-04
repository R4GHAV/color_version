function onSubmit () {
    var firstName = document.querySelector('#fname');
    var lastName = document.querySelector('#lname');
    var email = document.querySelector('#email');
    var subject = document.querySelector('#subject');
    var message = document.querySelector('#message');

    Email.send({
        Host: "smtp.gmail.com",
        Username : "Sec.protekt@gmail.com",
        Password : "Ritesh@30",
        To : 'hdevansh@gmail.com',
        From : "Sec.protekt@gmail.com",
        Subject : "MAIL RECIEVED !",
        Body : `Name: ${firstName + " " + lastName}  EMail : ${email} Subject:${subject} Message : ${message}`,
        }).then(
            message => alert("mail sent successfully")
        );
    //   document.querySelector('#message').value=''
    //   document.querySelector('#email').value=''
    //   document.querySelector('#name').value=''
}