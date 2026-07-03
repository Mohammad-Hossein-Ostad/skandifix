import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <>
      <header className="bg-gray-200">
        <div className="flex items-center justify-around h-30">
          <div className="flex">
            <a
              href="https://www.skandifix.com">
              <Image
                src="/hammer_wrench.png"
                alt="hammer_wrench picture"
                width={40}
                height={40}
              />
            </a>
            <h1 className="text-5xl pl-2">
              <a href="https://wwww.skandifix.com">Skandifix</a>
            </h1>
          </div>
          <Navbar />
        </div>
      </header>
    </>
  )
}

