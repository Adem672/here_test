import User from "./User";

const tableauUser = [];
const getUsers = () => {
    const users = fetch("https://randomuser.me/api/?results=20").then((resutlat) => resutlat.json());
    users.then((data) => {
        const { results } = data;


        results.forEach((element) => {
            tableauUser.push(
                new User(
                    element.name.title,
                    element.name.first,
                    element.name.last,
                    element.location.city,
                    element.location.country,
                    element.dob.age,
                    element.email,
                    element.picture.large
                )
            );
        });
        // trie de A-Z
        tableauUser.sort((a, b) => {
            return a.nom.localeCompare(b.nom);
        });
        tableauUser.forEach((element) => {
            element.render();
        });
    });
};

getUsers();

document.querySelector(".filters").addEventListener("click", (event) => {
    if (!event.target.classList.contains("selected")) {
        if (event.target.id === "sort--name") {
            document.querySelector(".selected").classList.remove("selected");
            event.target.classList.add("selected");
            tableauUser.sort((a, b) => {
                return a.nom.localeCompare(b.nom);
            });
            document.querySelector("main").innerHTML = "";
            tableauUser.forEach((element) => {
                element.render();
            });
        } else if (event.target.id === "sort--age") {
            document.querySelector(".selected").classList.remove("selected");
            event.target.classList.add("selected");
            tableauUser.sort((a, b) => {
                return a.age - b.age;
            });
            document.querySelector("main").innerHTML = "";
            tableauUser.forEach((element) => {
                element.render();
            });
        }
    }
});