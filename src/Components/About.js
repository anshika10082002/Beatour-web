import React from "react"
import './About.css'
import image1 from '../images/img1.jpg'

function About(){
    return (
        <>
        
        <h1 className="about-heading">About Us</h1>
        <section className="about">
        
            <div className="row">
                <div className="column">
                 <div className="about-img">
                    <img src={image1} alt="img"></img>
                 </div>
                </div>
            <div className="column">
                <div className="about-content">
                    <h3>Hii</h3>
                    <p>Welcome to our website! We are a team of passionate and talented makeup artists dedicated to enhancing your natural beauty and making you feel confident and glamorous. With a wide range of beauty salon services, we strive to provide an unforgettable experience tailored to your unique needs.</p>
                </div>
            </div>
            </div>

        </section>
        </>
    )
}

export default About