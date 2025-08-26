import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Gallery from "../components/Gallery";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <div className="mt-15"> {}
                <Description/>
            </div>
            <Gallery></Gallery>
        </div>
    )
}