let hasStarted = false

const addButton = document.getElementById('addBtn')
const deleteButton = document.getElementById('deleteBtn')
const choreInput = document.getElementById('choreInput')
const choresList = document.getElementById('choresList')
const choresArray = []
const gifContainer = document.getElementById('gifContainer')
const randomGif = document.getElementById('randomGif')
const gifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzJ5M244cnd1N2w0c3dscjh0cm00bjdlODBkaWNqY3U3bDRsczVobiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/mGK1g88HZRa2FlKGbz/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzJ5M244cnd1N2w0c3dscjh0cm00bjdlODBkaWNqY3U3bDRsczVobiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7abGQa0aRJUurpII/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzJ5M244cnd1N2w0c3dscjh0cm00bjdlODBkaWNqY3U3bDRsczVobiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/ely3apij36BJhoZ234/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzJ5M244cnd1N2w0c3dscjh0cm00bjdlODBkaWNqY3U3bDRsczVobiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/5hgYDDh5oqbmE4OKJ3/giphy.gif",
]

function addChore () {
    const value = choreInput.value.trim()

    if (value === '') {
        alert('You have not written any chore!')
    } else if (choresArray.includes(choreInput.value)) {
        alert('You already have written this chore!')
    } else {
        hasStarted = true;
        gifContainer.style.display = "none";

        const li = document.createElement('li');
        li.className = 'chore'
        li.textContent = value

        li.addEventListener('click', () => {
            li.remove();
            choresArray.splice(choresArray.indexOf(value), 1);
            checkIfAllTasksCompleted();
            })

        choresList.appendChild(li)
        choresArray.push(value);
        choreInput.value = "";
}
}

function checkIfAllTasksCompleted () {
    if (hasStarted && choresArray.length === 0 && choresList.children.length === 0) {
        showRandomGif();
    }
}

function showRandomGif() {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    randomGif.src = gifs[randomIndex];

    gifContainer.style.display = "block";
    gifContainer.classList.remove("fade-in");
    void gifContainer.offsetWidth;
    gifContainer.classList.add("fade-in");

    const cheerSound = document.getElementById("cheerSound");
    cheerSound.currentTime = 0;
    cheerSound.play();
}

addButton.addEventListener('click', addChore)

deleteButton.addEventListener('click', () => {
    choresList.innerHTML = '';
    choresArray.length = 0;
    checkIfAllTasksCompleted();
})
