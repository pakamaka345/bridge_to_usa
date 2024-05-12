import React from 'react';

import './MainPage.css';

export default function WelcomeScreen() {
    const [scrollPosition, setScrollPosition] = React.useState(0);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const style = {
        transform: `translateY(${-scrollPosition }px)`,
        transition: 'transform 0.3s ease-out'
    };

    return (
        <div className='welcome-screen' style={style} id='start-page'>
            <img src='/images/america-statue-of-liberty.gif' alt='America' className='welcome-screen img'/>
            <div className='welcome-text'>
                <h1>UNITING FOR UKRAINE</h1>
                <p>В зв’язку з російською агресією в Україні 25 квітня 2022 року уряд США розпочав унікальну програму Uniting for Ukraine, яка дає можливість українцям приїжджати в Америку на тимчасове місце проживання з можливістю офіційно працювати.</p>
            </div>
        </div>
    );
}