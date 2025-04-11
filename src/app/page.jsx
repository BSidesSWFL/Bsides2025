import Footer from "./components/footer"
import Hero from "./components/hero"
import InfoCards from "./components/info-cards"
import Navbar from "./components/navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InfoCards />
      </main>
      <Footer />
    </>
  )
}