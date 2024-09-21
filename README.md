<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orionsigma123.Github.io</title>
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

        /* Hidden content styles */
        #gameFrame {
            display: none;
        }
    </style>
</head>
<body>
    <div id="mainContent">
        <h1>Orionsigma123.Github.io</h1>
        <h2>Welcome to Freaky Mindas Unblocked Games</h2>

        <button id="otherBtn">Other</button>

        <!-- Content for games -->
        <div class="button-container">
            <button id="retroBowlBtn">Retro Bowl</button>
            <button id="slopeBtn">Slope</button>
            <button id="flappyBirdBtn">Flappy Bird</button>
            <button id="mario64Btn">Mario 64</button>
        </div>
    </div>

    <div id="otherContent">
        <button id="homeBtn">Home</button>
        <h1>Other Games Section</h1>

        <div id="gameContainer">
            <div class="game-card">
                <h3>2048 Game</h3>
                <iframe src="https://play2048.co/"></iframe>
            </div>
            <div class="game-card">
                <h3>Tetris</h3>
                <iframe src="https://tetris.com/play-tetris"></iframe>
            </div>
            <div class="game-card">
                <h3>Snake Game</h3>
                <iframe src="https://playsnake.org/"></iframe>
            </div>
        </div>
    </div>

    <script>
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

        // Game button event listeners
        document.getElementById('retroBowlBtn').addEventListener('click', function() {
            window.open('https://loserboysonyt.github.io/', '_blank');
        });

        document.getElementById('slopeBtn').addEventListener('click', function() {
            window.open('https://firespread01.github.io/slope/', '_blank');
        });

        document.getElementById('flappyBirdBtn').addEventListener('click', function() {
            window.open('https://jxmked.github.io/Flappybird/', '_blank');
        });

        document.getElementById('mario64Btn').addEventListener('click', function() {
            window.open('https://sm64-embed.glitch.me/start.html', '_blank');
        });
    </script>
</body>
</html>
