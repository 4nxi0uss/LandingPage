import emily from '../../../../img/image-emily.jpg'
import jannie from '../../../../img/image-jennie.jpg'
import thomas from '../../../../img/image-thomas.jpg'

import './ClientTestimonials.scss'

const ClientTestimonials = () => {
    return (
        <section className='clientTestimonials'>
            <h3 className='clientTestimonialsHeader'>Client Testimonials</h3>
            <div className='clientWraper'>
                <div className='client'>
                    <img className='clientImg' src={emily} alt="emily" />
                    <p className='clientText'>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                    <p className='clientName'>Emily R.</p>
                    <p className='clientPosition'>Marketing Director</p>
                </div>
                <div className='client'>
                    <img className='clientImg' src={thomas} alt="thomas" />
                    <p className='clientText'>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                    <p className='clientName'>Thomas S.</p>
                    <p className='clientPosition'>Chief Operating Officer</p>
                </div>
                <div className='client'>
                    <img className='clientImg' src={jannie} alt="jannie" />
                    <p className='clientText'>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                    <p className='clientName'>Jennie F.</p>
                    <p className='clientPosition'>Business Owner</p>
                </div>
            </div>

        </section>
    )
}

export default ClientTestimonials;