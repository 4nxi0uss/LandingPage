import * as React from 'react';

import egg from '../../../../img/desktop/image-transform.jpg'
import glass from '../../../../img/desktop/image-stand-out.jpg'
import graphicDesign from '../../../../img/desktop/image-graphic-design.jpg'
import photographu from '../../../../img/desktop/image-photography.jpg'

import './BlockOfText.scss'

const BlockOfText = () => {
    return (
        <section className='blockOfTextSection'>
            <div>
                <h2>Transform your brand</h2>
                <p>We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <button>Learn more</button>
            </div>
            <img src={egg} alt="egg" />
            <div>
                <h2>Stand out to the right audience</h2>
                <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <button>Learn more</button>
            </div>
            <img src={glass} alt="glass" />
            <img src={graphicDesign} alt="graphic Design" />
            <img src={photographu} alt="photographu" />
        </section>
    )
}

export default BlockOfText;