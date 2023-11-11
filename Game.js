document.addEventListener("DOMContentLoaded", function () {
            const resetButton = document.getElementById("reset");
            const rock = document.getElementById("rock");
            const paper = document.getElementById("paper");
            const scissor = document.getElementById("scissor");
            const wins = document.getElementById("win_status");
            const lost = document.getElementById("lost_status");
            const tie = document.getElementById("tie_status");
            const result = document.getElementById("result");

            resetButton.addEventListener("click", function () {
                let a = prompt("Are you sure that you want to reset scores?");

                if (a && (a.toLowerCase() === "yes" || a.toLowerCase() === "y")) {
                    wins.textContent = "0";
                    lost.textContent = "0";
                    tie.textContent = "0";
                    result.textContent = "";
                } else {
                    alert("Your scores are safe.");
                }
            });

            function randomSelect() {
                const options = [rock, paper, scissor];
                const computerOption = Math.floor(Math.random() * options.length);
                const computerAnswer = options[computerOption];
                return computerAnswer;
            }

            function updateStatus(outcome) {
                if (outcome==('You win')) {
                    wins.textContent++;
                } else if (outcome==('Haha Try Again')) {
                    tie.textContent++;
                } else if (outcome==('You lose')) {
                    lost.textContent ++;
                }
            }

            function emoji() {
                if (result.textContent.includes('You win')) {
                    return '😊';
                } else if (result.textContent.includes('You lose')) {
                    return '🥲';
                } else {
                    return '😐';
                }
            }

            rock.addEventListener("click", function () {
                const computerChoice = randomSelect();
                if (computerChoice.id == "rock") {
                    result.textContent = `Haha Try Again`;
                } else if (computerChoice.id == "paper") {
                    result.textContent = `You lose`;
                } else {
                    result.textContent = `You win`;
                }
                 updateStatus(result.textContent);
                let reaction = emoji();
                result.textContent += reaction;

            });

            paper.addEventListener("click", function () {
                const computerChoice = randomSelect();
                if (computerChoice.id == "paper") {
                    result.textContent = `Haha Try Again`;
                } else if (computerChoice.id == "rock") {
                    result.textContent = `You win`;
                } else {
                    result.textContent = `You lose`;
                }
                updateStatus(result.textContent);
                let reaction = emoji();
                result.textContent += reaction;
            });

            scissor.addEventListener("click", function () {
                const computerChoice = randomSelect();
                if (computerChoice.id == "scissor") {
                    result.textContent = `Haha Try Again`;
                } else if (computerChoice.id == "paper") {
                    result.textContent = `You win`;
                } else {
                    result.textContent = `You lose`;
                }
                updateStatus(result.textContent);
                let reaction = emoji();
                result.textContent += reaction;

            });
        });
