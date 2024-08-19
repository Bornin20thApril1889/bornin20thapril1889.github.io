# bornin20thapril1889.github.io
<!Snakne html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
        }
        canvas {
            border: 1px solid #000;
            background-color: #fff;
        }
    </style>
</head>
<body>

    <canvas id="snakeGame" width="400" height="400"></canvas>
    <script>
        const canvas = document.getElementById("snakeGame");
        const context = canvas.getContext("2d");

        const box = 20; // Size of each snake segment
        let snake = [{ x: 10 * box, y: 10 * box }];
        let direction = "RIGHT";
        let food = { 
            x: Math.floor(Math.random() * 19 + 1) * box, 
            y: Math.floor(Math.random() * 19 + 1) * box 
        };
        let score = 0;

        document.addEventListener("keydown", directionControl);

        function directionControl(event) {
            if (event.keyCode == 37 && direction != "RIGHT") {
                direction = "LEFT";
            } else if (event.keyCode == 38 && direction != "DOWN") {
                direction = "UP";
            } else if (event.keyCode == 39 && direction != "LEFT") {
                direction = "RIGHT";
            } else if (event.keyCode == 40 && direction != "UP") {
                direction = "DOWN";
            }
        }

        function collision(head, array) {
            return array.some(segment => segment.x === head.x && segment.y === head.y);
        }

        function draw() {
            context.clearRect(0, 0, canvas.width, canvas.height);

            // Draw snake
            for (let i = 0; i < snake.length; i++) {
                context.fillStyle = (i === 0) ? "green" : "lightgreen";
                context.fillRect(snake[i].x, snake[i].y, box, box);
                context.strokeStyle = "darkgreen";
                context.strokeRect(snake[i].x, snake[i].y, box, box);
            }

            // Draw food
            context.fillStyle = "red";
            context.fillRect(food.x, food.y, box, box);

            // Old head position
            const snakeX = snake[0].x;
            const snakeY = snake[0].y;

            // Direction movement
            if (direction === "LEFT") snake[0].x -= box;
            if (direction === "UP") snake[0].y -= box;
            if (direction === "RIGHT") snake[0].x += box;
            if (direction === "DOWN") snake[0].y += box;

            // Snake eats food
            if (snake[0].x === food.x && snake[0].y === food.y) {
                score++;
                food = { 
                    x: Math.floor(Math.random() * 19 + 1) * box, 
                    y: Math.floor(Math.random() * 19 + 1) * box 
                };
            } else {
                // Remove last segment
                snake.pop();
            }

            // Game over conditions
            if (snake[0].x < 0 || snake[0].x >= canvas.width || 
                snake[0].y < 0 || snake[0].y >= canvas.height || 
                collision(snake[0], snake)) {
                clearInterval(game);
                alert("Game Over! Your score: " + score);
                document.location.reload();
            }

            // Add new head
            snake.unshift({ x: snakeX, y: snakeY });
        }

        const game = setInterval(draw, 100);
    </script>
</body>
</html>
