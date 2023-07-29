import { LandingPage } from "../components/LandingPage/LandingPage";
import { ReviewComponent } from "../components/ReviewComponent/ReviewComponent";
import DriverRegistration from "../components/DriverRegistration/DriverRegistration";
import { Success } from "../components/Success/Success";
import { useState } from "react";

const HomePage = ()=> {
    const [showSuccess, setShowSuccess] = useState(false);
    return (
        <div style={{width: '100%'}}>
            <LandingPage />
            <ReviewComponent />
            <DriverRegistration 
                showSuccess={showSuccess} 
                setShowSuccess={setShowSuccess} 
            />
            <Success showSuccess={showSuccess} />
        </div>
    )
}

export default HomePage;