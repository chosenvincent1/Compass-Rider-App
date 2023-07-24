import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export const Footer = ()=> {
    return (
        <footer className='footer'>
            <div className='image__icons'>
                <img src='../images/logo-white.svg' alt='White Logo' className='' />

                <p>MyRide Inc., 2nd Floor, New York, NY 10016</p>

                <div className='icon-container'>
                    <div className='icon'>
                        <FaFacebookF className='facebook-icon' />
                    </div>

                    <div className='icon'>
                        <FaInstagram className='instagram-icon' />
                    </div>

                    <div className='icon'>
                        <FaTwitter className='twitter-icon' />
                    </div>           
                </div>
            </div>

            <table>
                <tr className='table-heading'>
                    <td>Company</td>
                    <td>Support</td>
                    <td>More</td>
                </tr>

                <tr className='table-data'>
                    <td>About Us</td>
                    <td>FAQ</td>
                    <td>Become a partner</td>
                </tr>

                <tr className='table-data'>
                    <td>News</td>
                    <td>US Office</td>
                    <td>Partner support</td>
                </tr>

                <tr className='table-data'>
                    <td>Careers</td>
                    <td>Asia Office</td>
                    <td>Mobile App Links</td>
                </tr>

                <tr className='table-data'>
                    <td>How we work</td>
                    <td>Help Center</td>
                    <td></td>
                </tr>
            </table>
        </footer>
    )
}