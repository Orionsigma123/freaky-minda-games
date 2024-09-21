<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orionsigma123.Github.io</title>
    <style>
        /* Optional: Style the heading, button, and media container */
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        h1, h2 {
            color: #333;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            margin: 10px;
        }
        button:hover {
            background-color: #218838;
        }
        #media-container {
            display: none; /* Hidden by default */
            margin-top: 20px;
        }
        iframe {
            width: 100%;
            height: 500px;
            border: none;
        }
        #exitBtn {
            margin-top: 10px;
            background-color: #dc3545;
            color: white;
        }
        #exitBtn:hover {
            background-color: #c82333;
        }
    </style>
</head>
<body>
    <h1>Orionsigma123.Github.io</h1>
    <h2>Welcome to Freaky Mindas Games</h2>
    <h3>FREAKY MINDA FOREVER</h3>
    
    <!-- Buttons to trigger the media player for different games -->
    <button id="retroBowlBtn">Retro Bowl</button>
    <button id="slopeBtn">Slope</button>
    <button id="flappyBirdBtn">Flappy Bird</button>
    
    <!-- Media container to hold the game -->
    <div id="media-container">
        <iframe id="gameFrame" src=""></iframe>
        <!-- Exit button to close the iframe -->
        <button id="exitBtn">Exit</button>
    </div>

    <script>
        // Function to open the game in the iframe
        function openGame(url) {
            document.getElementById('gameFrame').src = url;
            document.getElementById('media-container').style.display = 'block';
        }

        // Retro Bowl button event listener
        document.getElementById('retroBowlBtn').addEventListener('click', function() {
            const retroBowlUrl = 'https://ubg98.github.io/RetroBowl/';
            openGame(retroBowlUrl);
        });

        // Slope button event listener
        document.getElementById('slopeBtn').addEventListener('click', function() {
            const slopeUrl = 'https://firespread01.github.io/slope/';
            openGame(slopeUrl);
        });

        // Flappy Bird button event listener
        document.getElementById('flappyBirdBtn').addEventListener('click', function() {
            const flappyBirdUrl = 'https://jxmked.github.io/Flappybird/';
            openGame(flappyBirdUrl);
        });

        // Exit button to close the game iframe
        document.getElementById('exitBtn').addEventListener('click', function() {
            document.getElementById('gameFrame').src = ''; // Clear the iframe
            document.getElementById('media-container').style.display = 'none'; // Hide the media container
        });
    </script>
</body>
</html>
