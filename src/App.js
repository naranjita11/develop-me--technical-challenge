import './App.css';
import Header from "../src/components/Header";
import PlayerForm from "./components/PlayerForm";
import PlayerDisplay from "./components/PlayerDisplay";
import CreateButton from "./components/CreateButton";

function App() {
  return (
    <>
      <Header />

      <div className="card-deck row mb-4">
        <PlayerForm />
        <PlayerDisplay />
      </div>

      <CreateButton />
    </>
  );
}

export default App;
