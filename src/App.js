import Header from "./Header";
import { useEffect, useReducer } from "react";
import Main from "./Main";

const initialState = {
  questions: [],
  // loading, error, ready, active, finished
  status: 'loading'
};

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
      switch(action.type) {
        case 'dataReceived':
          return {
            ...state,
            questions: action.payload,
            status: "ready",
          };
      case 'dataFailed':
        return {
        ...state,
            status: "error"
        }
      default: 
        throw new Error("Action unknown");
    }
  }
    useEffect(function () {
      fetch("http://localhost:9000/questions")
        .then((res) => res.json())
        .then(data=> dispatch({type: 'dataReceived', payload: data }))
        .catch((err) => dispatch({ type: 'dataFailed' }));
    },[]);

    return (
    <div className="app"><Header />
    <Main />
    </div>
    );
  }