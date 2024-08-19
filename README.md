# bornin20thapril1889.github.io
<!DOCTYPE html>
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
            background-color: #222;
            margin: 0;
        }
        canvas {
            border: 1px solid #fff;
            background-color: #000;
        }
    </style>
</head>
<body>
    <canvas id="gameCanvas" width="400" height="400"></canvas>
    <script>
        const canvas = document.getElementById("gameCanvas");
        const ctx = canvas.getContext("2d");

        let box = 20; // Size of the snake part
        let snake = [{ x: 9 * box, y: 9 * box }]; // Initial position of the snake
        let direction = "";
        let food = {
            x: Math.floor(Math.random() * 20) * box,
            y: Math.floor(Math.random() * 20) * box,
        };

        document.addEventListener("keydown", changeDirection);

        function changeDirection(event) {
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

        function draw() {
            // Background
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Snake
            for (let i = 0; i < snake.length; i++) {
                ctx.fillStyle = i === 0 ? "green" : "white"; // Head is green
                ctx.fillRect(snake[i].x, snake[i].y, box, box);
                ctx.strokeStyle = "black";
                ctx.strokeRect(snake[i].x, snake[i].y, box, box);
            }

            // Food
            ctx.fillStyle = "red";
            ctx.fillRect(food.x, food.y, box, box);

            // Old position of the snake
            let snakeX = snake[0].x;
            let snakeY = snake[0].y;

            // Move the snake in the direction
            if (direction == "LEFT") snakeX -= box;
            if (direction == "UP") snakeY -= box;
            if (direction == "RIGHT") snakeX += box;
            if (direction == "DOWN") snakeY += box;

            // Snake eats food
            if (snakeX == food.x && snakeY == food.y) {
                food = {
                    x: Math.floor(Math.random() * 20) * box,
                    y: Math.floor(Math.random() * 20) * box,
                };
            } else {
                snake.pop(); // Remove the last part
            }

            // Add new head
            const newHead = { x: snakeX, y: snakeY };

            // Game over conditions
            if (
                snakeX < 0 || 
                snakeY < 0 || 
                snakeX >= canvas.width || 
                snakeY >= canvas.height || 
                collision(newHead, snake)
            ) {
                clearInterval(game);
                alert("Game Over!");
            }

            snake.unshift(newHead);
        }

        // Check for collision with itself
        function collision(head, array) {
            for (let i = 0; i < array.length; i++) {
                if (head.x == array[i].x && head.y == array[i].y) {
                    return true;
                }
            }
            return false;
        }

        // Call draw function every 100 ms
        let game = setInterval(draw, 100);
    </script>
</body>
</html>
