import SubscriptionForm from './SubscriptionForm'

const NewsLetterBanner = () => {
  return (
    <div className='news-letter-banner container'>
      <div className='content'>
        <h4>NEVER SETTLE. KEEP UP TO DATE AND SAVE 10% ON YOUR FIRST ORDER </h4>
        <p>*T&C Apply. View our Privacy Policy to find our how your data is handled.</p>
      </div>
      <SubscriptionForm />
    </div>
  )
}

export default NewsLetterBanner
