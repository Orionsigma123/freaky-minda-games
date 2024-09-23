<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FREAKY MINDA FOREVER</title>
    <style>
        /* General styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #2d2d2d;
            color: white;
            text-align: center;
        }

        h1, h2 {
            color: #ffdd57;
        }

        #otherContent {
            display: none;
        }

        #mainContent {
            margin-top: 50px;
        }

        /* Button styles */
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 10px;
            transition: all 0.3s ease;
        }

        button:hover {
            background-color: #218838;
            transform: scale(1.1);
        }

        /* Other button in top right */
        #otherBtn {
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: #007bff;
        }

        #homeBtn {
            position: absolute;
            top: 20px;
            left: 20px;
            background-color: #dc3545;
            display: none;
        }

        #gameContainer {
            margin-top: 40px;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }

        .game-card {
            background-color: #333;
            border-radius: 10px;
            width: 300px;
            margin: 20px;
            padding: 20px;
            box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.7);
        }

        .game-card h3 {
            color: #ffdd57;
        }

        iframe {
            width: 100%;
            height: 400px;
            border-radius: 10px;
            border: none;
        }

        /* Version style */
        #version {
            position: fixed;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: #ffdd57;
        }

        /* Modal styles */
        #mediaPlayerModal {
            display: none;
            position: fixed;
            z-index: 1000;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            justify-content: center;
            align-items: center;
        }

        #mediaPlayer {
            width: 800px;
            height: 600px;
            border-radius: 10px;
        }

        .modal-close {
            position: absolute;
            top: 20px;
            right: 30px;
            background-color: transparent;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
        }

        /* Hidden content styles */
        #gameFrame {
            display: none;
        }

        .fullscreen-btn {
            margin-top: 10px;
            background-color: #ffc107;
        }

        .pause-btn, .unpause-btn {
            background-color: #dc3545;
            margin: 5px;
            padding: 5px 10px;
        }

        .unpause-btn {
            background-color: #28a745;
        }

        /* Audio player styles */
        #audioPlayer {
            display: none;
            margin-top: 20px;
        }

        #playSongBtn {
            background-color: #ff9800;
        }

        #playBtn {
            background-color: #28a745;
        }

        #pauseBtn {
            background-color: #f44336;
        }
    </style>
