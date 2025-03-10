import { useState } from 'react'
import './App.css'
import { SearchBar } from './components/SearchBar'
import { SearchResultsList } from './components/SearchResultsList'
import { TitleBar } from './components/TitleBar';

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className = "App">
      <div className="search-bar-container">
        <TitleBar></TitleBar>
        <SearchBar setResults={setResults}/>
        <SearchResultsList results={results}/>
      </div>
    </div>
  );
}

export default App;
