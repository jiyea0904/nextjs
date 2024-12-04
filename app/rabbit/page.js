import Link from "next/link";

export default async function Rabbit() {
    const res = await fetch('http://localhost:3000/api/rabbit');
    const rabbit = await res.json();
    console.log(rabbit);

    return (
        <section>
            <h1>토끼</h1>
            <img src={rabbit.image} alt="토끼 이미지" />
            <p>{rabbit.message}</p>
            <Link href="/">메인페이지로 돌아가기</Link>
        </section>
    );
}
