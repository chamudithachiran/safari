import React from 'react'
import Hero from '../components/home/Hero'
import AboutUs from '../components/home/aboutsecion'
import Services from '../components/home/servicessection'
// import Gallery from '../components/home/gallery'
import Testimonialsection from '../components/home/Testimonialsection'
import OurRoutes from '../components/home/OurRoutes'
import Gallery from '../components/gallery/GallerySection'
import ContactSection from '../components/home/contactsection'

function HomePage() {
    return (
        <div className="HomePage w-full">
            {/* ID matches the href in your Navbar links */}
            <section id="home">
                <Hero />
            </section>

            <section id="about">
                <AboutUs />
            </section>

            <section id="services">
                <Services />
            </section>

            {/* If you want a link for Testimonials, add it to Navbar and use this ID */}
            <section id="testimonials">
                <Testimonialsection />
            </section>

            <section id="our-routes">
                <OurRoutes />
            </section>

            <section id="gallery">
                <Gallery />
            </section>

            <section id="contact">
                <ContactSection />
            </section>

           
        </div>
    )
}

export default HomePage