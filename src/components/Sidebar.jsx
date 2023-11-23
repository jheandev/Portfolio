import SocialNetworks from "./SocialNetworks";
import InformationContainer from "./InformationContainer";

import Avatar from '../img/eu.jpg';


import "../styles/components/sidebar.sass";




const Sidebar = () => {
    return (
    <aside id="sidebar">
     <img src={Avatar} alt="Jhean Carllos"/>
     <p className="title">Desenvolvedor</p>
     <SocialNetworks />
     <InformationContainer />
     < a href="https://www.linkedin.com/feed/" className="btn">
        Download curriculo
     </a>
    </aside>

    );
};

export default Sidebar