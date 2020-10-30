import './App.css';
import { Header } from './Header';
import { MoviesList } from './MoviesList';
// single Page Application SPA

function App() {
  return (
    <div className='App'>
      <Header />
      <MoviesList />
    </div> // JSX
  );
}

export default App;
