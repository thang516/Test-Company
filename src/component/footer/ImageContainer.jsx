const imgs = [
    {
        id: '28760131762',
        src: 'https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg',
        title: 'Buddha Sunrise in Borobudur, Magelang, Central Java, Indonesia'
    },
    {
        id: '27308262031',
        src: 'https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg',
        title: 'Gentoo Penguins, Falkland Islands (Islas Malvinas), British Overseas Territory'
    },
    {
        id: '27287965356',
        src: 'https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg',
        title: 'Aerial View of Singapore CBD Skyline, Marina Bay Esplanade and Raffles Place, Singapore'
    },
    {
        id: '27138570412',
        src: 'https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg',
        title: 'View Of Sugarloaf Mountain, Botafogo And The City of Rio De Janeiro, Brazil, South America',
    },
    {
        id: '26520497604',
        src: 'https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg',
        title: 'Sacre Coeur (Basilica of the Sacred Heart of Paris), Paris, France :: HDR'
    },
    {
        id: '27012097142',
        src: 'https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg',
        title: 'The Great Gate (Darwaza-i rauza) of Taj Mahal, Agra, Uttar Pradesh, India :: HDR'
    }
];

export function ImageContainer() {
    return (
        <div className="footer-content-right">
            <h2 className="widgettitle">Recent Trips</h2>
            <div className="container">
                {imgs.map(img => {
                    return <a target="_blank" href={`https://www.flickr.com/photos/artiephotography/${img.id}`}>
                        <img
                            src={img.src}
                            alt={img.title}
                            className="entered"
                        />
                    </a>
                })}
            </div>
        </div>
    )
}