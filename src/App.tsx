import { Artist } from './components/Artist'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Order } from './components/Order'
import { Sizes } from './components/Sizes'
import { WorksGallery } from './components/WorksGallery'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorksGallery />
        <Sizes />
        <Order />
        <Artist />
      </main>
      <Footer />
    </>
  )
}
