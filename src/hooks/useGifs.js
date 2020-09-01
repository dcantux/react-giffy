import { useState, useEffect, useContext } from "react";
import getGifs from "services/getGifs";
import GifContext from 'context/GifContext';

const INITIAL_PAGE = 0

const useGifs = ({ keyword, rating } = {keyword: null} ) => {

    const [loading, setLoading ] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const {gifs, setGifs} = useContext(GifContext)

    const keyWordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    useEffect( () => {
        setLoading(true)
        getGifs({ keyword: keyWordToUse, rating }).then(gifs => { 
          setGifs(gifs) 
          setLoading(false)
          localStorage.setItem('lastKeyword', keyWordToUse)
        })
    }, [keyword, keyWordToUse, setGifs, rating])

    useEffect( function() {
      if (page === INITIAL_PAGE ) return

      setLoadingNextPage(true)
      getGifs( { keyword: keyWordToUse, page, rating } )
        .then(nextGifs =>  {
          setGifs(prevGifs => prevGifs.concat(nextGifs))
          setLoadingNextPage(false)
        })

    }, [page, keyWordToUse, setGifs, rating])

    return { loading, loadingNextPage, gifs, setPage }
}

export default useGifs