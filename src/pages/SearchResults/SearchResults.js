import React from "react";

import { useStateValue } from "../../context/StateProvider";
import useGoogleSearch from "../../useGoogleSearch";
// import Response from "../../response";

import Results from "../../components/Results/Results";
import ResultsHeader from "../../components/ResultsHeader/ResultsHeader";

const SearchResults = () => {
  // eslint-disable-next-line no-unused-vars
  const [{ queryString }, dispatch] = useStateValue();

  // ! LIVE DATA >> API CALL >> only use in prod
  const { data } = useGoogleSearch(queryString);

  // ! Dev Response data >> use this to preserve free search quota
  // const data = Response;

  return (
    <div className="searchPage">
      <ResultsHeader />
      {queryString && <Results data={data} queryString={queryString} />}
    </div>
  );
};

export default SearchResults;
