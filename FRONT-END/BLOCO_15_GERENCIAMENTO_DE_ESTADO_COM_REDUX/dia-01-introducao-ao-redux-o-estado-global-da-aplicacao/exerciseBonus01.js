// 1 - Definindo um action creator
const action = {
  type: 'LOGIN'
};

const actionCreator = () => action;

// 2 - Enviando uma action para um reducer 
const store = Redux.createStore(
    (state = { login: false }) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction()); // dispara a ação

// 3 - Criando Reducer para receber e manipular um action
const defaultState = {
  login: false,
};

const reducer =  (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { login: true };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// 4 - Criando reducer que aceita actions de tipos distintos 
const defaultState = {
  authenticator: false,
};

const reducer =  (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { authenticator: true };
    case 'LOGOUT':
      return { authenticator: false };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  };
};
const logoutUser = () => {
  return {
    type: 'LOGOUT'
  };
}

// 5 - Usando const para actions types
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT'

const defaultState = {
  authenticator: false,
};

const reducer =  (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return { authenticator: true };
    case LOGOUT:
      return { authenticator: false };
    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

const loginUser = () => {
  return {
    type: LOGIN,
  };
};
const logoutUser = () => {
  return {
    type: LOGOUT,
  };
}

// 6 - Registrando um listener para o store
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

store.subscribe(() => count = count + 1);


store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

// 7 - Combinando múltiplos reducers

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({ 
  auth: authReducer, 
  count: counterReducer 
});

const store = Redux.createStore(rootReducer);

// 8 - Enviando dados através das actions
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
      return action.text ;
    default:
      return state;
  }
};

const addNoteText = (note) => {
  store.dispatch({ 
    type: ADD_NOTE,
    text: note 
  });
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

// 9 - Criando contador com Redux
const INCREMENT = 1;
const DECREMENT = -1;

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}

const incAction = store.dispatch({ type: INCREMENT });

const decAction = store.dispatch({ type: DECREMENT });

const store = Redux.createStore(counterReducer);

// 10 - Por que nunca modificar um state ?
const ADD_TO_DO = 'ADD_TO_DO';
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo); // ou [...state, action.todo]
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);

// 11 - Utilizando o spread operator como ferramenta para manter a imutabilidade do state
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [...state, action.todo];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);

// 12 - Removendo itens de um array preservando a imutabilidade
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // Don't mutate state here or the tests will fail
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1, state.length)
      ]
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);

// 13 - Trabalhando com Object.assign
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return Object.assign({}, state, { status: 'online' });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);