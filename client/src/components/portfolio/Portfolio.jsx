import React from 'react';
import img from '../../assets/Alita.jpeg';
import scheduler from '../../assets/images/Work Day Scheduler.png';
import note from '../../assets/images/The Note Taker.png';
import rock from '../../assets/images/Rock On.png';
import generator from '../../assets/images/Password Generator.png';
import rym from '../../assets/images/Rate Your Roommate.png';
import place from '../../assets/images/The Red Place.png';
import '../../components/portfolio/portfolio.css';

// array for projects section

const projects = [
  {
    id: 1,
    img: scheduler,
    title: 'Work Day Scheduler',
    github: 'https://github.com/aldoibuado/Work-Day-Scheduler',
    demo: 'https://aldoibuado.github.io/Work-Day-Scheduler/'
  },
  {
    id: 2,
    img: note,
    title: 'The Note Taker',
    github: 'https://github.com/aldoibuado/The-Note-Taker',
    demo: 'https://rocky-castle-10172.herokuapp.com/notes',
  },
  {
    id: 3,
    img: rock,
    title: 'Rock On',
    github: 'https://github.com/DanielMartin971/Empty-Orchestra',
    demo: 'https://danielmartin971.github.io/Empty-Orchestra/',
  },
  {
    id: 4,
    img: generator,
    title: 'Password Generator',
    github: 'https://github.com/aldoibuado/Password-Generator-',
    demo: 'https://aldoibuado.github.io/Password-Generator-/',
  },
  {
    id: 5,
    img: rym,
    title: 'Rate Your Roommate',
    github: 'https://github.com/leann-labra/Rate-My-Roomie',
    demo: 'https://rate-my-roomie.herokuapp.com/',
  },
  {
    id: 6,
    img: place,
    title: 'The Red Place',
    github: 'https://github.com/jhlynn95/The-Red-Place',
    demo: 'https://the-red-place.herokuapp.com/',
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          projects.map(({id, img, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={img} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className='portfolio__item-cta'>
              <a href={github} className="btn" target='_blank' rel='noreferrer'>Github</a>
              <a href={demo} className="btn btn-primary" target="_blank" rel='noreferrer'>Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio;