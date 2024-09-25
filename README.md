<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Countdown Page</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f4f4f4;
            padding: 50px;
        }
        a {
            font-size: 18px;
            color: #333;
            text-decoration: none;
        }
        #countdown {
            font-size: 40px;
            color: red;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <a>Hey, Mr. Secrest wants me to close up shop or I'm getting ISS all this week. So, what I'm doing is moving the website. I hate to do this, but I have to, to keep me from getting out of trouble. I cannot tell you the website, and only I (Orion) will know it. I do, although, have something else. Stay tuned >:3</a>
    
    <div id="countdown"></div>

    <script>
        // Set the date we're counting down to (7 days from now)
        var countDownDate = new Date();
        countDownDate.setDate(countDownDate.getDate() + 7);

        // Update the countdown every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();
            
            // Find the distance between now and the countdown date
            var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes, and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            // Display the result in the element with id="countdown"
            document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
            
            // If the countdown is finished, display some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown").innerHTML = "TIME'S UP!";
            }
        }, 1000);
    </script>
</body>
</html>
