import React from 'react'
import useGifs from 'hooks/useGifs';
import ListOfGifs from 'components/ListOfGifs';
import TreandingSearches from 'components/TrendingSearches';
import SearchForm from 'components/SearchForm';
import { Helmet } from 'react-helmet';


const Home = () => {

    const { gifs } = useGifs()

    return (
        <>
            <Helmet>
                <title>Home Giffy</title>
            </Helmet>
            
            <header className="o-header">
                <SearchForm />
            </header>

            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Ultima busqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
            
                <div className="App-category">
                    <TreandingSearches />
                </div>
            </div>
        </>
    )
}

export default Home
