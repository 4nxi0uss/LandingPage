import egg from '../../../../img/desktop/image-transform.jpg'
import eggMobile from '../../../../img/mobile/image-transform.jpg'
import glass from '../../../../img/desktop/image-stand-out.jpg'
import glassMobile from '../../../../img/mobile/image-stand-out.jpg'
import graphicDesign from '../../../../img/desktop/image-graphic-design.jpg'
import graphicDesignMoblie from '../../../../img/mobile/image-graphic-design.jpg'
import photography from '../../../../img/desktop/image-photography.jpg'
import photographyMobile from '../../../../img/mobile/image-photography.jpg'

import './BlockOfText.scss'

const BlockOfText = () => {
    return (
        <section className='blockOfTextSection'>
            <div className='transform'>
                <h2 className='transformTitle'>Transform your brand</h2>
                <p className='transformParagraph'>We are a full-service creative agency specializing in helping brands grow fast.
                    Engage your clients through compelling visuals that do most of the marketing for you.</p>
                <div className='transformDivBtn'>
                    <button className='transformBtn'>Learn more</button>
                    <hr />
                </div>
            </div>

            {window.innerWidth <= 991 ? <img className="egg" src={eggMobile} alt="egg" /> : <img className="egg" src={egg} alt="egg" />}

            <div className='standOut'>
                <h2 className='standOutTitle'>Stand out to the right audience</h2>

                <p className='standOutParagraph'>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>

                <div className='standOutDivBtn'>
                    <button className='standOutBtn'>Learn more</button>
                    <hr className='standOutBar' />
                </div>

            </div>

            {window.innerWidth <= 991 ? <img className="glass" src={glassMobile} alt="glass" /> : <img className="glass" src={glass} alt="glass" />}

            <div className="graphicDesign">
                {window.innerWidth <= 991 ? <img className="graphicDesignImg" src={graphicDesignMoblie} alt="graphic Design" /> : <img className="graphicDesignImg" src={graphicDesign} alt="graphic Design" />}
                <div className="graphicDesignContent">
                    <h2 className="graphicDesignHeader">Graphic Design</h2>
                    <p className="graphicDesignText">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
                </div>
            </div>

            <div className="photography">
                {window.innerWidth <= 991 ? <img className="photographyImg" src={photographyMobile} alt="photography" /> : <img className="photographyImg" src={photography} alt="photography" />}
                <div className="photographyContent">
                    <h2 className="photographyHeader">Photography</h2>
                    <p className="photographyText">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
                </div>
            </div>
        </section>
    )
}

export default BlockOfText;