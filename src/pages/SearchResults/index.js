import React, { useRef, useEffect, useCallback } from 'react'

import ListOfGifs from 'components/ListOfGifs';
import Spinner from 'components/Spinner';
import useGifs from 'hooks/useGifs';
import useNearScreen from 'hooks/useNearScreen';
import debounce from 'just-debounce-it';
import { Helmet } from 'react-helmet';
import SearchForm from 'components/SearchForm';


const SearchResults = ( { params } ) => {

  const { keyword, rating = 'g' } = params

  const {loading, gifs, setPage } = useGifs({ keyword, rating })
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({ externalRef: loading ? null : externalRef, once: false, distance: '200px' })

  const title = gifs ? `${gifs.length} resultados de ${decodeURI(keyword)}` : ''
    
  
  const debounceHandleNextPage = useCallback(debounce( 
    () => setPage(prevPage => prevPage + 1), 200
  ), [])
  


  useEffect(function() {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])


  return ( 
    <>
      {
        loading ?
          (<Spinner />) :
          (<>
              <Helmet>
                <title>{title}</title>
                <meta name="descripcion" content={title}></meta>
                <meta name="rating" content="General"></meta>
              </Helmet>
              <header className="o-header">
                <SearchForm initialKeyword={keyword} initialRating={rating} />
              </header>
              <h3 className="App-title">
                {decodeURI(keyword)}
              </h3>
              <ListOfGifs gifs={gifs} />
              <div id="visor" ref={externalRef}></div>
          </>)
      }
      <br />
      {/* <button onClick={handleNextPage}>Get next page</button> */}
    </>)
}

export default SearchResults
