import Link from "next/link";

export default async function Dog() {
    const res = await fetch('http://localhost:3000/api/dog');
    const dog = await res.json();
    console.log(dog)
    return(
        <section>
            <h1>강아지</h1>
            <img src={dog.image} alt="강아지 이미지" />
            <p>{dog.message}</p>
            <Link href="/">메인페이지로 돌아가기</Link>
        </section>
    )
}
