
export const Blog = ({ image, id, title, text }) => {
    return (
        <div className="card flex-row mb-4 mb-md-0">
            <img className="card-img-left" src={image} alt={image} />
            <div className="card-body">
                <h2>{id}</h2>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
            </div>
        </div>
    )
}

