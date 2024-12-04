import Link from "next/link";

export default function Header() {
    return(
        <header>
            <nav>
                <Link href="/">Main</Link>
                <Link href="/cat">Cat</Link>
                <Link href="/dog">Dog</Link>
                <Link href="/rabbit">Rabbit</Link>
            </nav>
        </header>
    )
}