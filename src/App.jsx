// import React from 'react'
// import Header from './components/header/Header'
// import Hero from './components/hero/Hero'
// import WhoIsVerify from './components/whoIsVerify/WhoIsVerify'
// import WhyUse from './components/whyUse/WhyUse'
// import ContactSection from './components/contact-section/ContactSection'
// import Footer from './components/footer/Footer'
// import SearchSection from './components/search-section/SearchSection'
// import BrokerVerification from './components/broker-verification/BrokerVerification'
// import {BrowserRouter, Router, Route} from 'react-router-dom'

// function App() {
//   return (
//     <div>
//       <Header />
//       <Hero />
//       <SearchSection/>
//       <WhyUse/>
//       <WhoIsVerify />
//       <ContactSection />
//       <Footer />
//       <BrokerVerification/>
      
//     </div>
//   )
// }

// export default App



import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import WhoIsVerify from './components/whoIsVerify/WhoIsVerify';
import WhyUse from './components/whyUse/WhyUse';
import ContactSection from './components/contact-section/ContactSection';
import Footer from './components/footer/Footer';
import SearchSection from './components/search-section/SearchSection';
import BrokerVerification from './components/broker-verification/BrokerVerification';

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={
          <>
            <Header />
            <Hero />
            <SearchSection />
            <WhyUse />
            <WhoIsVerify />
            <ContactSection />
            <Footer />
          </>
        } />

        {/* Broker Verification Route */}
        <Route path="/broker-verification" element={<BrokerVerification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
