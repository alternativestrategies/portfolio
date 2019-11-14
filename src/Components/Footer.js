import React from 'react';

const Footer = () => {
    let lastMod = document.lastModified;
    return(
        
        <footer className="scroll-child">
            <hr/>
            <div className='text-center'>
            <a href="https://www.github.com/alternativestrategies" aria-label='Github Link' class="fa fa-github" ><span className="sr-only">Github Profile</span></a>
            <a href="https://www.linkedin.com/in/arely-guevara-672126195/" aria-label='Linkedin Link' class="fa fa-linkedin"><span className="sr-only">Linkedin Profile</span></a>
            </div>
            
            <section className="bottom-footer">
            <p>{`Last Modified: ${lastMod}`} </p>
            </section>
            
        </footer>
    );
}

export default Footer;