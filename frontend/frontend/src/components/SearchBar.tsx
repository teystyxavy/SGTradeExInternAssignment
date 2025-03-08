import {useState} from 'react';
import './SearchBar.css'
import {FaSearch} from 'react-icons/fa'

export const SearchBar = ({ setResults } : any) => {
    const [input, setInput] = useState("")
    const [error, setError] = useState("");

    const fetchData = (value: string) => {
        if(value.trim()) {
            setError("");

            fetch("http://localhost:3000/pilotage/" + parseInt(value))
            .then((response) => {
                if(response.status === 400) {
                    throw new Error(response.statusText);
                }
                return response.json()
            }).then((json) => {
                const results = json.filter((entry : any) => {
                    return entry && entry.pilotage_imo === parseInt(value);
                });
                console.log(results);
                setResults(results);
                })
                .catch((error) => {
                    // Set the error message state
                    setError(error.message);
                    // Clear results when there's an error
                    setResults([]);
                    console.error("Error fetching data:", error);
                });
        }
    };

    const handleChange = (value: string) => {
        setInput(value)
    };
    
    const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            fetchData(input);
        }
    }

  return (
    <div>
    <div className="input-wrapper">
        <FaSearch id="search-icon"></FaSearch>
        <input 
            placeholder = "Input pilotage IMO" 
            value={input} 
            onChange={(e) => handleChange(e.target.value)}
            onKeyDown={handleEnter}></input>
    </div>
    {error && (
            <div className="error-message">
                {error}
            </div>
        )}
    </div>
  )
}
