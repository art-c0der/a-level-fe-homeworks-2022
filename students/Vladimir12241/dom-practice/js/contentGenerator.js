class Content {
	constructor({ id, hashName, name, bandage, weapon, about, img }) {
		this.id = id;
		this.hash = hashName;
		this.name = name;
		this.bandage = bandage;
		this.weapon = weapon;
		this.text = about;
		this.img = img;

		this.localContentBox = document.createElement("div");
		this.picture = document.createElement("img");
		this.imageBox = document.createElement("div");
		this.textBox = document.createElement("div");
		this.picture.src = this.img;
		this.picture.alt = this.name;
		this.imageBox.appendChild(this.picture);

		this.localContentBox.className = "main-content";
		this.imageBox.className = "img-box";
		this.textBox.className = "text-box";

		this.print();
	}

	print() {
		if (this.bandage !== "" && this.weapon !== "") {
			this.picture.classList = "img-peronages";
			this.localContentBox.classList.remove("main-content-wrap");
			this.textBox.innerHTML = `<h1>${this.name}</h1>
								<p>${this.text}</p>
								<h2>Колір пов'язки:</h2>
								<p><strong>${this.bandage}</strong></p>
								<h2>Зброя:</h2>
								<p><strong>${this.weapon}</strong></p>`;
		} else {
			this.localContentBox.classList.add("main-content-wrap");
			this.picture.classList = "img-about-all";
			this.textBox.innerHTML = `<h1>${this.name}</h1>
								<p>${this.text}</p>`;
		}

		this.localContentBox.appendChild(this.imageBox);
		this.localContentBox.appendChild(this.textBox);
	}
}

export { Content };
