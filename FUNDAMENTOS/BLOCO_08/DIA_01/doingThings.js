const wakeUp = () => 'Acordando!!';

const breakfast = () => 'Bora tomar café!!';

const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  const result = callback();
  console.log(result);
}

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);