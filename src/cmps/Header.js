import React from 'react'
import "wired-elements";

const Header = props => {
    return (
        <div className="header">
            <section className="introduction">
                {/* <svg src="/images/brush-stroke.svg"></svg> */}
                {/* <img src="/images/brush-stroke.png"/> */}
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