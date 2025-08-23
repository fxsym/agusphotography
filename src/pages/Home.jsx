import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Description from "../components/Description";

export default function Home() {
    return (
        <div>
            <Navbar></Navbar>
            <Hero></Hero>
            <Description></Description>
            <h1 className="text-black ">Hello World</h1>
        </div>
    )
}