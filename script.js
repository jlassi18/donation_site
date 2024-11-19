const joinUsBtn = document.getElementById('joinSection');

joinUsBtn.addEventListener('click', () => {
  window.location.href = 'signup/joinus1.html';
});

function myfunction1(){

  window.location.href ='programs/blocks1.html';
}

function myfunction2(){

  window.location.href ='programs/blocks2.html';
}

function myfunction3(){

  window.location.href ='programs/blocks3.html';
}

function myfunction4(){

  window.location.href ='programs/blocks4.html';
}

function myfunction5(){

  window.location.href ='programs/blocks5.html';
}

function myfunction6(){

  window.location.href ='programs/blocks6.html';
}

function myfunction7(){

  window.location.href ='programs/blocks7.html';
}


function goToProjectOwners() {
  window.location.href = 'owner/owner_accept.html';
}

document.getElementById('toggleButton').addEventListener('click', function() {
  var additionalText = document.getElementById('additionalText');
  if (additionalText.style.display === 'none') {
      additionalText.style.display = 'block';
      this.innerText = 'Voir moins';  // Change button text to "See less"
  } else {
      additionalText.style.display = 'none';
      this.innerText = 'En savoir plus';  // Change button text back to "See more"
  }
});

document.getElementById('toggleButton1').addEventListener('click', function() {
  var additionalText = document.getElementById('additionalText1');
  if (additionalText.style.display === 'none') {
      additionalText.style.display = 'block';
      this.innerText = 'Voir moins';  // Change button text to "See less"
  } else {
      additionalText.style.display = 'none';
      this.innerText = 'En savoir plus';  // Change button text back to "See more"
  }
});

document.getElementById('toggleButton2').addEventListener('click', function() {
  var additionalText = document.getElementById('additionalText2');
  if (additionalText.style.display === 'none') {
      additionalText.style.display = 'block';
      this.innerText = 'Voir moins';  // Change button text to "See less"
  } else {
      additionalText.style.display = 'none';
      this.innerText = 'En savoir plus';  // Change button text back to "See more"
  }
});