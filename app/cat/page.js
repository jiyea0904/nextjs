import Link from "next/link";

export default async function Cat() {
    const res = await fetch('http://localhost:3000/api/cat');
    const cat = await res.json();
    console.log(cat)
    return(
        <section>
            <h1>고양이</h1>
            <img src={cat.image} alt="고양이 이미지" />
            <p>{cat.message}</p>
            <Link href="/">메인페이지로 돌아가기</Link>
        </section>
    )
}
