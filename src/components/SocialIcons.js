import React from 'react';
import { ImLinkedin2 } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
function SocialIcons() {
    return (
        <div className="socialIcons__wrappers">
            <div>
                <a href="https://www.instagram.com/miin_tata_/?hl=en" target="_blank" rel="noreferrer"><SiInstagram className="socialIcons--icon" /></a>
            </div>
            <div>
                <a href="https://github.com/DjordjevicN" target="_blank" rel="noreferrer"><FaGithub className="socialIcons--icon" /></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/nikola-djordjevic-503066193/" target="_blank" rel="noreferrer"><ImLinkedin2 className="socialIcons--icon" /></a>
            </div>
        </div>
    );
}

export default SocialIcons;
