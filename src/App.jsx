import Events from "./compenent/1-event/Events";
import Counter from "./compenent/2-classCompenents/Counter";

function App() {
  return (
    <div>
      <Events />
      <Counter />
      <Counter count={5}/>
    </div>
  );
}
export default App;
