import axios from "axios";
import {useEffect, useState} from "react";

import Film from "./Film.jsx";
import Search from "./Search.jsx";

const GetFilms = ({search = '', url, apiKey}) => {

    search = search.length <= 0 ? 'аватар' : search

    const [films, setFilms] = useState([])



    useEffect(() => {
        const getFilms = async () => {
            let response = await axios.get(url + 'movie/search?query=' + search, {
                headers: {
                    'X-API-KEY': apiKey
                }
            })
            setFilms(response.data.docs)
        }
        // getFilms()
    }, []);

    console.log(films);

    return (
        <div className={'films'}>
            <Search />
            {/*{getFilms()}*/}
            {films.map((film) => {return <Film film={film} />})}
        </div>
    )
}

export default GetFilms