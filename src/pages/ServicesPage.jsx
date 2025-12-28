import React, { useEffect } from 'react';
import OtherNavbar from '../components/OtherNavbar';
import ServicesSection from '../components/Services/ServicesSection';
import ExpeditionDetail from '../components/Services/ExpeditionDetail';
import MorningEveningRaid from '../components/Services/MorningEveningRaid';
import CampSection from '../components/Services/CampSection';


function ServicesPage() {
    // Force scroll to top when this page loads
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ServicesPage w-full min-h-screen bg-zinc-950">
            <OtherNavbar />
            {/* Added pt-24 to ensure ServicesSection starts below the Navbar */}
            <main className="pt-24 bg-white"> 
                <ServicesSection />
                <ExpeditionDetail />
                <MorningEveningRaid />
                <CampSection /> 
            </main>
        </div>
    );
}

export default ServicesPage;