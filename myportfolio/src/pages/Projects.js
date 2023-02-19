import React from 'react';
import Project from '../components/Project';
import rockon from '../assets/images/Rock On.png';
const projects = [
    {
        name: 'Rock On concert application',
        image: rockon,
        alt: 'Concert application',
        link: 'https://danielmartin971.github.io/Empty-Orchestra/',
        GitHub: 'https://github.com/DanielMartin971/Empty-Orchestra',
    },
    {
        name: 'Rate Your Roommate application',
        alt: 'Rate Your Roommmate application',
        image: './assets/images/Rate Your Roommate.png',
        link: 'https://rate-my-roomie.herokuapp.com/',
        GitHub: 'https://github.com/leann-labra/Rate-My-Roomie',
    },
]

function Projects () {
    return (
    <div>
        {projects.map(project => <Project name={project.name} image={project.image} alt={project.alt} link={project.link} GitHub={project.GitHub} />)}
    </div>
    )
} 


export default Projects;