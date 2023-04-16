//import logo from "./logo.svg";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { actions } from "./store/index";

const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment());
  };
  const decrement = () => {
    dispatch(actions.decrement());
  };
  return (
    <div>
      <h2>Counter</h2>
      <p>{counter}</p>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
};

export default App;
