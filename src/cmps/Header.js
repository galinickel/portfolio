import React from 'react'
import "wired-elements";

const Header = props => {
    return (
        <div className="header">
            <section>
                <wired-card  >
                    <h1>Gali Nickel</h1>
                    <h2>Fullstack Developer</h2>
        </wired-card>
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