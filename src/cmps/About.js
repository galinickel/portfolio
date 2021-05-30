import React from 'react'
import '@material/mwc-icon';

const About = props => {
    const githubIcon = <svg xmlns="http://www.w3.org/2000/svg" fill=" #ffefd1" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
    const emailIcon = <svg xmlns="http://www.w3.org/2000/svg" fill=" #ffefd1" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z" /></svg>
    const linkedInIcon = <svg xmlns="http://www.w3.org/2000/svg" fill=" #ffefd1" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" /></svg>
    const cvIcon = <svg width="24" height="24"  fill=" #ffefd1" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"/></svg>
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
                    <wired-card elevation={3}>
                        <section className="about-card">
                            <p>
                                Knowledgeable and experienced in composing single-page web apps, I'm creative thinker who's always after new challenges in front end or fullstack development. Passionate about working with progressive technologies and assuming a role where I can bring my creative point of view into the forefront. Strong sense of design and aesthetics as I am an artist who brings value add to every project.
                            </p>
                            <p>
                                As a kid, I always found myself magnetized to making websites - one for my 5th grade class, another one for my favorite videogame, and a handful of websites to showcase family photos.
                                Something about creating content online fascinated me.
                                Growing up, I fell in love with the art of design and illustration - a passion I hold close to this day.
                    </p>
                        </section>
                    </wired-card>
                </section>
            </div>
            <section className="links-card">
                    <section className="flex">
                        <p>
                            Let's Keep in Touch!
                            </p>
                        <section>
                            <wired-icon-button onClick={()=>{window.open('mailto:'+'gali.nickel95@gmail.com','_self')}}>{emailIcon} </wired-icon-button>
                            <wired-icon-button onClick={()=>{window.open("https://github.com/galinickel")}}>{githubIcon}</wired-icon-button>
                            <wired-icon-button onClick={()=>{window.open("https://www.linkedin.com/in/gali-nickel-b37b0020a/")}}>{linkedInIcon}</wired-icon-button>
                            <wired-icon-button onClick={()=>{window.location.assign('https://drive.google.com/uc?export=download&id=1wSwt5R6bZRcm9CgBXvUrUCpOy-VYgJ_r')}}>{cvIcon}</wired-icon-button>

                        </section>
                        </section>
                </section>

        </div>
    </>
    )
}
export default About