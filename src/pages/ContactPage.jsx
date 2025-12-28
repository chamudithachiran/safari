import React from 'react'
import OtherNavbar from '../components/OtherNavbar'
import ContactHero from '../components/contact/ContactHero'
import MapSection from '../components/contact/MapSection'

function ContactPage() {
    const navbarItems = [
        {
            label: "Home",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Home Page", ariaLabel: "Home Page", href: "/" }
            ]
        },
        {
            label: "About",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "About Us", ariaLabel: "About Us", href: "/about" }
            ]
        },
        {
            label: "Services",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Our Services", ariaLabel: "Our Services", href: "#services" }
            ]
        },
        {
            label: "Contact",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Contact Us", ariaLabel: "Contact Us", href: "#contact" }
            ]
        },
        {
            label: "Gallery",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "Gallery", ariaLabel: "Gallery", href: "#gallery" }
            ]
        },
        {
            label: "Blog",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Blog", ariaLabel: "Blog", href: "#blog" }
            ]
        }
    ]

    return (
        <div className="ContactPage w-full">
            <section>
                <OtherNavbar />
              </section>
              <ContactHero />
              <MapSection />
        </div>
    )
}

export default ContactPage