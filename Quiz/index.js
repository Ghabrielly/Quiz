
const respostasquiz = document.querySelectorAll('.respostasQuiz');
const respostasCorretas = ["abbr", "&#x emoji;", "ol", "color", "span"];
let pontos = 0;

respostasquiz.forEach((container, index) => {
    const buttons = Array.from(container.getElementsByTagName('button'));
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {

            const selecionada = this.textContent;
            if (selecionada === respostasCorretas[index]) {
                pontos++;
                document.getElementById('pontos').textContent = pontos;
                document.getElementById('messagem').textContent = 'Resposta correta! >:D';
            } else {
                document.getElementById('messagem').textContent = 'Resposta incorreta. D:<';
            }

            buttons.forEach(button => {
                button.disabled = true;
            });
        });
    });
});
