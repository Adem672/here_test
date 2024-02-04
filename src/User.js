class User {
    #titre;
    #prenom;
    nom;
    #ville;
    #pays;
    age;
    #email;
    #photo;
    #present;
    #element;
    static compteurPresence = 0;

    constructor(titre, prenom, nom, ville, pays, age, email, photo) {
        this.#titre = titre;
        this.#prenom = prenom;
        this.nom = nom;
        this.#ville = ville;
        this.#pays = pays;
        this.age = age;
        this.#email = email;
        this.#photo = photo;
        this.#present = false;
        this.#element = this.#generateElement();
        this.#element.addEventListener("click", (event) => {
            this.#togglePresence(event.currentTarget);
        });
    }

    #generateElement() {
        // div user
        const div = document.createElement("div");
        div.classList.add("user");
        div.dataset.present = this.#present;
        // contenu du div
        const contenu = `
            <img src="${this.#photo}">
            <div class="user--info">
                    <h1>${this.#titre} ${this.#prenom} ${this.nom}</h1>
                    <p>${this.age} years old</p>
                    <p>${this.#ville}, ${this.#pays}</p>
            </div>
            <a href="mailto:${this.#email}">
                <span class="mail">✉️</span>
            </a>`;
        // insertion du contenu
        div.insertAdjacentHTML("afterbegin", contenu);

        return div;
    }

    render() {
        document.querySelector("main").appendChild(this.#element);
    }

    #togglePresence(div) {
        if (this.#present) {
            div.dataset.present = false;
            this.#present = false;
            User.compteurPresence--;
        } else {
            div.dataset.present = true;
            this.#present = true;
            User.compteurPresence++;
        }
        document.querySelector(
            ".counter"
        ).textContent = `${User.compteurPresence}/20 people are here`;
    }
}

export default User;