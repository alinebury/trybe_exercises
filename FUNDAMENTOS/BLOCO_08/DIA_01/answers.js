const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (rightAnswers, studentAnswers) => {
  let cont = 0;

  for(let i = 0; i < studentAnswers.length; i += 1){
    if(studentAnswers[i] === rightAnswers[i]){
      cont += 1;
    } else if (studentAnswers[i] === 'N.A'){
      cont += 0;
    } else {
      cont -= 0.5;
    }
  }

  return cont;
};

const answers = (rightAnswers, studentAnswers, checkAnswers) => `Resultado final: ${checkAnswers(rightAnswers, studentAnswers)} pontos`;

console.log(answers(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));