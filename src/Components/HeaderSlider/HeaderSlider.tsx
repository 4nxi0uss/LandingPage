import * as React from 'react';

import arrowDown from '../../img/icon-arrow-down.svg'

import './HeaderSlider.scss'

const HeaderSlider = () => {
    return (
        <section className='HeaderSLiderSection'>
            <h1 className='headerText'> We are creatives</h1>
            <img src={arrowDown} alt="arow Down" className='arrowDown' />
        </section>
    )
}

export default HeaderSlider