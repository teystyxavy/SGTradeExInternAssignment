import { SearchResult } from "./SearchResult";
import "./SearchResultsList.css"

interface SearchResultsListProps {
    results: any[];
}

export const SearchResultsList = ({results} : SearchResultsListProps) => {
  return (
    <div className="results-list">
        {results.map((result : any, id : number) => {
          return <SearchResult result={result} key={id}/>
        })}
    </div>
  );
}
