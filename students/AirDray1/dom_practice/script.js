import {animojes, socials} from './animojies.js'

let myAnimoji = [];
let learnAnimoji = []; 

function createPost(element, id, title, description, sticker){
    let block = document.createElement('div');
    let block_img = document.createElement('div');
    let block_info = document.createElement('div');
    let info_style = document.createElement('div');
    let block_buttons = document.createElement('div');
    let img = document.createElement('img');
    let main = document.querySelector('.main');

    let add = document.createElement('button');
    let del = document.createElement('button')
    let learn = document.createElement('button');

    block.className = 'block';
    block_info.className = 'block_info';
    block_img.className = 'block_img';
    block_buttons.className = 'block_buttons';
    add.className = 'btn add_btn';
    del.className = 'btn del_btn';
    learn.className = 'btn learn_btn';
    info_style.className = 'info_style';
    img.className = 'img'

    info_style.innerHTML = `<h2 class="block_title">${title}</h2>
                            <p class="info_text">${description}</p>`
    img.src = `${sticker}`;

    add.innerHTML = '<p class="btn_text">Додати емоцію</p><img class="btn_logo add" src="/img/icons/bag-plus.svg">';
    del.innerHTML = '<p class="btn_text">Видалити емоцію</p><img class="btn_logo del" src="/img/icons/trash.svg">';
    learn.innerHTML = '<p class="btn_text">Дізнатися більше</p><img class="btn_logo del" src="/img/icons/three-dots.svg">';

    main.append(block);
    block.append(block_img);
    block_img.append(img);
    block.append(block_info);
    block_info.append(info_style);
    info_style.append(block_buttons)

    block_buttons.append(add);
    myAnimoji.map(el => {
        if(JSON.stringify(el) === JSON.stringify(element)){
            block_buttons.append(add);
            block_buttons.innerHTML = '';
            block_buttons.append(del);
        }
    }) 
    block_buttons.append(learn);

    add.addEventListener('click', () => {
        if(myAnimoji.indexOf(element) == -1){
            myAnimoji.push(element);
            block_buttons.innerHTML = '';
            block_buttons.append(del);
            block_buttons.append(learn);
        }
    })

    del.addEventListener('click', () => {
        myAnimoji.map((el, i) => {
            if(el.id == element.id){
                myAnimoji.splice(i, 1);
            }
        })
        block_buttons.innerHTML = '';
        block_buttons.append(add);
        block_buttons.append(learn);
    })

    learn.addEventListener('click', () => {
        main.innerHTML = ``;
        learnAnimoji.push(element);
        learnAnimoji.map(element => {showPost(element, element.id, element.title, element.description, element.img, element.wiki)})
        block_buttons.innerHTML = '';
        block_buttons.append(add);
    })
}

