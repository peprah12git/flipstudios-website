import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyChooseUs from '../components/WhyChooseUs'
import OptimizeFor from '../components/OptimizeFor'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <OptimizeFor />
        <Projects />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default Home