</head>
<body>
    <div id="mainContent">
        <h1>FREAKY MINDA FOREVER!</h1>
        <h2>Welcome to Freaky Mindas Unblocked Games</h2>
     

        <button id="otherBtn">Other</button>

        <!-- Content for games -->
        <div class="button-container">
            <button id="retroBowlBtn">Retro Bowl</button>
            <button id="slopeBtn">Slope</button>
            <button id="flappyBirdBtn">Flappy Bird</button>
            <button id="mario64Btn">Mario 64</button>
            <button id="subwaySurfersBtn">Subway Surfers</button>
            <button id="monkeymartBtn">Monkey Mart</button>
            <button id="DirtbikeBtn">Dirtbike game</button>
        </div>
        <p>Hey, Just wanted to come on here and say that I'm struggling with issues against korrine (Or kai.) And it might not make me do stuff on here for a while. If you need me to fix something, just ask in school though. I will add it to a list of things that need done. But genuinely, Korrine made me depressed as shit, and made me genuinely unhappy. I love all of you who care about me. You guys are part of the reason I like life. You guys who genuinely want to see me win are the best people ever. Love you guys so fucking much. Remember, Freaky Minda forever <3 </p>

        <!-- Button to play the song -->
        <button id="playSongBtn" onclick="window.location.href='https://orionsigma123.github.io/Thank-you/'">Read More</button>

        
    <div id="otherContent">
        <button id="homeBtn">Home</button>
        <h1>Other Games Section</h1>

        <div id="gameContainer">
            <div class="game-card">
                <h3>2048 Game</h3>
                <iframe src="https://play2048.co/" id="game1"></iframe>
                <button class="fullscreen-btn" onclick="toggleFullscreen('game1')">Fullscreen</button>
                <button class="pause-btn" onclick="pauseGame('game1', 'https://play2048.co/')">Pause</button>
                <button class="unpause-btn" onclick="unpauseGame('game1', 'https://play2048.co/')">Unpause</button>
            </div>
            <div class="game-card">
                <h3>Tetris</h3>
                <iframe src="https://tetris.com/play-tetris" id="game2"></iframe>
                <button class="fullscreen-btn" onclick="toggleFullscreen('game2')">Fullscreen</button>
                <button class="pause-btn" onclick="pauseGame('game2', 'https://tetris.com/play-tetris')">Pause</button>
                <button class="unpause-btn" onclick="unpauseGame('game2', 'https://tetris.com/play-tetris')">Unpause</button>
            </div>
            <div class="game-card">
                <h3>Snake Game</h3>
                <iframe src="https://playsnake.org/" id="game3"></iframe>
                <button class="fullscreen-btn" onclick="toggleFullscreen('game3')">Fullscreen</button>
                <button class="pause-btn" onclick="pauseGame('game3', 'https://playsnake.org/')">Pause</button>
                <button class="unpause-btn" onclick="unpauseGame('game3', 'https://playsnake.org/')">Unpause</button>
            </div>
        </div>
    </div>

    <!-- Modal for media player -->
    <div id="mediaPlayerModal" class="modal">
        <button class="modal-close" onclick="closeMediaPlayer()">✖</button>
        <iframe id="mediaPlayer" src=""></iframe>
    </div>

    <div id="version"></div> <!-- Version display -->

    <script>
        // Initialize version number
        let version = 1.58; // Update this number for each change
        document.getElementById('version').innerText = `Version: v${version}`;

        // Switching between main content and other section
        document.getElementById('otherBtn').addEventListener('click', function() {
            document.getElementById('mainContent').style.display = 'none';
            document.getElementById('otherContent').style.display = 'block';
            document.getElementById('homeBtn').style.display = 'block';
        });

        document.getElementById('homeBtn').addEventListener('click', function() {
            document.getElementById('otherContent').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
            document.getElementById('homeBtn').style.display = 'none';
        });

        // Game button event listeners to open in media player
        document.getElementById('retroBowlBtn').addEventListener('click', function() {
            openMediaPlayer('https://shawn43.github.io/retrobowl-unlimited/');
        });

        document.getElementById('slopeBtn').addEventListener('click', function() {
            openMediaPlayer('https://slope.faav.top/');
        });

        document.getElementById('flappyBirdBtn').addEventListener('click', function() {
            openMediaPlayer('https://jxmked.github.io/Flappybird/');
        });

        document.getElementById('mario64Btn').addEventListener('click', function() {
            openMediaPlayer('https://sm64-embed.glitch.me/start.html');
        });

        document.getElementById('subwaySurfersBtn').addEventListener('click', function() {
            const subwaySurfersUrl = 'https://godkudocs.github.io/subway-surfers/src/sub';
            openMediaPlayer(subwaySurfersUrl);
        });

        document.getElementById('monkeymartBtn').addEventListener('click', function() {
            const monkeymartUrl = 'https://orionsigma123.github.io/Freaky-minda-/';
            openMediaPlayer(monkeymartUrl);
        });

        document.getElementById('DirtbikeBtn').addEventListener('click', function() {
            openMediaPlayer('https://www.friv.com/z/games/motox3m/game.html');
        });

        // Function to open games in media player
        function openMediaPlayer(url) {
            document.getElementById('mediaPlayer').src = url;
            document.getElementById('mediaPlayerModal').style.display = 'flex';
        }

        // Function to close media player
        function closeMediaPlayer() {
            document.getElementById('mediaPlayerModal').style.display = 'none';
            document.getElementById('mediaPlayer').src = ''; // Clear src to stop the game
        }

        // Function to toggle fullscreen
        function toggleFullscreen(id) {
            const iframe = document.getElementById(id);
            if (iframe.requestFullscreen) {
                iframe.requestFullscreen();
            } else if (iframe.webkitRequestFullscreen) { // Safari
                iframe.webkitRequestFullscreen();
            } else if (iframe.msRequestFullscreen) { // IE11
                iframe.msRequestFullscreen();
            }
        }

        // Pause/Unpause functions for iframe games
        function pauseGame(iframeId, srcUrl) {
            document.getElementById(iframeId).src = ''; // Pause by clearing the iframe source
        }

        function unpauseGame(iframeId, srcUrl) {
            document.getElementById(iframeId).src = srcUrl; // Unpause by resetting the iframe source
        }

        // Audio play and pause functionality
        document.getElementById('playSongBtn').addEventListener('click', function() {
            document.getElementById('audioPlayer').style.display = 'block';
        });

        document.getElementById('playBtn').addEventListener('click', function() {
            document.getElementById('audio').play();
        });

        document.getElementById('pauseBtn').addEventListener('click', function() {
            document.getElementById('audio').pause();
        });
    </script>
</body>
</html>
