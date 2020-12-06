$(document).ready(function () {
  $('.submitBtn').click(function (e) {
    e.preventDefault();
    var name = $('#name').val();
    var email = $('#email').val();
    var tel = $('#tel').val();
    var url = $('#url').val();
    var msg = $('#msg').val();
    dataObject = {
      name: name,
      email: email,
      tel: tel,
      url: url,
      msg: msg
    }
    var x = new Date();
    var myHeading = "<p>" + JSON.stringify(dataObject) + "</p>";
    $("#modal-body").html(myHeading + x);
    $('#modal').modal('show');
    console.log(dataObject);
  });
});

// chat Js start
know = {
  "Hello": "Hi there!",
  "hi": "Hi there!",
  "hello": "Hi there!",
  "how are you?": "I am fine.",
  "who are you?": "I am a bot",
  "How old are you?": "I am infinte aged",
  "bye": "bye,take care!"
};
function talk() {
  var user = document.getElementById("userBox").value;
  document.getElementById("userBox").value = "";
  document.getElementById("chatLog").innerHTML += user + "<br>";
  if (user in know) {
    document.getElementById("chatLogBot").innerHTML += know[user] + "<br>";
  } else {
    document.getElementById("chatLogBot").innerHTML += "I don't understand! <br>";
  }

}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// chat Js end