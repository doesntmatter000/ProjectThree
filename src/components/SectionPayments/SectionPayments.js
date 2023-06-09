import React from 'react';
import "./SectionPaymentsStyle.scss"
import backImg from "../../img/paymentsImg.png"

const SectionPayments = () => {
    return (
        <section className="payments">
            <div className="container">
                <div className="payments__content">
                    <h2 className="content__title">PaymentOS for <br/>DAOs</h2>
                    <p className="content__subtitle">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Open App
                        Watch Demo
                    </p>
                    <div className="buttons">
                        <button className="buttons-left">Open App <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.74994 0.750061V2.25006H8.69244L-6.10352e-05 10.9426L1.05744 12.0001L9.74994 3.30756V8.25006H11.2499V0.750061H3.74994Z" fill="white"/>
                        </svg>
                        </button>
                        <button className="buttons-right">Watch Demo</button>
                    </div>
                    <div className="content__information">
                        <p>Lorem Ipsum is simply dummy</p>
                        <div className="information__container">
                            <div className="information__item">
                                <p>200+</p>
                                <span>DAO’S</span>
                            </div>
                            <div className="information__item">
                                <p>$35M+</p>
                                <span>DISBURSED</span>
                            </div>
                            <div className="information__item">
                                <p>2500+</p>
                                <span>Contributors</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={backImg} alt="imagine"/>
        </section>
    );
};

export default SectionPayments;