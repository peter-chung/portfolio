import { ActiveSectionProvider } from "@/components/active-section-context"
import Nav from "@/components/nav"
import Hero from "@/components/sections/hero"
import Projects from "@/components/sections/projects"
import Experience from "@/components/sections/experience"
import Skills from "@/components/sections/skills"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <ActiveSectionProvider>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </ActiveSectionProvider>
  )
}
