import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header className="flex bg-gray-200 py-8">
        <div className="inline-flex flex-2">
          <a
            className="pl-50"
            href="https://www.skandifix.com">
            <Image
              src="/hammer_wrench.png"
              alt="hammer_wrench picture"
              width={40}
              height={40}
            />
          </a>
          <h1 className="inline text-5xl pl-3">
            <a href="https://wwww.skandifix.com">Skandifix</a>
          </h1>
        </div>
        <Navbar />
      </header>
    </>
  )
}

