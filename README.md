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
    <h2>Welcome to Freaky Mindas Unblocked Games</h2>
    
    <!-- Button to trigger the media player -->
    <button id="retroBowlBtn">Retro Bowl</button>
    
    <!-- Media container to hold the game -->
    <div id="media-container">
        <iframe id="retroBowlFrame" src=""></iframe>
        <!-- Exit button to close the iframe -->
        <button id="exitBtn">Exit</button>
    </div>

    <script>
        // JavaScript to handle the button click for opening the media player
        document.getElementById('retroBowlBtn').addEventListener('click', function() {
            const retroBowlUrl = 'https://ubg98.github.io/RetroBowl/';
            document.getElementById('retroBowlFrame').src = retroBowlUrl;
            
            // Show the media container
            document.getElementById('media-container').style.display = 'block';
        });

        // JavaScript to handle the exit button click to close the media player
        document.getElementById('exitBtn').addEventListener('click', function() {
            // Clear the iframe source to stop the game
            document.getElementById('retroBowlFrame').src = '';
            
            // Hide the media container
            document.getElementById('media-container').style.display = 'none';
        });
    </script>
</body>
</html>
