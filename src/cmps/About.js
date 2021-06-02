import React from 'react'
import '@material/mwc-icon';

const About = props => {
   
    return (<>
        <div className="about-container">
            <div className="about">
                <section>
                    <img src="images/gali.jpg" alt="about-me" />
                </section>
                <section>
                    <h1>
                        Hey- I'm Gali. Fancy seein' you here!
                </h1>
                    <div>
                        <section className="about-card">
                            <p>
                                Knowledgeable and experienced in composing single-page web apps, I'm creative thinker who's always after new challenges in front end or fullstack development. Passionate about working with progressive technologies and assuming a role where I can bring my creative point of view into the forefront. Strong sense of design and aesthetics as I am an artist who brings value add to every project.
                            </p>
                            <p>
                                I'm comfortable utilizing a variety of tools in my work- React, Redux, Vue-js, Node.js, MongoDB, Sass, Git and REST Apis to name just a few, although I am always excited to pick up new experties and expand my stack learning new technologies. 
                            </p>
                            <p>
                                As a kid, I always found myself magnetized to making websites - one for my 5th grade class, another one for my favorite videogame, and a handful of websites to showcase family photos.
                                Something about creating content online fascinated me.
                                Growing up, I fell in love with the art of design and illustration - a passion I hold close to this day. 
                    </p>
                        </section>
                    </div>
                </section>
            </div>


        </div>
    </>
    )
}
export default About