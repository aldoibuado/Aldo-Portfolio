import React from 'react';
import Project from '../components/Project';
import rockon from '../assets/images/Rock On.png';
import ryrm from '../assets/images/Rate Your Roommate.png';
import notetaker from '../assets/images/Note Taker.png';
import scheduler from '../assets/images/Work Day Scheduler.png';
import password from '../assets/images/password generator.png';
import team from '../assets/images/Team Profile Generator.png';

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
        image: ryrm,
        link: 'https://rate-my-roomie.herokuapp.com/',
        GitHub: 'https://github.com/leann-labra/Rate-My-Roomie',
    },
    {
        name: 'The Note Taker',
        image: notetaker,
        alt: 'Note Taking application',
        link: 'https://rocky-castle-10172.herokuapp.com/',
        GitHub: 'https://github.com/aldoibuado/The-Note-Taker',
    },
    {
        name: 'Work Day Scheduler',
        image: scheduler,
        alt: 'work day scheduler',
        link: 'https://aldoibuado.github.io/Work-Day-Scheduler/',
        GitHub: 'https://github.com/aldoibuado/Work-Day-Scheduler',
    },
    {
        name: 'Password Generator',
        image: password,
        alt: 'password generator',
        link: 'https://aldoibuado.github.io/Password-Generator-/',
        GitHub: 'https://github.com/aldoibuado/Password-Generator-',
    },
    {
        name: 'Team Profile Generator',
        image: team,
        alt: 'team profile generator',
        link: 'https://www.youtube.com/watch?v=b58yPo8uj8U',
        GitHub: 'https://github.com/aldoibuado/Team-Profile-Gen',
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