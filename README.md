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
        /* Popup styles */
        #tosPopup {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
        }
        #tosContent {
            background-color: #fff;
            margin: 15% auto; /* 15% from the top and centered */
            padding: 20px;
            border: 1px solid #888;
            width: 80%; /* Could be more or less, depending on screen size */
            border-radius: 10px; /* Rounded corners */
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            background-color: #28a745;
            color: white;
            border: none;
            cursor: pointer;
            border-radius: 5px;
            margin-top: 10px;
        }
        button:hover {
            background-color: #218838;
        }
        /* Other existing styles */
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

    <!-- Terms of Service Popup -->
    <div id="tosPopup">
        <div id="tosContent">
            <h3>Terms of Service</h3>
            <p>I am not liable if you get in trouble with this website, and it is not my fault if you get ISS, or OSS. If you are to get in trouble with this website, it will be on you, and not me. Do not harass me (Orion Minda) if you get OSS or ISS through my socials, or in real life. If you agree to these terms and conditions, you may continue on.</p>
            <button id="agreeBtn">I Agree to the Terms and Conditions</button>
        </div>
    </div>

    <!-- Container for the buttons -->
    <div class="button-container" style="display: none;"> <!-- Initially hidden -->
        <button id="retroBowlBtn">Retro Bowl</button>
        <button id="slopeBtn">Slope</button>
        <button id="flappyBirdBtn">Flappy Bird</button>
        <button id="mario64Btn">Mario 64</button>
        <button id="subwaySurfersBtn">Subway Surfers</button> <!-- New button -->
        <button id="monkeymartBtn">Monkey Mart</button>
        <button id="CookieBtn">Cookie clicker</button>
    </div>

    <!-- Media container to hold the game -->
    <div id="media-container">
        <iframe id="gameFrame" src=""></iframe>
        <button id="exitBtn">Exit</button>
    </div>

    <!-- Return button -->
    <button id="returnBtn" style="display: none;">Return back to hide</button>

    <!-- Hidden links for Schoology and Classlink -->
    <div id="hiddenLinks">
        <button id="schoologyBtn">Schoology</button>
        <button id="classlinkBtn">Classlink</button>
    </div>

    <script>
        function showToSPopup() {
            document.getElementById('tosPopup').style.display = 'block'; // Show the ToS popup
        }

        document.getElementById('agreeBtn').addEventListener('click', function() {
            document.getElementById('tosPopup').style.display = 'none'; // Hide the ToS popup
            document.querySelector('.button-container').style.display = 'block'; // Show the button container
            
            // Request fullscreen after agreeing
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
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

        // Subway Surfers button event listener
        document.getElementById('subwaySurfersBtn').addEventListener('click', function() {
            const subwaySurfersUrl = 'https://grims.pro/_games/subway-surfers-bali/';
            openGame(subwaySurfersUrl);
        });

                document.getElementById('monkeymartBtn').addEventListener('click', function() {
            const monkeymartUrl = 'https://prxyboss101.github.io/monkey-mart/';
            openGame(monkeymartUrl);
        });
                // Subway Surfers button event listener
        document.getElementById('CookieBtn').addEventListener('click', function() {
            const CookieUrl = 'https://trixter9994.github.io/Cookie-Clicker-Source-Code/';
            openGame(CookieUrl);
        });

        // Return button event listener
        document.getElementById('returnBtn').addEventListener('click', function() {
            const hiddenLinks = document.getElementById('hiddenLinks');
            hiddenLinks.style.display = hiddenLinks.style.display === 'none' ? 'block' : 'none';
            document.getElementById('media-container').style.display = 'none'; // Hide media when showing hidden links
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

