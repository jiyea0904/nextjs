import Link from "next/link";

// app/not-found.js
export default function NotFound() {
    return (
        <section style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>404 - 페이지를 찾을 수 없습니다</h1>
            <p>죄송합니다. 요청하신 페이지는 존재하지 않습니다.</p>
            <Link href="/">메인페이지로 돌아가기</Link>
        </section>
    );
}
