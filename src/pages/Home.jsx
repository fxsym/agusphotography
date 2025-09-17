import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Description from "../components/Description";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Description />
            <Gallery></Gallery>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    )
}