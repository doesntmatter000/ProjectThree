import React from 'react';
import './SectionSpecialsStyle.scss'
import imagine from "../../icons/What makes us special 🔥.png"
import {motion} from "framer-motion"

const SectionSpecials = () => {

    const animation = {
        hidden: {
            y: 100,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <section className="special">
            <div className="container">
                <div className="special__container">
                    <motion.div
                        variants={animation}
                        initial="hidden"
                        whileInView="visible"
                        transition={{duration: .3, delay: .2}}
                        viewport={{amount: 0.2}}
                        className="special__item-special">
                        <img src={imagine} alt="imagine"/>
                        <p className="item__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </motion.div>
                    <motion.div
                        variants={animation}
                        initial="hidden"
                        whileInView="visible"
                        transition={{duration: .3, delay: .4}}
                        viewport={{amount: 0.2}}
                        className="special__item">
                        <div className="item__icon">
                            <svg width="33" height="25" viewBox="0 0 33 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M23.3105 14.1479C25.3085 15.5042 26.7085 17.3417 26.7085 19.7917V24.1667H32.5418V19.7917C32.5418 16.6125 27.3355 14.7313 23.3105 14.1479Z"
                                      fill="#6E4ABC"/>
                                <path
                                    d="M12.1263 12.4999C15.348 12.4999 17.9596 9.88825 17.9596 6.66658C17.9596 3.44492 15.348 0.833252 12.1263 0.833252C8.90464 0.833252 6.29297 3.44492 6.29297 6.66658C6.29297 9.88825 8.90464 12.4999 12.1263 12.4999Z"
                                    fill="#6E4ABC"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M20.8751 12.4999C24.098 12.4999 26.7085 9.8895 26.7085 6.66658C26.7085 3.44367 24.098 0.833252 20.8751 0.833252C20.1897 0.833252 19.548 0.979085 18.9355 1.18325C20.146 2.68533 20.8751 4.59575 20.8751 6.66658C20.8751 8.73742 20.146 10.6478 18.9355 12.1499C19.548 12.3541 20.1897 12.4999 20.8751 12.4999Z"
                                      fill="#6E4ABC"/>
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.1257 13.9583C8.2319 13.9583 0.458984 15.9124 0.458984 19.7916V24.1666H23.7923V19.7916C23.7923 15.9124 16.0194 13.9583 12.1257 13.9583Z"
                                      fill="#6E4ABC"/>
                            </svg>
                        </div>
                        <h2 className="item__title">Step1</h2>
                        <p className="item__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </motion.div>
                    <motion.div
                        variants={animation}
                        initial="hidden"
                        whileInView="visible"
                        transition={{duration: .3, delay: .6}}
                        viewport={{amount: 0.2}}
                        className="special__item">
                        <div className="item__icon">
                            <svg width="35" height="35" viewBox="0 0 35 35" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.5001 0.780518C8.26648 0.780518 0.78125 8.26575 0.78125 17.4994C0.78125 26.733 8.26648 34.2183 17.5001 34.2183C26.7337 34.2183 34.219 26.733 34.219 17.4994C34.219 8.26575 26.7337 0.780518 17.5001 0.780518ZM29.7366 18.4118H21.9785C21.7476 19.5709 21.0907 20.6014 20.1374 21.3001C19.1841 21.9988 18.0036 22.3148 16.8287 22.186C15.6539 22.0572 14.5699 21.4928 13.7907 20.6042C13.0114 19.7155 12.5934 18.5671 12.6191 17.3855C12.6449 16.2039 13.1124 15.0748 13.9296 14.2209C14.7468 13.367 15.8543 12.8503 17.0337 12.7728C18.213 12.6952 19.3786 13.0624 20.3006 13.8019C21.2226 14.5414 21.834 15.5995 22.0143 16.7676H29.7366C29.8467 16.7641 29.9564 16.7829 30.0591 16.8226C30.1618 16.8624 30.2555 16.9224 30.3346 16.9991C30.4137 17.0758 30.4766 17.1676 30.5196 17.269C30.5625 17.3705 30.5847 17.4795 30.5847 17.5897C30.5847 17.6998 30.5625 17.8089 30.5196 17.9103C30.4766 18.0118 30.4137 18.1036 30.3346 18.1802C30.2555 18.2569 30.1618 18.3169 30.0591 18.3567C29.9564 18.3965 29.8467 18.4152 29.7366 18.4118Z"
                                    fill="#3D8A74"/>
                            </svg>
                        </div>
                        <h2 className="item__title">Step2</h2>
                        <p className="item__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </motion.div>
                    <motion.div
                        variants={animation}
                        initial="hidden"
                        whileInView="visible"
                        transition={{duration: .3, delay: .2}}
                        viewport={{amount: 0.2}}
                        className="special__item">
                        <div className="item__icon">
                            <svg width="31" height="27" viewBox="0 0 31 27" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M30.0833 12.0417V0.375H19.875V4.75H11.125V0.375H0.916656V12.0417H11.125V7.66667H14.0417V22.25H19.875V26.625H30.0833V14.9583H19.875V19.3333H16.9583V7.66667H19.875V12.0417H30.0833Z"
                                    fill="#EA5E5D"/>
                            </svg>
                        </div>
                        <h2 className="item__title">Step3</h2>
                        <p className="item__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </motion.div>
                    <motion.div
                        variants={animation}
                        initial="hidden"
                        whileInView="visible"
                        transition={{duration: .3, delay: .4}}
                        viewport={{amount: 0.2}}
                        className="special__item">
                        <div className="item__icon">
                            <svg width="25" height="31" viewBox="0 0 25 31" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.4173 0.916748H3.75065C2.14648 0.916748 0.848568 2.22925 0.848568 3.83342L0.833984 27.1668C0.833984 28.7709 2.1319 30.0834 3.73607 30.0834H21.2506C22.8548 30.0834 24.1673 28.7709 24.1673 27.1668V9.66675L15.4173 0.916748ZM16.8756 15.5001H11.0423V16.9584H15.4173C16.2194 16.9584 16.8756 17.6147 16.8756 18.4167V22.7917C16.8756 23.5938 16.2194 24.2501 15.4173 24.2501H13.959V25.7084H11.0423V24.2501H8.12565V21.3334H13.959V19.8751H9.58398C8.7819 19.8751 8.12565 19.2188 8.12565 18.4167V14.0417C8.12565 13.2397 8.7819 12.5834 9.58398 12.5834H11.0423V11.1251H13.959V12.5834H16.8756V15.5001ZM13.959 9.66675V3.10425L20.5215 9.66675H13.959Z"
                                    fill="#EFB657"/>
                            </svg>
                        </div>
                        <h2 className="item__title">Step4</h2>
                        <p className="item__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </motion.div>
                    <motion.div
                        variants={animation}
                        initial="hidden"
                        whileInView="visible"
                        transition={{duration: .3, delay: .4}}
                        viewport={{amount: 0.2}}
                        className="special__item">
                        <div className="item__icon">
                            <svg width="27" height="27" viewBox="0 0 27 27" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M0.375 3.29167V23.7083C0.375 25.3125 1.67292 26.625 3.29167 26.625H23.7083C25.3125 26.625 26.625 25.3125 26.625 23.7083V3.29167C26.625 1.6875 25.3125 0.375 23.7083 0.375H3.29167C1.67292 0.375 0.375 1.6875 0.375 3.29167ZM17.875 9.125C17.875 11.5458 15.9208 13.5 13.5 13.5C11.0792 13.5 9.125 11.5458 9.125 9.125C9.125 6.70417 11.0792 4.75 13.5 4.75C15.9208 4.75 17.875 6.70417 17.875 9.125ZM4.75 20.7917C4.75 17.875 10.5833 16.2708 13.5 16.2708C16.4167 16.2708 22.25 17.875 22.25 20.7917V22.25H4.75V20.7917Z"
                                    fill="#2962EF"/>
                            </svg>

                        </div>
                        <h2 className="item__title">Step5</h2>
                        <p className="item__text">Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SectionSpecials;