function showPost(element, id, title, description, sticker, wiki_http){
    let block = document.createElement('div');
    let block_img = document.createElement('div');
    let block_info = document.createElement('div');
    let info_style = document.createElement('div');
    let block_buttons = document.createElement('div');
    let img = document.createElement('img');
    let main = document.querySelector('.main');

    let add = document.createElement('button');
    let del = document.createElement('button')
    let wiki = document.createElement('button');
    let next = document.createElement('button');
    let previous = document.createElement('button');
    let cancel = document.createElement('button');

    block.className = 'block';
    block_info.className = 'block_info';
    block_img.className = 'block_img';
    info_style.className = 'info_style';
    block_buttons.className = 'block_buttons';
    add.className = 'btn add_btn';
    del.className = 'btn del_btn';
    wiki.className = 'btn';
    next.className = 'btn';
    previous.className = 'btn';
    cancel.className = 'btn cancel_btn';
    img.className = 'img';

    info_style.innerHTML = `<h2 class="block_title">${title}</h2>
                            <span class="info_text">${description}</span>`
    
    img.src = `${sticker}`;
    
    add.innerHTML = '<p class="btn_text">Додати емоцію</p><img class="btn_logo add" src="/img/icons/bag-plus.svg">';
    del.innerHTML = '<p class="btn_text">Видалити емоцію</p><img class="btn_logo del" src="/img/icons/trash.svg">';
    wiki.innerHTML = `<p class="btn_text">Відкрити Wiki</p><img class="btn_logo wiki" src="/img/icons/Wikipedia-Logo.wine1.png" width="32px" height="32px">`;
    cancel.innerHTML = '<p class="btn_text">Повернутися до вибору</p><img class="btn_logo" src="/img/icons/caret-left-square.svg" width="22px" height="22px">';
    next.innerHTML = '<p class="btn_text">Наступний</p><img class="btn_logo" src="/img/icons/caret-right-square.svg" width="22px" height="22px">';
    previous.innerHTML = '<img class="btn_logo previus_btn" src="/img/icons/caret-left-square.svg" width="22px" height="22px"><p class="btn_text">Попередній</p>';

    main.append(block);
    block.append(block_img);
    block_img.append(img);
    block.append(block_info);
    block_info.append(info_style);
    info_style.append(block_buttons);
    
    block_buttons.append(add);
    myAnimoji.map(el => {
        if(JSON.stringify(el) === JSON.stringify(element)){
            block_buttons.append(add);
            block_buttons.innerHTML = '';
            block_buttons.append(del);
        }
    })
    block_buttons.append(wiki); 
    block_buttons.append(previous);
    block_buttons.append(next);
    info_style.append(cancel);

    add.addEventListener('click', () => {
        if(myAnimoji.indexOf(element) == -1){
            myAnimoji.push(element);
            block_buttons.innerHTML = '';
            block_buttons.append(del);
            block_buttons.append(wiki);
            block_buttons.append(previous);
            block_buttons.append(next);
        }
    })

    del.addEventListener('click', () => {
        myAnimoji.map((el, i) => {
            if(el.id == element.id){
                myAnimoji.splice(i, 1);
            }
        })
        block_buttons.innerHTML = '';
        block_buttons.append(add);
        block_buttons.append(wiki);
        block_buttons.append(previous);
        block_buttons.append(next);
    })

    wiki.addEventListener('click', () => {
        window.open(`${wiki_http}`, "_blank");
    })

    next.addEventListener('click', () => {
        main.innerHTML = '';
        learnAnimoji.map((el, i) => {
            if(el.id == element.id){
                learnAnimoji.splice(i, 1);
            }
        })
        animojes.map(el => {
            if(el.id == id+1){
                learnAnimoji.push(el);
                learnAnimoji.map(el => {showPost(el, el.id, el.title, el.description, el.img, el.wiki)});
                console.log(learnAnimoji);
                console.log(animojes[0])
            }
        })
        if(learnAnimoji[0] == undefined){
            learnAnimoji.push(animojes[0]);
            learnAnimoji.map(el => {showPost(el, el.id, el.title, el.description, el.img, el.wiki)});
        }
        console.log(learnAnimoji);
    })

    previous.addEventListener('click', () => {
        main.innerHTML = '';
        learnAnimoji.map((el, i) => {
            if(el.id == element.id){
                learnAnimoji.splice(i, 1);
            }
        })
        console.log(learnAnimoji);
        animojes.map(el => {
            if(el.id == id-1){
                learnAnimoji.push(el);
                learnAnimoji.map(el => {showPost(el, el.id, el.title, el.description, el.img, el.wiki)});
                console.log(learnAnimoji);
            }
        })
        if(learnAnimoji[0] == undefined){
            learnAnimoji.push(animojes[animojes.length-1]);
            console.log(learnAnimoji[0]);
            learnAnimoji.map(el => {showPost(el, el.id, el.title, el.description, el.img, el.wiki)});
        }
        console.log(learnAnimoji);
    })

    cancel.addEventListener('click', () => {
        main.innerHTML = '';
        learnAnimoji.map((el, i) => {
            if(el.id == element.id){
                learnAnimoji.splice(i, 1);
            }
        })
        animojes.map(element => {createPost(element, element.id, element.title, element.description, element.img)})
    })
}

