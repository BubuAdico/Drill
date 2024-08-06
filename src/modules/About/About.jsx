import Truck from "./components/Truck";
import Companies from "./components/Companies"
import Value from "./components/Value";
import LGMRT from "./components/LGMRT";

const About = () => {
    return (
        <section>
            <LGMRT />
            <Truck />
            <Value />
            <div className="h-auto text-black">
                <Companies />
            </div>
        </section>
    )
}

export default About;