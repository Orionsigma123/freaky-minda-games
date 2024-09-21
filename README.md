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
        /* Style for the button container */
        .button-container {
            background-color: #000; /* Black background */
            padding: 20px;
            border-radius: 15px; /* Smooth rounded corners */
            display: inline-block; /* Ensures the rectangle wraps tightly around buttons */
            margin-top: 20px;
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
        /* Style for the Snapchat button */
        #snapchatBtn {
            position: absolute; /* Positioning it at the top center */
            top: 10px; /* Distance from the top */
            left: 50%; /* Centering */
            transform: translateX(-50%); /* Centering correction */
            background-color: white; /* White background */
            color: black; /* Black text */
            border: none;
            border-radius: 15px; /* Smooth rounded corners */
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Slight shadow for depth */
        }
        #snapchatBtn:hover {
            background-color: #f0f0f0; /* Slightly darker on hover */
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
        /* Style for the return button and hidden links */
        #returnBtn {
            position: absolute; /* Positioning it at the bottom center */
            bottom: 20px; /* Distance from the bottom */
            left: 50%; /* Centering */
            transform: translateX(-50%); /* Centering correction */
            background-color: #007bff; /* Blue background */
            color: white; /* White text */
            border: none;
            border-radius: 5px; /* Rounded corners */
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
        #returnBtn:hover {
            background-color: #0069d9; /* Darker blue on hover */
        }
        #hiddenLinks {
            display: none; /* Hidden by default */
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <h1>Orionsigma123.Github.io</h1>
    <h2>Welcome to Freaky Mindas Unblocked Games</h2>

    <!-- Snapchat button at the top center -->
    <button id="snapchatBtn">My Snapchat</button>

    <!-- Container for the buttons with black background and rounded corners -->
    <div class="button-container">
        <!-- Buttons to trigger the media player for different games -->
        <button id="retroBowlBtn">Retro Bowl</button>
        <button id="slopeBtn">Slope</button>
        <button id="flappyBirdBtn">Flappy Bird</button>
        <button id="mario64Btn">Mario 64</button> <!-- Added Mario 64 button -->
    </div>
    
    <!-- Media container to hold the game -->
    <div id="media-container">
        <iframe id="gameFrame" src=""></iframe>
        <!-- Exit button to close the iframe -->
        <button id="exitBtn">Exit</button>
    </div>

    <!-- Return button at the bottom center -->
    <button id="returnBtn">Return back to hide</button>

    <!-- Hidden links for Schoology and Classlink -->
    <div id="hiddenLinks">
        <button id="schoologyBtn">Schoology</button>
        <button id="classlinkBtn">Classlink</button>
    </div>

    <script>
        // Function to open the game in the iframe
        function openGame(url) {
            document.getElementById('gameFrame').src = url;
            document.getElementById('media-container').style.display = 'block';
            document.getElementById('returnBtn').style.display = 'none'; // Hide return button
        }

        // Snapchat button event listener
        document.getElementById('snapchatBtn').addEventListener('click', function() {
            window.open('https://snapchat.com/add/iam2011orion', '_blank');
        });

        // Retro Bowl button event listener
        document.getElementById('retroBowlBtn').addEventListener('click', function() {
            const retroBowlUrl = 'https://loserboysonyt.github.io/';
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

        // Mario 64 button event listener
        document.getElementById('mario64Btn').addEventListener('click', function() {
            const mario64Url = 'https://sm64-embed.glitch.me/start.html';
            openGame(mario64Url);
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
