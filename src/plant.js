export const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

export const feed = changeState("soil");
export const hydrate = changeState("water");
export const giveLight = changeState("light");

export const blueFood = feed(5);
export const greenFood = changeState("soil")(10);
export const yuckyFood = feed(-5);

export const lotsOfWater = hydrate(10);
export const spritzOfWater = hydrate(2);

export const lowLight = giveLight(1);
export const highLight = giveLight(5);

export const storeState = () => {
  // let currentState = initialState;
  let currentState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

export const stateChanger = storeState();
export const stateChanger2 = storeState();