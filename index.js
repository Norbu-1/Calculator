let intext = '';
        document.querySelector('.box2 p').innerHTML = intext;

        function appendCharacter(char) {
            intext += char;
            updateDisplay();
        }

        function appendOperator(operator) {
            intext += ' ' + operator + ' ';
            updateDisplay();
        }
  function clearDisplay1(){
    intext = intext.slice(0, -1);
    updateDisplay();
  }
        function clearDisplay() {
            intext = '';
            updateDisplay();
            document.querySelector('.box2 .p2').innerHTML = intext;
        }

        function updateDisplay() {
            document.querySelector('.box2 .p1').innerHTML = intext;
        }

        function calculateResult() {
            try {
                intext = eval(intext).toString();
                document.querySelector('.box2 .p2').innerHTML = intext;

            } catch (error) {
                intext = 'Error';
                updateDisplay();
            }
        }

        document.addEventListener('DOMContentLoaded', function () {
            
        
    
            let labelValue = document.querySelector('.labell');
            let box2Value = document.querySelector('.box2');
            let box3Value = document.querySelector('.box3');

            labelValue.addEventListener('click', function (event) {
                let labelRect = labelValue.getBoundingClientRect();
                let clickPosition = event.clientX - labelRect.left;
                let labelWidth = labelRect.width;

                if (clickPosition < labelWidth / 3) {
                    labelValue.classList.remove('label2', 'label3');
                    box2Value.classList.remove('box22', 'box23');
                    box3Value.classList.remove('box32', 'box33');
                } else if (clickPosition < (2 * labelWidth) / 3) {
                    labelValue.classList.remove('label3');
                    labelValue.classList.add('label2');
                    box2Value.classList.add('box22');
                    box2Value.classList.remove('box23');
                    box3Value.classList.add('box32');
                    box3Value.classList.remove('box33');
                } else {
                    labelValue.classList.remove('label2');
                    labelValue.classList.add('label3');
                    box2Value.classList.add('box23');
                    box2Value.classList.remove('box22');
                    box3Value.classList.add('box33');
                    box3Value.classList.remove('box32');
                }
            });
        });
       