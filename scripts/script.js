const registration = document.querySelectorAll(".login");
const popup = document.querySelector(".popup");
const subit = document.querySelector('.popup__submit');
const form = document.querySelector(".popup__form");



function openPopup(popupName) {
  popupName.classList.add("popup_opened");
  form.reset();
}

function closePopup(popupName) {
  popupName.classList.remove("popup_opened");
}

for (item of registration){
    item.addEventListener('click', ()=>{
        openPopup(popup);
    });
   
}

subit.addEventListener('click', ()=>{
    closePopup(popup);
})