

function Photo({ producer, filename }) {
    return (
        <a href={`photos/${producer}/${filename}`} target='_blank'>
            <img src={`photos/${producer}/${filename}`}
                className="w-100 shadow-1-strong rounded mb-4"/>
        </a>
    )
}

export default Photo;