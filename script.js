// select element

const counterEl = document.getElementById("counter");
const incrimentEl = document.getElementById("incriment");
const decrementEl = document.getElementById("decrement");

// initial state
const initialState = {
  value: 0,
};

// create redux reducer funtion
function counterReducer(state = initialState, action) {
  if (action.type === "incriment") {
    return {
      ...state,
      value: state.value + 1,
    };
  } else if (action.type === "decrement") {
    return {
      ...state,
      value: state.value - 1,
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

// create render function and show data in ui

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};
render();
//  subscribe
store.subscribe(render);

//  button listeners

incrimentEl.addEventListener("click", () => {
  store.dispatch({
    type: "incriment",
  });
});

decrementEl.addEventListener("click", () => {
  store.dispatch({
    type: "decrement",
  });
});
