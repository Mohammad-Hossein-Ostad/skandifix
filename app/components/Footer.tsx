import IconLibrary from "./IconLibrary";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-olive-300 p-10">
        <div className="flex justify-center items-center">
          <p>P.º Marítimo Rey de España, 11 Fuengirola, 29640 Spain</p>
        </div>
        <div>
          <IconLibrary />
        </div>
        <div className="pt-10 flex flex-col justify-center items-center">
          <h1 className="w-1/2 h-4 shadow-xl/30" />
          <p className="pt-2">&copy; {currentYear} - All right reserved by
            <a className="pl-2 underline" href="mailto:rajabaliostad@gmail.com">VAHAB</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
