import "./Content.scss";

import BlockOfText from "./Subcomponent/BlockOfText/BlockOfText";
import ClientTestimonials from "./Subcomponent/ClientTestimonalis/ClientTestimonials";
import DownGalery from "./Subcomponent/DownGalery/DownGalery";

const Content = () => {

    return (
        <main className='mainContent'>
            <BlockOfText />
            <ClientTestimonials />
            <DownGalery />
        </main>
    );
};

export default Content;
