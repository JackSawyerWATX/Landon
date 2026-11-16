import React, {useState, useEffect} from 'react';
import services from './data/services.json';
import accessibilities from './data/accessibilities.json';

const Hotelinfo = () => {
    const [accessibilitiesData, setAccessibilitiesData] = useState(accessibilities);
    const [servicesData, setServicesData] = useState(services);

    const loadAccessibilitiesData = async () => {
        //Query the API gateway
        const response = await fetch('https://4qd4obh5f3.execute-api.us-east-1.amazonaws.com/Production/accessibilities')
        let jsonData = await response.json();

        //Assign response data to the state variable
        setAccessibilitiesData(jsonData);
    }

    const loadServicesDataData = async () => {
        //Query the API gateway
        const response = await fetch('https://4qd4obh5f3.execute-api.us-east-1.amazonaws.com/Production/services')
        let jsonData = await response.json();

        //Assign response data to the state variable
        setServicesData(jsonData);
    }

    useEffect(() => {
        // load the menuLinks data from the API gateway
        loadAccessibilitiesData().catch(() => {});
    }, []);

    useEffect(() => {
        // load the menuLinks data from the API gateway
        loadServicesDataData().catch(() => {});
    }, []);


    return (
        <div className="scene" id="hotelinfo">
            <article className="heading">
                <p className="eyebrow">THOUGHTFULLY TAKEN CARE OF</p><h2>Every detail. <em>For your stay.</em></h2>
            </article>
            <article id="usefulinfo">
                <section id="arrivalinfo">
                    <h2>Arrival Information</h2>
                    <ul>
                        <li><strong>Check-in:</strong> 3:00 PM</li>
                        <li><strong>Check-out:</strong> 11:00 AM</li>
                        <li><strong>Parking:</strong> Self-parking in the underground garage is £15 per day and valet parking is £50 per day.</li>
                        <li><strong>Airport Shuttle:</strong> Our complimentary airport shuttles leave every hour on the hour for Heathrow and Gatwick airports.</li>
                        <li><strong>Trains:</strong> The nearest Underground station is at Leicester Square.</li>
                        <li><strong>Pet Policy:</strong> Pets of all sizes and types are allowed in designated pet-friendly rooms and common areas. Service animals are allowed everywhere.</li>
                    </ul>
                </section>
                <section className="checklist" id="services">
                    <h2>Services and Amenities</h2>
                    <p>Our services and amenities are designed to make your travel easy, your stay comfortable, and your experience memorable.</p>
                    <ul>
                        {
                            servicesData.map((services) =>
                                <li key={services.name}>{services.name.replace(/&amp;/g, '&')}</li>
                            )
                        }
                    </ul>
                </section>
                <section className="checklist" id="accessibility">
                    <h2>Accessibility</h2>
                    <p>We're committed to providing excellent service for every guest. We offer the following accessibility features:</p>
                    <ul>
                        {
                            accessibilitiesData.map((accessibility) =>
                                <li key={accessibility.name}>{accessibility.name.replace(/&amp;/g, '&')}</li>
                            )
                        }
                    </ul>
                </section>
            </article>
            <article id="greenprogram">
                <p className="eyebrow">A LIGHTER FOOTPRINT</p><h2>A greener way to stay.</h2>
                <p>During the renovation of <strong>The Landon Hotel in London</strong>, we considered our environmental impact at every stage. Green building materials, solar power, and energy-efficient lighting and appliances help us reduce energy use throughout the hotel. Our recycling and composting programme reduces the waste sent to local landfills and provides materials for new products and compost for local gardens and landscapes.</p>
            </article>
        </div>
    );
}

export default Hotelinfo;