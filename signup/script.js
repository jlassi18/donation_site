const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', () => {
  window.location.href = 'sign/loginEntreprise.html'; 
});

button2.addEventListener('click', () => {
  window.location.href = 'sign/loginPersonne.html'; 
});