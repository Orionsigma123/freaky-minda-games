// Sample data for games (In real case, you can fetch this from backend)
const games = [
    {
        title: "Game 1",
        imageUrl: "https://via.placeholder.com/200",
        link: "#"
    },
    {
        title: "Game 2",
        imageUrl: "https://via.placeholder.com/200",
        link: "#"
    },
    {
        title: "Game 3",
        imageUrl: "https://via.placeholder.com/200",
        link: "#"
    }
];

function displayGames() {
    const gamesContainer = document.getElementById("games");

    games.forEach(game => {
        const gameElement = document.createElement("div");
        gameElement.className = "game";
        gameElement.innerHTML = `
            <img src="${game.imageUrl}" alt="${game.title}">
            <p class="game-title">${game.title}</p>
            <a href="${game.link}" class="play-button">Play Now</a>
        `;
        gamesContainer.appendChild(gameElement);
    });
}

window.onload = displayGames;
