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
        /* Style for the suggestions section */
        #suggestionForm {
            margin-top: 20px;
        }
        #suggestionInput {
            padding: 10px;
            width: 300px;
            margin-right: 10px;
        }
        #suggestions {
            margin-top: 20px;
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 10px;
            max-width: 600px;
            margin: auto;
            text-align: left;
        }
        .suggestion-item {
            background-color: #e9e9e9;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Orionsigma123.Github.io</h1>
    <h2>Welcome to Freaky Mindas Unblocked Games</h2>

    <!-- Container for the buttons with black background and rounded corners -->
    <div class="button-container">
        <!-- Buttons to trigger the media player for different games -->
        <button id="retroBowlBtn">Retro Bowl</button>
        <button id="slopeBtn">Slope</button>
        <button id="flappyBirdBtn">Flappy Bird</button>
        <button id="suggestionBtn">Suggestions</button>
    </div>
    
    <!-- Media container to hold the game -->
    <div id="media-container">
        <iframe id="gameFrame" src=""></iframe>
        <!-- Exit button to close the iframe -->
        <button id="exitBtn">Exit</button>
    </div>

    <!-- Suggestion form -->
    <div id="suggestionForm" style="display: none;">
        <input type="text" id="suggestionInput" placeholder="Enter your suggestion" />
        <button id="submitSuggestionBtn">Submit</button>
    </div>

    <!-- Display suggestions -->
    <div id="suggestions">
        <h3>User Suggestions:</h3>
        <div id="suggestionsList"></div>
    </div>

    <script>
        // Function to open the game in the iframe
        function openGame(url) {
            document.getElementById('gameFrame').src = url;
            document.getElementById('media-container').style.display = 'block';
        }

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

        // Exit button to close the game iframe
        document.getElementById('exitBtn').addEventListener('click', function() {
            document.getElementById('gameFrame').src = ''; // Clear the iframe
            document.getElementById('media-container').style.display = 'none'; // Hide the media container
        });

        // Toggle suggestion form visibility
        document.getElementById('suggestionBtn').addEventListener('click', function() {
            const form = document.getElementById('suggestionForm');
            form.style.display = form.style.display === 'none' ? 'block' : 'none';
        });

        // Function to load suggestions from local storage
        function loadSuggestions() {
            const suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
            const suggestionsList = document.getElementById('suggestionsList');
            suggestionsList.innerHTML = '';
            suggestions.forEach(suggestion => {
                const suggestionDiv = document.createElement('div');
                suggestionDiv.classList.add('suggestion-item');
                suggestionDiv.textContent = suggestion;
                suggestionsList.appendChild(suggestionDiv);
            });
        }

        // Submit suggestion and save it to local storage
        document.getElementById('submitSuggestionBtn').addEventListener('click', function() {
            const suggestionInput = document.getElementById('suggestionInput');
            const suggestion = suggestionInput.value.trim();
            if (suggestion) {
                const suggestions = JSON.parse(localStorage.getItem('suggestions')) || [];
                suggestions.push(suggestion);
                localStorage.setItem('suggestions', JSON.stringify(suggestions));
                suggestionInput.value = '';
                loadSuggestions();
            }
        });

        // Load suggestions on page load
        loadSuggestions();
    </script>
</body>
</html>
