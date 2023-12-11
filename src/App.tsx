
import Navbar from "./components/Navbar"
import Footer from "./components/footer"
import AboutUs from "./page/AboutUs"
import PricingPage from "./page/Pricing"
import WhatWeDoPage from "./page/WhatWeDoPage"
import MainWindow from "./page/mainWindow"


function App() {

  return (
    <div className="bg-gradient-to-br from-navbar to-normal">
      <Navbar />
      <MainWindow />
      <WhatWeDoPage />
      <AboutUs />
      <PricingPage />
      <Footer />
    </div>
  )
}

export default App
