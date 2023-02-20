import "../styles/Projects.css";

function Project ({ name, image, alt, link, GitHub }) {
    return (
       <div className='projects'>
        <h3>{name}</h3>
        <img className='projectphoto' src={image} alt={alt} />
        <a className="weblink" href={link}>Website link</a>
        <a className="gitlink" href={GitHub}>GitHub link</a>
       </div>
    )
}

export default Project;