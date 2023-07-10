const LocationInfo = ({location}) => {
    return (
        <div className="article__container">
            <article className="article">
                <h2 className="article__name">{location?.name}</h2>
                <ul className="article__description">
                    <li className="article__item"><span>Type:</span>
                    <li><span className="article__item-value">{location?.type}</span></li>
                    </li>
                    <li className="article__item"><span>Dimension:</span>
                    <li><span className="article__item-value">{location?.dimension}</span></li>
                    </li>
                    <li className="article__item"><span>Population:</span>
                    <li><span className="article__item-value">{location?.residents.length}</span></li>
                    </li>
                </ul>
            </article>
        </div>
    )
}
export default LocationInfo