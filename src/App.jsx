import Events from "./compenent/1-event/Events";
import Counter from "./compenent/2-classCompenents/Counter";
import UseStateCounter from "./compenent/3-useStateHook/UseStateCounter";

function App() {
  return (
    <div>
      <Events />
      <Counter />
      <Counter count={5}/>
      <UseStateCounter/>
    </div>
  );
}
export default App;
