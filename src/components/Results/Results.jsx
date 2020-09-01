import React from "react";

import "./Results.scss";

const Results = ({ data, queryString }) => {
  const resultsCountString = `About ${data?.searchInformation?.formattedTotalResults} results (${data?.searchInformation?.formattedSearchTime} seconds) for ${queryString}`;

  return (
    <div className="searchPage__results">
      <p className="searchPage__resultsCount">{resultsCountString}</p>
      {data?.items?.map(({ link, displayLink, title, snippet, pagemap }) => (
        <div className="searchPage__result">
          <a href={link}>
            {pagemap?.cse_image?.length > 0 && pagemap?.cse_image[0]?.src && (
              <img
                src={pagemap?.cse_image[0]?.src}
                alt="results"
                className="searchPage__resultImage"
              />
            )}

            {displayLink}
          </a>
          <a href={link} className="searchPage__resultTitle">
            <h2>{title}</h2>
          </a>
          <p className="searchPage__resultSnippet">{snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
