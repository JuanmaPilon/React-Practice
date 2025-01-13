import "./App.css";
import MovieCard from "./components/MovieCard.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <Home />
      <MovieCard movie={{title: "DBZ Super", date: "09/09/2000", }}/>
    </>
  );
}

export default App;