function createSocialBlock(alt, url, where, block_name, img_name, link){
    let block = document.createElement('div');
    let tab =  document.createElement('a');
    let img = document.createElement('img');

    block.className = `${block_name}`;
    tab.href = `${link}`;
    tab.target = 'blank'
    img.className = `${img_name}`;

    img.alt = `${alt}`;
    img.src = (`${url}`);

    where.append(block);
    block.append(tab);
    tab.append(img);
}

let main_page = document.querySelector('.main-page');
let about_author = document.querySelector('.about-author');
let about_us = document.querySelector('.about-us');
let basket = document.querySelector('.basket-item');

main_page.addEventListener('click', () => {
    let main = document.querySelector('.main');
    main.innerHTML = '';
    animojes.map(element => {createPost(element, element.id, element.title, element.description, element.img)});
})

basket.addEventListener('click', () => {
    if(myAnimoji.length == 0){
    let main = document.querySelector('.main');
    main.innerHTML = '';
    let announcement = document.createElement('h1');
    announcement.innerText = 'У вас ще немає обраних емоцій. Виправте це!)';
    announcement.style.fontSize = '50px';
    announcement.style.textAlign = 'center';
    main.append(announcement);
    } else{
    let main = document.querySelector('.main');
    main.innerHTML = '';
    myAnimoji.map(element => {createPost(element, element.id, element.title, element.description, element.img)});
    }
})

about_author.addEventListener('click', () => {
    let block = document.createElement('div');
    let block_img = document.createElement('div');
    let block_info = document.createElement('div');
    let info_style = document.createElement('div');
    let block_buttons = document.createElement('div');
    let img = document.createElement('img');

    block.className = 'block';
    block_info.className = 'block_info';
    block_img.className = 'block_img';
    block_buttons.className = 'social block_buttons';
    info_style.className = 'info_style';
    img.className = 'img';

    info_style.innerHTML = `<h2 class="block_title">Білоус Андрій</h2>
                            <p class="info_text">Intern FullStack Developer</p>
                            <p class="info_text">Комунікабельний, відповідальний, найбільший мінус - приділяєбагато часу роботі!)</p>`
    img.src = `../img/about/author.jpg`;

    let main = document.querySelector('.main');
    main.innerHTML = '';

    main.append(block);
    block.append(block_img);
    block_img.append(img);
    block.append(block_info);
    block_info.append(info_style);
    info_style.append(block_buttons);

    socials.map(el =>{createSocialBlock(el.title, el.url, block_buttons, 'social-block','social-img', el.https)})
})

about_us.addEventListener('click', () => {
        let block = document.createElement('div');
        let block_img = document.createElement('div');
        let block_info = document.createElement('div');
        let info_style = document.createElement('div');
        let block_buttons = document.createElement('div');
        let img = document.createElement('img');

        block.className = 'block';
        block_info.className = 'block_info';
        block_img.className = 'block_img';
        block_buttons.className = 'block_buttons social';
        info_style.className = 'info_style';
        img.className = 'img';

        info_style.innerHTML = `<h2 class="block_title">Animoji</h2>
                                <p class="info_text">Ідея цього сайту спостерігати за емоційним та станом людини й потім виводити це у виді статистики з рекомендаціями</p>
                                <p class="info_text">Оскільки функціональна части виконана. Залишається зробити лише статистично. Тому стан сайту зараз у: Розробці)</p>`
        img.src = `../img/animoji/sticker33.png`;

        let main = document.querySelector('.main');
        main.innerHTML = '';

        main.append(block);
        block.append(block_img);
        block_img.append(img);
        block.append(block_info);
        block_info.append(info_style);
        info_style.append(block_buttons);
})

animojes.map(element => {createPost(element, element.id, element.title, element.description, element.img)});