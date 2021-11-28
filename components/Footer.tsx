import React from 'react'
import Icons from './Icons'

const Footer = () => {
    return (
        <>
        <div className='footer' id="contact">
            <div className='footer-container container'>
                <div className="columns">
                    <div className="column is-7">
                        <p className='title is-secondary'>Rock&lsquo;n&lsquo;Roll SCHOOL</p>
                        <p className='footer-info'><span className='footer-icon'><Icons icon="location" fill="#fedc3d" /></span> St. Einstone 62234, London</p>
                        <p className='footer-info'><span className='footer-icon'><Icons icon="email" fill="#fedc3d" /></span> info@rockschool.com</p>
                        <p className='footer-info'><span className='footer-icon'><Icons icon="phone" fill="#fedc3d" /></span> +387 62 998 899</p>
                    </div>
                    <div className="column is-5">
                        <img src="/images/placeholder.png" alt="Footer logo" />
                    </div>
                </div>
            </div>
        </div>
        <p className='copyright'>&copy; Rock And Roll School 2021.</p>
        </>
    )
}

export default Footer
