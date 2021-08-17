import milk from '../../../../img/desktop/image-gallery-milkbottles.jpg'
import orange from '../../../../img/desktop/image-gallery-orange.jpg'
import cone from '../../../../img/desktop/image-gallery-cone.jpg'
import sugar from '../../../../img/desktop/image-gallery-sugarcubes.jpg'

import './DownGalery.scss'

const DownGalery = () => {
    return (
        <section className='DownGalery'>
            <img src={milk} alt="milk" />
            <img src={orange} alt="orange" />
            <img src={cone} alt="cone" />
            <img src={sugar} alt="sugar" />
        </section>
    )
}
export default DownGalery;