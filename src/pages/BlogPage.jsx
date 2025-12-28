import React from 'react'
import OtherNavbar from '../components/OtherNavbar'
import BlogHomeSection from '../components/Blog/BlogHomeSection'
import DetailsSection from '../components/Blog/DetailsSection'



function BlogPage() {
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
                { label: "Our Services", ariaLabel: "Our Services", href: "/services" }
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
                { label: "Blog", ariaLabel: "Blog", href: "/blog" }
            ]
        }
    ]

    return (
        <div className="BlogPage w-full">
            <section>
                <OtherNavbar />
                
            </section>
            <BlogHomeSection />
            <DetailsSection />
        </div>
    )
}

export default BlogPage