import * as React from "react";

import "./Content.scss";
import BlockOfText from "./Subcomponent/BlockOfText/BlockOfText";

const Content = () => {
    return (
        <main className='mainContent'>
            <BlockOfText />
        </main>
    );
};

export default Content;
