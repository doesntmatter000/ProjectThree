import React from 'react';
import img1 from "../../icons/trusted1.svg"
import img2 from "../../icons/trusted2.svg"
import img3 from "../../icons/trusted3.svg"
import img4 from "../../icons/trusted4.svg"
import img5 from "../../icons/trusted5.svg"
import img6 from "../../icons/trusted6.svg"
import img7 from "../../icons/trusted7.svg"
import img8 from "../../icons/trusted8.svg"
import img9 from "../../icons/trusted9.svg"
import img10 from "../../icons/trusted10.svg"
import "./SectionTrustedStyle.scss"


const SectionTrusted = () => {
    return (
        <section className="trusted">
            <div className="container">
                <h2 className="trusted__title">Trusted by DAOs around the world</h2>
                <div className="trusted__container">
                    <div><img src={img1} alt="imagine"/></div>
                    <div><img src={img2} alt="imagine"/></div>
                    <div><img src={img3} alt="imagine"/></div>
                    <div><img src={img4} alt="imagine"/></div>
                    <div><img src={img5} alt="imagine"/></div>
                    <div><img src={img6} alt="imagine"/></div>
                    <div><img src={img7} alt="imagine"/></div>
                    <div><img src={img8} alt="imagine"/></div>
                    <div><img src={img9} alt="imagine"/></div>
                    <div><img src={img10} alt="imagine"/></div>
                </div>
            </div>
        </section>
    );
};

export default SectionTrusted;