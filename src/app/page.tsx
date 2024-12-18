import { Nav } from '@/components/nav'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Contacts } from '@/components/contacts'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Contacts />
    </main>
  )
}

