import About from "./About/page";
import Contact from "./Contacts/page";
import LandingPage from "./Landingpage/page";
import Projects from "./Project/page";
import Skills from "./Skills/page";

export default function Home() {
  return (
    <div className="">
      <main className="">
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      <Contact/>

      </main>
      
    </div>
  );
}