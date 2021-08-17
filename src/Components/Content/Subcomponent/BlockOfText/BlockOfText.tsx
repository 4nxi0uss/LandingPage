import * as React from 'react';

import egg from '../../../../img/desktop/image-transform.jpg'
import glass from '../../../../img/desktop/image-stand-out.jpg'
import graphicDesign from '../../../../img/desktop/image-graphic-design.jpg'
import photography from '../../../../img/desktop/image-photography.jpg'

import './BlockOfText.scss'

const BlockOfText = () => {
    return (
        <section className='blockOfTextSection'>
            <div className='transform'>
                <h2 className='transformTitle'>Transform your brand</h2>
                <p className='transformParagraph'>We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <button className='transformBtn'>Learn more</button>
            </div>
            <img className="egg" src={egg} alt="egg" />
            <div className='standOut'>
                <h2 className='standOutTitle'>Stand out to the right audience</h2>
                <p className='standOutParagraph'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
                <button className='standOutBtn'>Learn more</button>
            </div>
            <img className="glass" src={glass} alt="glass" />
            <img className="graphicDesign" src={graphicDesign} alt="graphic Design" />
            <img className="photography" src={photography} alt="photography" />
        </section>
    )
}

export default BlockOfText;