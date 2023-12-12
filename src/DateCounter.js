import { useState, useReducer } from "react";

const initialState = { count: 0, step: 1 };

function reducer(state, action) {
  console.log(state, action);
  //return state+ action;
  //return { count: 0, step: 1 };
  switch(action.type) {
    case('dec'):
        return { ...state, count: state.count - state.step};
      case('inc'):
        return { ...state, count: state.count + state.step};
      case('setCount'):
        return { ...state, count: action.payload };
      case "setStep":
        return { ...state, step: action.payload};
      case "reset":
        return initialState;
      default:
        throw new Error("Unknown action);")
  }
}


  // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state -1;
  // if (action.type === "setCount") return action.payload;
//}
function DateCounter() {
  //const [count, setCount] = useState(0);
  const initialState = {count: 0, step: 1}
  const [state, dispatch] = useReducer(reducer, initialState);
  //const [step, setStep] = useState(1);
  const { count, step } = state;
  

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    // setCount((count) => count - 1);
    // setCount((count) => count - step);
    //dispatch(-1);
    dispatch({ type: "dec"});
  };

  const inc = function () {
    // setCount((count) => count + 1);
    //setCount((count) => count + step);
    dispatch( {type: "inc"});
  };

  const defineCount = function (e) {
    // setCount(Number(e.target.value));
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  };

  const defineStep = function (e) {
    //setStep(Number(e.target.value));});
    dispatch({type: 'setStep', payload: Number(e.target.value)});
  };

  const reset = function () {
    // setCount(0);
    //setStep(1);
    dispatch({ type: "reset"});
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
