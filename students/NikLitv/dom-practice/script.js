
function showMainImage(){
    let showImage = document.getElementById('mainConteiner')
    showImage.innerHTML = `<img class="main__background" src="https://cdn.motor1.com/images/mgl/1ZzoQq/s3/vw-id-buzz-teaser.jpg" width="100%" srcset="">`
}
showMainImage()

 function tapPassat1()  {
       mainContainer.innerHTML = ''
    let mainContainerContent = document.createElement('div')
    mainContainer.append(mainContainerContent)
    mainContainerContent.classList = 'mainContainerContent'

    let mainContainerImage = document.createElement('div')
    mainContainerContent.append(mainContainerImage)
    mainContainerImage.innerHTML ='<img src="https://autoiwc.ru/images/volkswagen/volkswagen-passat-b1.webp" alt="Passat B1" width="100%" >'
    mainContainerImage.classList = 'mainContainerImage'

    let mainContainerText = document.createElement('div')
    mainContainerContent.append(mainContainerText)
    mainContainerText.innerHTML = '<p>Volkswagen Passat вперше був представлений в 1973 році йому спочатку хотіли привласнити тільки індекс 511, однак згодом вирішили зупинитися на власному імені, Passat, за аналогією з атмосферним явищем, яке визначає клімат на планеті. Спочатку пропонувалося чотири типи кузова: 2- і 4-дверні седани, а також 3- і 5-дверні хечтбеки. Стиль автомобіля був розроблений італійським дизайнером Джорджетто Джуджаро. Перший Passat був ідентичний Audi 80, представленої роком раніше. 5-дверний універсал з\'явився в 1974 році. У залежності від модифікації машини мали два прямокутні, 2 або 4 круглі фари спереду.</p>'
    mainContainerText.classList = 'mainConteinerText'
}

document.getElementById('buttonPassat1').addEventListener('click',() => tapPassat1())

function tapPassat2()  {
  
    mainContainer.innerHTML = ''
    let mainContainerContent = document.createElement('div')
    mainContainer.append(mainContainerContent)
    mainContainerContent.classList = 'mainContainerContent'
    let mainContainerImage = document.createElement('div')
    mainContainerContent.append(mainContainerImage)
    mainContainerImage.innerHTML ='<img src="https://autoiwc.ru/images/volkswagen/volkswagen-passat-b2.webp" alt="Passat B2" width="100%" >'
    mainContainerImage.classList = 'mainContainerImage'

    let mainContainerText = document.createElement('div')
    mainContainerContent.append(mainContainerText)
    mainContainerText.innerHTML = '<p>Друге покоління Volkswagen Passat побачило світ у 1980 році у вигляді 3- і 5-дверного хетчбеків, в декількох варіантах виконання: G (базовому), L і GL. Побудований на базі нової платформи В2 (яка виявилася довшою від попередньої) автомобіль одержав і нову зовнішність, у тому числі великі квадратні фари, що стали фамільною рисою наступних поколінь Passat. На автомобіль встановлювалися двигуни: 1,6-літровий дизельний потужністю 54 к. с. і бензинові 1,3-літровий потужністю 55 к. с., 1,6-літровий потужністю 75 к. с. і 1,9-літровий 5-циліндровий потужністю 115 к. с. (Встановлювався лише за спеціальним замовленням і не входив у базову комплектацію). Для північноамериканського ринку автомобіль отримав ім\'я Quantum, в Мексиці він називався Corsar, а в Бразилії Santana. У цьому ж році модельний ряд Passat поповнився 5-дверним універсалом, що отримав ім\'я Variant.</p>'
    mainContainerText.classList = 'mainConteinerText'
}

document.getElementById('buttonPassat2').addEventListener('click',() => tapPassat2())


function tapPassat3()  {
  
    mainContainer.innerHTML = ''
    let mainContainerContent = document.createElement('div')
    mainContainer.append(mainContainerContent)
    mainContainerContent.classList = 'mainContainerContent'
    let mainContainerImage = document.createElement('div')
    mainContainerContent.append(mainContainerImage)
    mainContainerImage.innerHTML ='<img src="https://avtobak.net/wp-content/uploads/2017/02/4a617df4-770x300.jpg" alt="Passat B2" width="100%" >'
    mainContainerImage.classList = 'mainContainerImage'

    let mainContainerText = document.createElement('div')
    mainContainerContent.append(mainContainerText)
    mainContainerText.innerHTML = '<p>Третє покоління Passat, що отримало умовне позначення В3, надійшло в продаж у Європі в лютому 1988 року (у Північній Америці в 1990 році, а в Південній у 1995 році). Відмінними рисами автомобіля стали блок-фари і відсутність решітки радіатора. Це був перший поперечно-моторний Passat, побудований на власній платфомі Volkswagen, який не має нічого спільного з платформою B3 Audi. Автомобіль, хоча і позначений як B3, був заснований на платформі A, яка використовувалася для моделі Volkswagen Golf. Це покоління Passat мало всього 2 типу кузова: чотирьохдверний седан або п\'ятидверний універсал. Модель іменувалася Passat на всіх ринках.</p>'
    mainContainerText.classList = 'mainConteinerText'
}

document.getElementById('buttonPassat3').addEventListener('click',() => tapPassat3())

function tapPassat4()  {
  
    mainContainer.innerHTML = ''
    let mainContainerContent = document.createElement('div')
    mainContainer.append(mainContainerContent)
    mainContainerContent.classList = 'mainContainerContent'
    let mainContainerImage = document.createElement('div')
    mainContainerContent.append(mainContainerImage)
    mainContainerImage.innerHTML ='<img src="https://a.d-cd.net/c1da0cas-960.jpg" alt="Passat B2" width="100%" >'
    mainContainerImage.classList = 'mainContainerImage'

    let mainContainerText = document.createElement('div')
    mainContainerContent.append(mainContainerText)
    mainContainerText.innerHTML = '<p>Чергова модернізація Passat відбулась в 1993 році і хоча за своєю конструкцією автомобілі не значно відрізнялися від попередників їх прийнято було вважати четвертим поколінням Passat, яке отримало індекс В4. Автомобілі відрізнялися від B3 зовнішніми кузовними панелями і оформленням салону. На Passat знову з\'явилася решітка радіатора, виконана в стилі інших моделей Volkswagen. Крім нової гами двигунів та інших технічних новинок, Passat вже в базовій комплектації отримав дві фронтальні подушки безпеки й систему ABS. На Європейському ринку Volkswagen Passat В4 був доступний у комплектаціях L, CL, GL, GT і VR6, повнопривідна версія традиційно отримала назву syncro.</p>'
    mainContainerText.classList = 'mainConteinerText'
}

document.getElementById('buttonPassat4').addEventListener('click',() => tapPassat4())




let showImageLogo = document.querySelector('.header__logo')
showImageLogo.addEventListener('click', ()=> showMainImage())


let headerButtons = document.getElementById('header_buttons')
let menuBtn = document.querySelector('.menu__btn');
let mainContainer = document.getElementById('mainConteiner')
menuBtn.addEventListener('click', function(e){
    
	

    headerButtons.classList.toggle('_mobile')
    menuBtn.classList.toggle('_mobile')
   
})

