import { React, useState } from 'react'
import "wired-elements";

const Item = props => {

    const [displayModal, toggleModal] = useState(false)
    const { img, title, secondaryTitle, description, link, github, extendedDescription, elevation } = props.project
    const style = {
        backgroundImage: `url(${img})`,
        height: '15rem',
        backgroundSize: 'cover'
    }
    let isOpen = displayModal ? { 'open': '' } : {}
    const arrow= <svg xmlns="http://www.w3.org/2000/svg"  fill=" #1b3564" width="12" height="12" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
    return (
        <div className="item-container">
            <div className="item-card">
                <section>
                    <wired-card elevation={elevation} class="img-preview">
                        <div style={style}>
                        </div>
                        <h2>
                            {title}
                        </h2>
                    </wired-card>
                </section>
                <section className="description">
                    <div>
                        <h2>
                            {secondaryTitle}
                        </h2>
                        <p className="item-description">
                            {description}
                            <wired-button class="description-btn"
                                onClick={() => toggleModal(!displayModal)}>
                                See More {arrow}
                </wired-button>
                        </p>
                    </div>
                </section>
                <wired-dialog {...isOpen}>
                    <div className="modal">
                        <img className="modal-img" src={img} alt="project-img" />
                        <section>
                        <h1>{title}</h1>
                            <section className="modal-links">
                                <a href={github}><wired-button>See on Github</wired-button></a>
                                <a href={link}><wired-button>Visit the App</wired-button></a>
                            </section>

                            <p >{description}</p>
                            <p>{extendedDescription}</p>

                        </section>
                        <section>
                            <wired-button
                                onClick={() => toggleModal(!displayModal)}
                                id="closeDialog">X</wired-button>
                        </section>
                    </div>
                </wired-dialog>
            </div>
        </div>
    )
}
export default Item