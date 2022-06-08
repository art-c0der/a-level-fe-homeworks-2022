let Ghostbusters = [{
        'image': 'https://static.hdrezka.ac/i/2020/12/13/fa60d22c04b74gi17h38d.jpeg',
        'Name': 'Ghostbusters',
        'Ratings': 7.8,
        'Tagline': `Someone is fighting cockroaches and insects. They're cleaning the city of ghosts.`,
        'Release': 'June 7, 1984',
        'Side': 'USA',
        'Producer': 'Ivan Reitman',
        'Genre': 'Science Fiction , Fantasy , Action , Comedy , Foreign',
        'Age': '16+ for more mature and understanding',
        'Time': '105 min.',
        'description': `Bill, Dan, Harold and Ernie worked as "paranormal investigators" in Manhattan until the government grants allocated for the fight against evil spirits ran out. After some time, bosom friends decide to organize the Ghostbusters service, which quickly begins to be in demand, successfully ridding New Yorkers of ghouls, ghosts and ghosts. However, William Atherton, a hardened bureaucrat, believes the crew to be charlatans, but is forced to ask for the hunters' help when an army of hostile spirits attacks the city.`
    },
    {
        'image': 'https://static.hdrezka.ac/i/2020/12/14/m5f2f6371443fah16f59q.jpeg',
        'Name': 'Ghostbusters 2',
        'Ratings': 6.6,
        'Tagline': `The ghosts have returned... and in vain!`,
        'Release': 'June 15, 1989',
        'Side': 'USA',
        'Producer': 'Ivan Reitman',
        'Genre': 'Science Fiction , Action , Fantasy , Comedy , Adventure , Foreign',
        'Age': '12+ adult themes and concepts, but the topics are not covered',
        'Time': '108 min',
        'description': `The actors in this film look great, their performance captures and takes away with them. As if you are transferred to the screen and, together with the hunters, you save the world from scary and not very scary ghosts. In the first part, the magnificent four hunters famously dealt with Gozer and for five years nothing has happened. Ghosts hid, and the glory and exploits of friends were forgotten. Egon, Ray, Peter and Winston live ordinary lives, each busy with something different. But the threat loomed over the city again. In one of the museums in New York, a very suspicious picture appears in which the spirit comes to life. And in the sewers under the city, some kind of pink slime is spreading, giving rise to demons. The hunters are back in business, they have to save their hometown from raging ghosts and restore calm to the streets of New York. Ghostbusters won the love of millions of viewers. We see them in cartoons, movies, comics. They are favorite characters of the 80s and 90s. They are bold, interesting, confident, funny, just the way heroes should be.`
    },
    {
        'image': 'https://static.hdrezka.ac/i/2016/8/6/r716aabeb110fag28g89s.jpg',
        'Name': 'Ghostbusters',
        'Ratings': 6.9,
        'Tagline': `Who will you call for help?`,
        'Release': 'July 9, 2016',
        'Side': 'USA , Australia',
        'Producer': 'Paul Fig',
        'Genre': 'Science Fiction , Fantasy , Action , Comedy , Foreign',
        'Age': '16+ for more mature and understanding',
        'Time': '116 min.',
        'description': `The remake of the popular 80s blockbuster will focus on paranormal researcher Abby Yates and physicist Erin Gilbert as they try to prove that ghosts really exist. When mysterious events begin to unfold in Manhattan, Gilbert and Yates turn to nuclear engineer Gillian Holtzman for help. Also joining the team is subway worker Patty Tolan, who knows the city inside and out. Armed with proton backpacks and unwavering self-confidence, four women prepare for an epic battle against the army of the dead...`
    },
    {
        'image': 'https://static.hdrezka.ac/i/2021/11/24/de26be340fb03jk99f77i.jpg',
        'Name': 'Ghostbusters: Afterlife',
        'Ratings': 7.1,
        'Tagline': `If there's something strange in your neighborhood, Then you know who to call.`,
        'Release': 'October 8, 2021',
        'Side': 'USA , Canada',
        'Producer': 'Jason Reitman',
        'Genre': 'Sci -Fi , Fantasy , Comedy , Adventure , Action , Foreign',
        'Age': '12+ adult themes and concepts, but the topics are not covered',
        'Time': '124 min.',
        'description': `Single mother Kelly, burdened with financial troubles, along with teenage children Phoebe and Trevor, moves to a provincial town in Oklahoma, where her late father's dilapidated farm is located. Soon an inquisitive Phoebe, exploring the nooks and crannies of their new home, unexpectedly finds old equipment to destroy ghosts. With the help of Mr. Groberson, a science teacher at a local school, Phoebe and Trevor discover the truth about the exploits of ghost hunters in the 1980s, in which their grandfather was actively involved. When paranormal events begin to occur in a provincial town, the main characters reveal grim details about their family's past.`
    },
]

let toggleMenu = document.getElementById('toggleMenu');

function toggleMenuClick() {
    let mask = document.getElementById('desc');
    mask.style.display = 'flex'
    if (toggleMenu.className.includes('is-active')) {
        toggleMenu.classList.remove('is-active');
        mask.style.display = 'none'
    } else {
        toggleMenu.classList.add('is-active');
        mask.style.display = 'flex';
    }
}
toggleMenu.addEventListener('click', () => toggleMenuClick())

for (let i = 0; i <= 3; i++) {
    document.getElementById(`${i}`).addEventListener('click', () => render(i))
}

function render(id = 0) {
    const elem = document.getElementById('main');
    const info = Ghostbusters[id];

    elem.innerHTML = `<article class="film">
    <img class="filmLogo" src="${info.image}">
    <section class="description">
        <h1>${info.Name}</h1>
        <ul>
            <li class="filmsinfo">Imdb: ${info.Ratings}</li>
            <li class="filmsinfo">Tagline: ${info.Tagline}</li>
            <li class="filmsinfo">Release: ${info.Release}</li>
            <li class="filmsinfo">Side: ${info.Side}</li>
            <li class="filmsinfo">Producer: ${info.Producer}</li>
            <li class="filmsinfo">Genre: ${info.Genre}</li>
            <li class="filmsinfo">Age: ${info.Age}</li>
            <li class="filmsinfo">Time: ${info.Time}</li>
            <li class="filmsinfo"><h1>Description:</h1>${info.description}</li>
        </ul>
    </section>
</article>`
}
render()