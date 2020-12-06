import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className="container">
                    <div className="footer__wrap">
                        <p className='footer__info'>© 2019 Bookmarker, Inc. | Developed by Rotimi Best</p>
                    </div>
                </div>
            </footer>
        )
    }
}
