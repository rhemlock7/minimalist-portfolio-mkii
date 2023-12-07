import React from 'react'
import Image from "next/image";
import SunEmoji from '../../public/assets/emojis/sun-emoji.png';
import MoonEmoji from '../../public/assets/emojis/crescent-moon-emoji.png';

// Styles
import './darkMode.styles.scss';

function DarkModeToggle() {
    return (
        <div id='toggle-container'>
            <Image src={SunEmoji} alt="sun emoji" width={24} height={24}/>
            <div className='ball'></div>
            <Image src={MoonEmoji} alt="moon emoji" width={18} height={18}/>
        </div>
    )
}

export default DarkModeToggle;
