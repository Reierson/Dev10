carousel = (function(){
  var box = document.querySelector('.carouselbox');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 &&
        counter < 0) {
      counter = amount - 1;
    }
    if (direction === 1 &&
        !items[counter]) {
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();

var nameInput = document.getElementById("name"),
    emailInput = document.getElementById("email"),
    phoneInput = document.getElementById("phone"),
    reasonInput = document.getElementById("reason"),
    additionalInput = document.getElementById("addInfo");

function validate () {

  var alertMsg = "";
  if (!(nameInput.value && (emailInput.value || phoneInput.value))) {
    if (nameInput.value) alertMsg+="\u2022 Please include at least one way to contact you (either an email or phone number)\n\n";
    else if (emailInput.value || phoneInput.value) alertMsg+="\u2022 Please enter your name\n\n";
    else alertMsg+="\u2022 Make sure you have entered your name and atleast one way to contact you\n\n";
  }

  if (reasonInput.value == "other" && !additionalInput.value) {
    alertMsg+="\u2022 (Other) Please explain your reason for inquiring in the Additional Information section\n\n";
  }
  var numChecked = document.querySelectorAll('input[type="checkbox"]:checked').length;
  if (numChecked < 1) {
    alertMsg+="\u2022 Please select at least one day that is convenient to contact you\n\n";
  }

  if (alertMsg) {
    alert(alertMsg);
    return false;
  }
}
