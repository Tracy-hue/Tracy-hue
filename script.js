/*get model*/
var modalBtn = document.queryselector('.modal-btn');
var modalBg = document.queryselector('.modal-bg');
var modalClose = document.queryselector('.modal-close');

modalBtn.addEventListener('click', function(){
  modalBtn.classList.add('bg-active');
});
modalClose.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
});
