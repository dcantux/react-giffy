
import { useContext } from 'react'
import GifsContext from '../context/GifContext'

const useGlobalGifs = () => {
    //const { gifs } = useContext(GifsContext).gifs
    return useContext(GifsContext).gifs
}

export default useGlobalGifs
