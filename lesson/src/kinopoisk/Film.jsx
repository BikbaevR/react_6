
const Film = ({film}) => {
    return (
        <div className={'film'}>
            {film.id}
            <p>{film.name}</p>

            <img className={'img'} src={film.backdrop.url} alt={film.name} />
        </div>
    )
}

export default Film