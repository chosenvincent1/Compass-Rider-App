import { LandingPage } from "../components/LandingPage/LandingPage";
import { ReviewComponent } from "../components/ReviewComponent/ReviewComponent";
import DriverRegistration from "../components/DriverRegistration/DriverRegistration";

const HomePage = ()=> {
    return (
        <>
            <LandingPage />
            <ReviewComponent />
            <DriverRegistration />
        </>
    )
}

export default HomePage;