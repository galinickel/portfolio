import React from 'react'
import "wired-elements";

const Header = props => {
    return (
        <div className="header">
            <section className="introduction">
                {/* <img src="/images/brush-stroke.png" alt="paint-stroke"/> */}
                    <h1>Gali Nickel</h1>
                    <h2>Fullstack Developer</h2>
            </section>
            <section>
                <wired-card class="header-img" >
                    Image
        </wired-card>
            </section>
        </div>
    )
}
export default Header