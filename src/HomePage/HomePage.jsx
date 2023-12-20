import ImgComponent from '../components/Image'

import NavComponent from '../components/Navbar'
import NewsComponent from '../components/News'
import EventsComponent from '../components/Events'
import AboutComponent from '../components/About'
import MembershipComponent from '../components/Membership'
import ParksComponent from '../components/Parks'
import ContactComponent from '../components/Contact'

const HomePage = () => {
  return (
    <>
      <NavComponent />
      <ImgComponent />
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
      >
        <div
          style={{
            height: '2px',
            borderRadius: '2px',
            backgroundColor: '#f0f0f0',
            maxWidth: '1300px',
            width: '100%',
            margin: '0%',
            padding: '0%',
          }}
        ></div>
      </div>
      <NewsComponent />
      <EventsComponent />
      <AboutComponent />
      <MembershipComponent />
      <ParksComponent />
      <ContactComponent />
    </>
  )
}
export default HomePage
