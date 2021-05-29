import { React, useState } from 'react'
import "wired-elements";

const Item = props => {
    const [displayModal, toggleModal] = useState(false)

    let isOpen = displayModal ? {'open':''} : {}
    return (
        <>
            <wired-card class="item-card">
                <div>
                    Item Header
                </div>
                <wired-button
                    onClick={() => toggleModal(!displayModal)}>
                    See More
                </wired-button>
            <wired-dialog {...isOpen}
                class="modal">
                <wired-button
                    onClick={() => toggleModal(!displayModal)} 
                    id="closeDialog">X</wired-button>
            </wired-dialog>
            </wired-card>
        </>
    )
}
export default Item