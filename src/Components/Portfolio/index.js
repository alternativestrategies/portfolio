import React from 'react';
import work from './Data.json';

const Portfolio = () => {
    return(
      <section id="portfolio" className="scroll-child project-grid">
          
          <h2 className="sr-only">My Portfolio</h2>
            {work.map( p =>
            <div className="project-grid-item">
              <div className="project-grid-img" >
              
              <img src={`./img/${p.img}`} alt={p.title}/>
              
              </div>
              
              <a href={p.url}>
                <div className="overlay">
                <p className="overlay-headline">{p.title}</p>
                <p className="overlay-description">{p.description}</p>
                </div>
                </a>
              </div>
           
          )}
        </section>
    );
}

export default Portfolio;