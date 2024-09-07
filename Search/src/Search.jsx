import algoliasearch from "algoliasearch/lite";
import "instantsearch.css/themes/satellite.css";
import { Hits, InstantSearch, SearchBox, Configure } from "react-instantsearch";
import './Search.css'
import { Hit } from "./Hit";

const searchClient = algoliasearch("IR1IZE3PC7", "bb349f0c5e5d65d31fa95114d58b9466");

export const Search = () => {
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="your_index_name"
    >
      <Configure hitsPerPage={5} />
      <div className="ais-InstantSearch">
        <SearchBox />
        <Hits hitComponent={Hit} />
      </div>
    </InstantSearch>
  );
};