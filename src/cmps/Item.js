import { React, useState } from 'react'
import "wired-elements";

const Item = props => {
    const [displayModal, toggleModal] = useState(false)

    let isOpen = displayModal ? 'open' : null
    return (
        <>
            <wired-card class="item-card">
                Item
                <wired-button
                    onClick={() => toggleModal(!displayModal)}>
                    Click Me
                </wired-button>
            <wired-dialog
              {...isOpen}  
                >
                <wired-button
                    onClick={() => toggleModal(!displayModal)} 
                    id="closeDialog">Close dialog</wired-button>
            </wired-dialog>
            </wired-card>
        </>
    )
}
export default Item