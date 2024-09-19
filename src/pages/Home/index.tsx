import styles from './Home.module.scss';
import Navbar from "../../components/Navbar";
import About from "../../components/About"
import Intro from "../../components/Intro"
import Footer from "../../components/Footer";
import Skills from "../../components/Skills";
import Projects from "../../components/Project";
import Contact from "../../components/Contact";

export default function App() {
    return (
        <>
            <div className={styles.appContainer}>
                <Navbar />
                <Intro />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
        </>
    )
}