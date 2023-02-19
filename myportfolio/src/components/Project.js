function Project ({ name, image, alt, link, Github }) {
    return (
       <div>
        <h3>{name}</h3>
        <img src={image} alt={alt} />
        <a href={link}>Webiste link</a>
        <a href={Github}>GitHub link</a>
       </div>
    )
}

export default Project;