const players = [
  {
    name: "Ngolo Kante",
    position: "Midfielder",
    number: 7,
  },
  {
    name: "Lionel Messi",
    position: "Forward",
    number: 10,
  },
  {
    name: "Neymar Jr",
    position: "Forward",
    number: 11,
  },
  {
    name: "Sergio Ramos",
    position: "Defender",
    number: 4,
  },
  {
    name: "Kylian Mbappe",
    position: "Forward",
    number: 10,
  },
  {
    name: "Andres Iniesta",
    position: "Midfielder",
    number: 8,
  },
  {
    name: "Marco Asensio",
    position: "Midfielder",
    number: 21,
  },
  {
    name: "Paolo Maldini",
    position: "Defender",
    number: 3,
  },
  {
    name: "Milan Skriniar",
    position: "Defender",
    number: 37,
  },
  {
    name: "Ederson",
    position: "Goalkeeper",
    number: 31,
  },
  {
    name: "Manuel Neuer",
    position: "Goalkeeper",
    number: 1,
  },
  {
    name: "Alessandro Bastoni",
    position: "Defender",
    number: 95,
  },
  {
    name: "Thibaut Courtois",
    position: "Goalkeeper",
    number: 1,
  },
  {
    name: "Rayan Cherki",
    positon: "Midfielder",
    number: 10,
  },
  {
    name: "Declan Rice",
    position: "Midfielder",
    number: 41,
  },
  {
    name: "Nicolo Barella",
    positon: "Midfielder",
    number: 21,
  },
  {
    name: "David Raya",
    positon: "Goalkeeper",
    number: 1,
  },
  {
    name: "Gianluigi Donnarumma",
    position: "Goalkeeper",
    number: 25,
  },
  {
    name: "Jayden Oosterwolde",
    position: "Defender",
    number: 24,
  },
  {
    name: "Sidiki Cherif",
    position: "Forward",
    number: 26
  }
];

const collection = [];

const randomCardDiv = document.getElementById("randomCard");
const collectionDiv = document.getElementById("container");

const getRandomBtn = document.querySelector(".getRandom");
const addToCollectionBtn = document.querySelector(".addToCollection");

let selectedPlayer = null;

const showAllPlayers = () => {
  collectionDiv.innerHTML = "";

  collection.forEach((player) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${player.name}</h3>
      <p>Number: ${player.number}</p>
      <p>Position: ${player.position}</p>
    `;

    collectionDiv.appendChild(card);
  });
};

const showRandomCard = () => {
  const randomIndex = Math.floor(Math.random() * players.length);
  selectedPlayer = players[randomIndex];

  randomCardDiv.innerHTML = `
    <div class="card">
      <h3>${selectedPlayer.name}</h3>
      <p>Team: ${selectedPlayer.number}</p>
      <p>Position: ${selectedPlayer.position}</p>
      <button onclick='addToMyCollection(${randomIndex})'>
        Add to My Collection
      </button>
    </div>
  `;
};

const addToMyCollection = (index) => {
  const player = players[index];

  if (!collection.includes(player)){
    collection.push(player);
  }

  showAllPlayers();
}

getRandomBtn.addEventListener("click", () => {
  showRandomCard();
});

addToCollectionBtn.addEventListener("click", () => {
  if (selectedPlayer) {
    addToMyCollection(selectedPlayer);
  }
});

showRandomCard()