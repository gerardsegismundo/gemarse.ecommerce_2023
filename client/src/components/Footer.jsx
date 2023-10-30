import { ReactComponent as TwitterIcon } from '../assets/svg/twitter.svg'
import { ReactComponent as FacebookIcon } from '../assets/svg/facebook.svg'
import { ReactComponent as InstagramIcon } from '../assets/svg/instagram.svg'
import FooterPayment from './FooterPayment'
import SubscriptionForm from './SubscriptionForm'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-header'>
          <h2 className='brand'>Gemarse</h2>

          <div className='social-groups'>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </div>
        </div>
        <div className='row'>
          <ul className='shop'>
            <li>SHOP</li>
            <li>Mens</li>
            <li>Womens</li>
            <li>Accessories</li>
            <li>Gift</li>
            <li>Card</li>
          </ul>
          <ul className='company'>
            <li>COMPANY</li>
            <li>Blakely Blog</li>
            <li>Contact Us</li>
            <li>About Blakely</li>
            <li>FAQs</li>
          </ul>
          <ul className='info'>
            <li>INFO</li>
            <li>Delivery & Returns</li>
            <li>Track Parcel</li>
            <li>Affiliates</li>
          </ul>

          <ul className='important'>
            <li>IMPORTANT</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie Policy</li>
            <li>Sitemap</li>
          </ul>
        </div>

        <div className='subscribe'>
          <h4>Subscribe to our newsletter</h4>

          <SubscriptionForm onFooter />
        </div>

        <div className='bottom-group'>
          <h2 className='brand'>Gemarse</h2>
          <p>© Blakely Clothing US 2023 all rights reserved</p>
          <FooterPayment />
        </div>
      </div>
    </footer>
  )
}

export default Footer
