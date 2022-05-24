const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("logo-container");
const pigBtn = document.getElementById("pig");
const elkBtn = document.getElementById("elk");
const owlBtn = document.getElementById("owl");
const hedgehogBtn = document.getElementById("hedgehog");
const menuToggle = document.getElementById("menu__toggle");

const contentHome = "Smeshariki is a Russian animated series produced by the Petersburg computer animation studio from 2003 to 2012. It was created within the framework of the cultural and educational project 'A World Without Violence'. The animated series marked the beginning of the animated franchise of the same name, which includes several animated series and three full-length cartoons. The production of the first series - 'The Bench', ended in the fall of 2003. However, the first officially released series was Where Does the Old Year Go? In 2004, the regular broadcast of the animated series began on TV channels Russia (now Russia-1; as part of the Good Night, Kids! program) and STS. Back in 2003, the planned number of episodes was announced - 200. Subsequently, this number was expanded by 15 additional episodes filmed on special orders from the Ministry of Health of the Russian Federation, the National Children's Fund and the Radio Plant. A.S. Popov.";
const imgSrcNyusha = "img/nyusha.png";
const nameNyusha = "Nyusha";
const contentNyusha = "Nyusha is a pink pig with darker hearts on the sides. She has dark pink hooves and red eyeshadow. Every day she walks with a bright red braid, to which a chamomile bow is attached, but sometimes the piggy changes her hairstyle. Despite the fact that she very rarely changes her hairstyles, this does not prevent her from having an extensive wardrobe: various sundresses, shoes, dresses, sunglasses, hats, bows, bracelets. As soon as something becomes fashionable, she buys it.";
const imgSrcLosyash = "img/losyash.png";
const nameLosyash = "Losyash";
const contentLosyash = "Losyash is an intelligent moose-scientist, one of the main characters of the animated series Smeshariki. Interested in many sciences: chemistry, astronomy, biology, physics and others. Due to Losyash's strong enthusiasm for scientific activities, a mess reigns in his house, and his appearance is rather sloppy. In his youth, Losyash was an ill-mannered bully. Due to his personality, no one was friends with him, and he was very lonely, but he had knowledge, talent, and the key to the biology classroom.";
const imgSrcPin = "img/pin.png";
const namePin = "Pin";
const contentPin = "Pin is a self-taught inventor, the most brilliant penguin of all time. A virtuoso in his iron inventions. Pin is a foreigner, which is why he speaks with a noticeable German accent. Restrained in emotions, he is prim and scrupulous even in small things and loves to learn from mistakes[3]. He doesn’t like to talk in vain, he believes that if you say something, then it’s definitely appropriate. Pin was born on August 9th. Pin's entire childhood was spent in Antarctica, which the penguin himself calls Vaterland (German: Vaterland - fatherland).";
const imgSrcYozhik = "img/ezh.png";
const nameYozhik = "Yozhik";
const contentYozhik = "Yozhik is a shy male hedgehog living in the land of Smeshariki. He likes to collect cacti and candy wrappers. His best friend is Krosh. Hedgehog was born on February 14th. Apparently, it belongs to the species of hedgehogs listed in the Red Book. Almost nothing is known about his childhood. It is clear that the Hedgehog grew up in the Land of Smeshariki and Krosh became his best friend. Also, the Hedgehog may have a distant relative of Ezhidze. In a parallel universe, there is his female counterpart - Yozha.";

loadHomeContent(contentHome);

homeBtn.addEventListener("click", () => {
  menuToggle.click();
  loadHomeContent(contentHome);
});

pigBtn.addEventListener("click", () => {
  menuToggle.click();
  loadMainContent(imgSrcNyusha, nameNyusha, contentNyusha);
});

elkBtn.addEventListener("click", () => {
  menuToggle.click();
  loadMainContent(imgSrcLosyash, nameLosyash, contentLosyash);
});

owlBtn.addEventListener("click", () => {
  menuToggle.click();
  loadMainContent(imgSrcPin, namePin, contentPin);
});

hedgehogBtn.addEventListener("click", () => {
  menuToggle.click();
  loadMainContent(imgSrcYozhik, nameYozhik, contentYozhik);
});

function loadHomeContent(contentHome) {
  contentDiv.innerHTML = "";
  contentDiv.innerHTML = contentHome;
  contentDiv.style.backgroundImage = "img/background_home.png";
}

function loadMainContent(imgSrc, nameItem, contentItem) {
  contentDiv.innerHTML = "";
  const imageDiv = document.createElement("div");
  imageDiv.classList = "imageDiv";
  const img = document.createElement("img");
  img.src = imgSrc;
  imageDiv.append(img);
  const textDiv = document.createElement("div");
  textDiv.classList = "textDiv";
  const name = document.createElement("h3");
  name.innerHTML = nameItem;
  const content = document.createElement("p");
  content.innerHTML = contentItem;
  textDiv.append(name, content);
  contentDiv.append(imageDiv, textDiv);
}
