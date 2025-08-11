
let friends = [];
let oldWinners = [];
let validFriends = [];

const inputFriend = document.getElementById("amigo");
const addButton = document.getElementById("addBtn");
const friendList = document.getElementById("listaAmigos");
const result = document.getElementById("resultado");

function update_list(newFriend) {
    friends.push(newFriend);
}

function update_winners(winnerName) {
    oldWinners.push(winnerName);
}

function reset_field() {
    inputFriend.value = "";
}

function void_input(inputName) {
    let isVoid = false;
    if (inputName.length == 0) {
        alert("ERROR: El campo no puede estar vacio.");
        isVoid = true;
    }
    return isVoid;
}

function numeric_input(inputName) {
    let anyNumber = /\d/.test(inputName);
    if (anyNumber == true) {
        alert("El nombre no puede contener numeros.")
    }
    return anyNumber;
}

function parse_name(inputName) {
    let input = inputName;
    let parsed = input.trim();
    return parsed;
}

document.addEventListener("DOMContentLoaded", function() {
    if (friends.length >= 1) {
        for (let index = 0; index < friends.length; index++) {
            const record = document.createElement("li");
            record.textContent = friends[index];
            friendList.appendChild(record);
        }
    }
});

function agregarAmigo() {
    let friendName = inputFriend.value;
    let checked = void_input(friendName);
    let numeric = numeric_input(friendName);
    if (checked === false && numeric == false) {
        let item = document.createElement("li");
        let parsedInput = parse_name(friendName);
        item.textContent = parsedInput;
        friendList.appendChild(item);
        update_list(parsedInput);
        reset_field();
    }
}

function generate_random_index() {
    return Math.floor(Math.random() * validFriends.length);
}

function sortearAmigo() {
    validFriends = friends.filter(friend => !oldWinners.includes(friend));
    if (validFriends.length >= 1) {
        let randomIndex = generate_random_index();
        let winner = validFriends[randomIndex];
        update_winners(winner)
        result.innerText = `¡¡${winner}!!`;
    }
    
    if (validFriends.length == 0) {
        result.innerText = "Ya no hay más amigos...";
    }

    if (friends.length == 0) {
        alert("ERROR: Agrega amigos a la lista para comenzar el sorteo.");
    }
}

