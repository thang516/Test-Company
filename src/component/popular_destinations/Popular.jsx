import './style.scss';

export function CardContent(props) {
    return (

            <div className="contents">
                <div className="format">
                    <h2>{props.heading}</h2>
                    <div className="content-tagline">{props.title}</div>
                </div>
                <div className="card-ft" >
                        {props.content.map(ct => {
                            return <div className="popular-destinations">
                                <a href={ct.href}>
                                    <img src={ct.src} alt=""/> </a>
                                <span className="description">{ct.country}</span>
                            </div>
                        })}

                </div>
            </div>

    )
}