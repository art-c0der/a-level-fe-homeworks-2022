let bogdan = document.getElementsByClassName('navigation_link')[0];
let petro = document.getElementsByClassName('navigation_link')[1];
let ivan = document.getElementsByClassName('navigation_link')[2];
let olga = document.getElementsByClassName('navigation_link')[3];
let img = document.getElementById("imagine");
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navigation_pages');

bogdan.addEventListener('click', function (event) {
    event.preventDefault()
    let title = 'Богдан Хмельницький';
    document.getElementById('title').innerHTML = title;
    let inform = 'Богда́н (Зино́вій-Богда́н) Хмельни́цький гербу Абданк (27 грудня 1595 (6 січня 1596) — 27 липня (6серпня) 1657) — політик, полководець і дипломат, провідник Національно - визвольних змагань 1648—1657 років, творець Української козацької держави та її перший гетьман. Перемога у Батозькій битві 1—2 червня(22—23 травня) 1652 року дала можливість вибороти Українській державі фактичну незалежність.Гетьманство Богдана Хмельницького зумовило перелом у суспільно - політичному житті Європи, на терені якої з\'явилась, хоч і ненадовго, суверенна Україна з усіма атрибутами політичної та економічної влади.Були визначені кордони Української держави у межахдавніх українських земель.'
    document.getElementById('description').innerHTML = inform;
    img.src = './img/Bogdan.jpg';
    menuBtn.classList.remove('active');
    menu.classList.remove('active');

});

petro.addEventListener('click', function (event) {
    event.preventDefault()
    let title = 'Петро Дорошенко';
    document.getElementById('title').innerHTML = title;
    let inform = 'Петро́ Дороше́нко (1627, Чигирин — 19 листопада 1698, с. Ярополче, Московія) — визначний український військовий, політичний і державний діяч. Гетьман Війська Запорозького Правобережної України (1665—1676), очільник Гетьманщини (1668—1670). Козацький полковник, учасник Хмельниччини та московсько-української війни. Гетьманування, котре припало на добу Руїни, провів у постійних війнах, як із зовнішніми, так і з внутрішніми супротивниками.'
    document.getElementById('description').innerHTML = inform;
    img.src = './img/Petro.jpg';
    menuBtn.classList.remove('active');
    menu.classList.remove('active');

});

ivan.addEventListener('click', function (event) {
    event.preventDefault()
    let title = 'Іван Мазепа';
    document.getElementById('title').innerHTML = title;
    let inform = 'Іван Степа́нович Мазе́па (Коледи́нський) (20 березня [30 березня] 1639, Мазепинці або ж, за іншими даними, 29 серпня [8 вересня] 1639, Біла Церква — 21 вересня [2 жовтня] 1709 за іншими джерелами, у ніч з 21 на 22 вересня, Варниця) — український військовий, політичний і державний діяч. Гетьман Війська Запорозького, голова козацької держави на Лівобережній (1687–1704) і всій Наддніпрянській Україні (1704–1709). Князь Священної Римської імперії (1707—1709). Представник шляхетського роду Мазеп-Колединських герба Курч із Київщини.'
    document.getElementById('description').innerHTML = inform;
    img.src = './img/Ivan.jpg';
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
});

olga.addEventListener('click', function (event) {
    event.preventDefault()
    let title = 'Княгиня Ольга';
    document.getElementById('title').innerHTML = title;
    let inform = 'О́льга (давньоскан. Helga., хрещене ім\'я — Олена; нар. близько 910 — 11 липня 969) — княгиня київська, дружина київського князя Ігоря Рюриковича. Після смерті чоловіка (осінь 944) стала регентом при малолітньому сину Святославу, і фактичною правителькою Русі у 944—964 роках. Ліквідувала древлянське племінне княжіння, упорядкувала збирання данини, організувавши по всій країні князівські погости і осередки судочинства. У зовнішній політиці підтримувала дружні стосунки із Візантією, 946 або 957 року відвідала Константинополь, де уклала угоду з імператором Костянтином VII Багрянородним і прийняла християнство. У 964 році передала владу синові. Похована за християнським звичаєм. Канонізована Католицькою і Православною церквами як свята Ольга.'
    document.getElementById('description').innerHTML = inform;
    img.src = './img/Olga.jpg';
    menuBtn.classList.remove('active');
    menu.classList.remove('active');
});

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
