import React from 'react';
import './MainPage.css';

export default function AboutUs() {
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const maxScrollPosition = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollPosition / maxScrollPosition) * 3000;
        const textElement = document.querySelector('.gradient-text_about-us');
        textElement.style.backgroundPosition = scrollPercentage*0.5 + '%';
    }); // text gradient effect
    return (
        <div className="about-us" id="about-us">
            <div className="about-us-text">
                <h2 className="gradient-text_about-us">Про нас</h2>
                <p>Ми - команда, яка з рішучістю та відданістю працює над реалізацією мрій. Завдяки нашому довготривалому досвіду та експертизі, ми допомагаємо українцям переїхати в США. Недавно ми вирішили розширити свою присутність та запустили Instagram сторінку, щоб більше українців дізнались про нас та змогли здійснити свої американські мрії.</p>
                <hr />
                <p>Ми надаємо послуги за програмою U4U вже більше 2 років і завжди відповідально ставимось до своєї справи. Наша команда працює на результат та досягає його без жодної відмови. Довірте нам свої мрії про життя в Америці, і ми зробимо все можливе, щоб вони стали реальністю для вас.</p>
            </div>
            <div className="about-us-image">
                <img src="/images/avatar.jpg" alt="About us" />
            </div>
        </div>
    );
}