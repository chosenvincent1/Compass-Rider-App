import { LandingPage } from "../components/LandingPage/LandingPage";
import { ReviewComponent } from "../components/ReviewComponent/ReviewComponent";
import DriverRegistration from "../components/DriverRegistration/DriverRegistration";
import { Success } from "../components/Success/Success";
import { useState } from "react";

const HomePage = ()=> {
    const [showSuccess, setShowSuccess] = useState(false);
    return (
        <>
            <LandingPage />
            <ReviewComponent />
            <DriverRegistration 
                showSuccess={showSuccess} 
                setShowSuccess={setShowSuccess} 
            />
            <Success showSuccess={showSuccess} />
        </>
    )
}

export default HomePage;