import React from 'react';
import "../css/About.css";
import Header from "../Header";
import backgroundImage from "../css/image.jpg"

const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`
};


export default function About() {
    return (
        <div>
            <Header />
            <div>
                <h1 className='d-flex justify-content-center'>About Me</h1>
                <p className='d-flex justify-content-center'>
                    🅶🅾🅾🅳 🅴🆅🅴🅽🅸🅽🅶, 🅼🆈 🅽🅰🅼🅴 🅸🆂 🅰🅻🅸 🅱🅰🅸🅻🅾🆄🅽. 🅸 🅰🅼 🅰 🆂🆃🆄🅳🅴🅽🆃 🅵🆁🅾🅼 🅱🅴🅸🆁🆄🆃, 🅻🅴🅱🅰🅽🅾🅽.  🅸'🆅🅴 🅰🅻🆆🅰🆈🆂 🅱🅴🅴🅽 🅲🆄🆁🅸🅾🆄🆂 🅰🅱🅾🆄🆃 🅰 🅻🅾🆃 🅾🅵 🆃🅷🅸🅽🅶🆂 🅰🅽🅳 🅸 🅱🅰🆂🅸🅲🅰🅻🅻🆈 🅻🅸🆅🅴 🅱🆈 🆃🅷🅴 🆀🆄🅾🆃🅴 "🆃🅷🅴 🅼🅾🆁🅴 🆈🅾🆄 🅵🆄🅲🅺 🅰🆁🅾🆄🅽🅳, 🆃🅷🅴 🅼🅾🆁🅴 🆈🅾🆄 🅵🅸🅽🅳 🅾🆄🆃".
                    🆃🅷🅸🆂 🅷🅴🅻🅿🅴🅳 🅼🅴 🅳🅸🆂🅲🅾🆅🅴🆁 🅼🆈 🅻🅾🆅🅴 🅵🅾🆁 🆃🅴🅲🅷🅽🅾🅻🅾🅶🆈 🅰🅽🅳 🅼🆈 🅲🅾🅽🆂🆃🅰🅽🆃 🅰🆃🆃🅴🅼🅿🆃🆂 🅰🆃 🆄🅽🆅🅴🅸🅻🅸🅽🅶 🆆🅷🅰🆃 🅾🆄🆁 🅿🅷🅾🅽🅴🆂 🅰🅽🅳 🅻🅰🅿🆃🅾🅿🆂 🅲🅰🅽 🅰🅲🆃🆄🅰🅻🅻🆈 🅳🅾. 🅰🅻🅻 🆃🅷🅸🆂 🅻🅴🅳 🆃🅾 🅼🅴 🅷🅰🆅🅸🅽🅶 🆀🆄🅸🆃🅴 🅰🅽 🅰🅼🅰🆉🅸🅽🅶 🅴🆇🅿🅴🆁🅸🅴🅽🅲🅴 🅰🆃 🆃🅷🅴 🅲🅾🅻🆄🅼🅱🅸🅰 🆄🅽🅸🆅🅴🆁🆂🅸🆃🆈 🅲🅾🅳🅸🅽🅶 🅱🅾🅾🆃🅲🅰🅼🅿, 🆆🅷🅸🅲🅷 🅾🅽🅻🆈 🅼🅰🅳🅴 🅼🆈 🅲🆄🆁🅸🅾🆂🅸🆃🆈, 🅰🅽🅳 🅼🅴 "🅵🅸🅽🅳🅸🅽🅶 🅾🆄🆃", 🅶🆁🅾🆆 🅻🅰🆁🅶🅴🆁.
                </p>
                <div className='porfilePic' style={backgroundStyles}>

                </div>
            </div>
        </div>
    )
}