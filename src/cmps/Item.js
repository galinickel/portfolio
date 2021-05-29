import { React, useState } from 'react'
import "wired-elements";

const Item = props => {
    const [displayModal, toggleModal] = useState(false)

    let isOpen = displayModal ? { 'open': '' } : {}
    return (
        <div className="item-container">
            <div className="item-card">
                <section>
                    <wired-card class="img-preview">
                        <h2>
                            Image Placeholder
                        </h2>
                    </wired-card>
                </section>
                <section className="description">
                    <div>
                        <h2>
                            Title
                    </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nibh mauris, efficitur ac finibus in, vulputate vitae lectus. Mauris lobortis lacus dui, eget fringilla dui.
                    </p>
                        <wired-button
                            onClick={() => toggleModal(!displayModal)}>
                            See More
                </wired-button>
                    </div>
                </section>
                <wired-dialog {...isOpen}>
                    <div className="modal">
                        <section>
                            <h1>AAA</h1>

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