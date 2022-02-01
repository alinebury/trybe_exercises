const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const userToReturn = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian"
    };
    console.log(callback(userToReturn));
  }, delay());
  // Insira o retorno da função `getUser`
};

getUser(userFullName); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
getUser(userNationality); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"