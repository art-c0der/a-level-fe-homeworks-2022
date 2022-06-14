class Navigation {
	constructor({ id, name, hashName }) {
		this.id = id;
		this.name = name;
		this.hash = hashName;

		this.listItem = document.createElement("li");
		this.listLink = document.createElement("a");
		this.listItem.appendChild(this.listLink);

		this.listItem.classList = "list-item";
		this.listLink.href = ` #/${this.hash}`;
		this.listLink.innerHTML = `${this.name}`;

		this.print = document.querySelector("#nav-list");
		this.print.appendChild(this.listItem);
	}
}

export { Navigation };
