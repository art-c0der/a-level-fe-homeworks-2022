
document.getElementById('content1').classList.add('active');

const burgerMenu = document.querySelector('.header__burger'); 

const navigation = document.querySelector('.navigation');

const content = Array.from(document.querySelectorAll('.content'));


const content1 = document.getElementById('content1').id;
const content2 = document.getElementById('content2').id;
const content3 = document.getElementById('content3').id;
const content4 = document.getElementById('content4').id;


burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navigation.classList.toggle('active');
})

navigation.addEventListener('click', (event) => {
   
    event.preventDefault();
    
    const button = event.target.dataset.id;

    content.forEach(item => {
        if(item.classList.contains('active')){
            item.classList.remove('active')
        }
    });



    if(button === content1 || button === content2 || button === content3 || button === content4){
          
        
        document.getElementById(button).classList.add('active');  
        burgerMenu.classList.remove('active');
        navigation.classList.remove('active'); 
    } 
    
});
