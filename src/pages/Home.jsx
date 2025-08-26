import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Description from "../components/Description";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className="mt-15"> {}
                <Description/>
            </div>
            
        </div>
    )
}