import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <main>
      <Link href="/cat"><button>Cat</button></Link>
      <Link href="/dog"><button>Dog</button></Link>
      <Link href="/rabbit"><button>Rabbit</button></Link>
    </main>
  )
}
