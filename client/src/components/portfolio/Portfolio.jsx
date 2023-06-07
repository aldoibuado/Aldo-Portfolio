import React from 'react';
import img from '../../assets/Alita.jpeg';

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" target="_blank">Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" target="_blank">Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" target="_blank">Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" target="_blank">Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" target="_blank">Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={img} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className="btn" target='_blank'>Github</a>
          <a href="https://github.com" className="btn btn-primary" target="_blank">Demo</a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio;