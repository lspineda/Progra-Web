<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarea 8 - Luis Pineda</title>
    <link rel="stylesheet" href="styles.css">
    <script src="quiz.js"></script>
</head>

<body>
    <div class="container">
        <div class="quiz-container">
            <h1 class="quiz-title">Operaciones Básicas</h1>
            <form id="quizForm" action="#" method="post">
                <div class="question">
                    <p class="question-text">1. ¿Cuál es el resultado de la operación 2 + 2 ?</p>
                    <div class="answer">
                        <input type="radio" name="q1" value="a" id="q1a">
                        <label for="q1a"> A) 6</label>
                    </div>
                    <div class="answer">
                        <input type="radio" name="q1" value="b" id="q1b">
                        <label for="q1b"> B) 4</label>
                    </div>
                    <div class="answer">
                        <input type="radio" name="q1" value="c" id="q1c">
                        <label for="q1c"> C) 2</label>
                    </div>
                </div>

                <div class="question">
                    <p class="question-text">2. ¿Cuál es el resultado de la operación 2 - 2 ?</p>
                    <div class="answer">
                        <input type="radio" name="q2" value="a" id="q2a">
                        <label for="q2a"> A) 0</label>
                    </div>
                    <div class="answer">
                        <input type="radio" name="q2" value="b" id="q2b">
                        <label for="q2b"> B) 1</label>
                    </div>
                    <div class="answer">
                        <input type="radio" name="q2" value="c" id="q2c">
                        <label for="q2c"> C) -2</label>
                    </div>
                </div>

                <div class="question">
                    <p class="question-text">3. ¿Cuál es el resultado de la operación 2 * 2 ?</p>
                    <div class="answer">
                        <input type="radio" name="q3" value="a" id="q3a">
                        <label for="q3a"> A) 8</label>
                    </div>
                    <div class="answer">
                        <input type="radio" name="q3" value="b" id="q3b">
                        <label for="q3b"> B) 4</label>
                    </div>
                    <div class="answer">
                        <input type="radio" name="q3" value="b" id="q3b">
                        <label for="q3b"> B) 2</label>
                    </div>
                </div>

                <div class="question">
                    <p class="question-text">4. ¿Cuál es el resultado de la operación 2 / 2 ?</p>
                    <div class="answer">
                        <input type="radio" name="q4" value="a" id="q4a">
                        <label for="q4a"> A) 4</label>
                    </div>
                    <div class="answer">
                        <input type="radio" name="q4" value="b" id="q4b">
                        <label for="q4b"> B) 2</label>
                    </div>
                    <div class="answer">
                        <input type="radio" name="q4" value="c" id="q4c">
                        <label for="q4c"> C) 1</label>
                    </div>
                </div>

                <div class="button-container">
                    <button class="submit-button" onclick="calificarFormulario()">Enviar Formulario</button>

                </div>
            </form>
        </div>
    </div>
</body>

</html>