function ChangePhotoByButton(classOfBox){
    buttons = document.querySelectorAll(classOfBox)
    console.log(buttons)

    for(let button of buttons){
        console.log(button)
        button.addEventListener("click", () => {
            console.log('Номер кнопки:', button.className.split(' ', 2)[1] );
            document.querySelector(".main__img").src = `sticker (${button.className.split(' ', 2)[1]}).png`
            document.querySelector(".main__heading").textContent = `Настроение котика номер: ${button.className.split(' ', 2)[1]}`
            
        })
    }
}

ChangePhotoByButton('.nav-bar__buttons a')
ChangePhotoByButton('.menu__box a')
