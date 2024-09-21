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
            text-align: center;
            margin-top: 50px;
        }
        h1, h2 {
            color: #333;
        }

        /* Home and Other screens hidden/show */
        #homeScreen, #otherScreen {
            display: none;
        }

        #homeScreen.active, #otherScreen.active {
            display: block;
        }

        /* Button styling and hover animation */
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 10px;
            transition: transform 0.5s ease, background-color 0.3s ease; /* Smooth transition for scaling and rotation */
        }
        button:hover {
            background-color: #218838;
            transform: scale(1.2) rotate(15deg); /* Grow and rotate the button */
        }

        /* Other styling */
        .button-container {
            background-color: #000;
            padding: 20px;
            border-radius: 15px;
            display: inline-block;
            margin-top: 20px;
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
        #returnBtn {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            padding: 10px 20px;
            cursor: pointer;
        }
        #hiddenLinks {
            display: none; /* Hidden by default */
            margin-top: 20px;
        }
    </style>
</head>
<body onload="showToSPopup()">
    <h1>Orionsigma123.Github.io</h1>
    <h2>Welcome to Freaky Mindas Unblocked Games</h2>

    <!-- Home Screen -->
    <div id="homeScreen" class="active">
        <div class="button-container">
            <button id="retroBowlBtn">Retro Bowl</button>
            <button id="slopeBtn">Slope</button>
            <button id="flappyBirdBtn">Flappy Bird</button>
            <button id="mario64Btn">Mario 64</button>
            <button id="subwaySurfersBtn">Subway Surfers</button>
            <button id="monkeymartBtn">Monkey Mart</button>
            <button id="CookieBtn">Cookie clicker</button>
            <button id="otherBtn">Other</button> <!-- Button to go to other screen -->
        </div>
    </div>

    <!-- Other Screen -->
    <div id="otherScreen">
        <h2>Welcome to the Other Screen</h2>
        <button id="homeBtn">Go Back to Home</button>
    </div>

    <!-- Media container to hold the game -->
    <div id="media-container">
        <iframe id="gameFrame" src=""></iframe>
        <button id="exitBtn">Exit</button>
    </div>

    <!-- Hidden links for Schoology and Classlink -->
    <div id="hiddenLinks">
        <button id="schoologyBtn">Schoology</button>
        <button id="classlinkBtn">Classlink</button>
    </div>

    <script>
        // Show ToS Popup on page load
        function showToSPopup() {
            document.getElementById('tosPopup').style.display = 'block'; // Show the ToS popup
        }

        // Switching between home and other screens
        document.getElementById('otherBtn').addEventListener('click', function() {
            document.getElementById('homeScreen').classList.remove('active');
            document.getElementById('otherScreen').classList.add('active');
        });

        document.getElementById('homeBtn').addEventListener('click', function() {
            document.getElementById('otherScreen').classList.remove('active');
            document.getElementById('homeScreen').classList.add('active');
        });

        // Function to open the game in the iframe
        function openGame(url) {
            document.getElementById('gameFrame').src = url;
            document.getElementById('media-container').style.display = 'block';
            document.getElementById('returnBtn').style.display = 'none'; // Hide return button
        }

        // Game button event listeners
        document.getElementById('retroBowlBtn').addEventListener('click', function() {
            const retroBowlUrl = 'https://loserboysonyt.github.io/';
            openGame(retroBowlUrl);
        });

        document.getElementById('slopeBtn').addEventListener('click', function() {
            const slopeUrl = 'https://firespread01.github.io/slope/';
            openGame(slopeUrl);
        });

        document.getElementById('flappyBirdBtn').addEventListener('click', function() {
            const flappyBirdUrl = 'https://jxmked.github.io/Flappybird/';
            openGame(flappyBirdUrl);
        });

        document.getElementById('mario64Btn').addEventListener('click', function() {
            const mario64Url = 'https://sm64-embed.glitch.me/start.html';
            openGame(mario64Url);
        });

        document.getElementById('subwaySurfersBtn').addEventListener('click', function() {
            const subwaySurfersUrl = 'https://grims.pro/_games/subway-surfers-bali/';
            openGame(subwaySurfersUrl);
        });

        document.getElementById('monkeymartBtn').addEventListener('click', function() {
            const monkeymartUrl = 'https://prxyboss101.github.io/monkey-mart/';
            openGame(monkeymartUrl);
        });

        document.getElementById('CookieBtn').addEventListener('click', function() {
            const CookieUrl = 'https://trixter9994.github.io/Cookie-Clicker-Source-Code/';
            openGame(CookieUrl);
        });

        // Schoology button event listener
        document.getElementById('schoologyBtn').addEventListener('click', function() {
            window.open('https://www.schoology.com', '_blank');
        });

        // Classlink button event listener
        document.getElementById('classlinkBtn').addEventListener('click', function() {
            window.open('https://www.classlink.com', '_blank');
        });

        // Exit button to close the game iframe
        document.getElementById('exitBtn').addEventListener('click', function() {
            document.getElementById('gameFrame').src = ''; // Clear the iframe
            document.getElementById('media-container').style.display = 'none'; // Hide the media container
            document.getElementById('returnBtn').style.display = 'block'; // Show return button
        });
    </script>
</body>
</html>
