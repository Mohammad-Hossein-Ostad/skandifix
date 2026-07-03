import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="py-2">
      <div className="relative w-fit">
        <Image
          src="https://static.wixstatic.com/media/35da7a_f9dda5ae0ef941898d490dd7db77a9e8~mv2.jpg/v1/fill/w_2864,h_1280,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/35da7a_f9dda5ae0ef941898d490dd7db77a9e8~mv2.jpg"
          alt="about picture section"
          width={1432}
          height={640}
        />
        <div className="absolute inset-0 flex justify-end pt-9 pr-9">
          <div className="flex flex-col text-xl text-white">
            <p className="text-green-700">About us</p>
            <p className="my-4 text-4xl">Skandifix</p>
            <p className="h-2.5 w-150">Based in Fuengirola and serving the entire Costa del Sol, we provide professional renovation and technical services for homeowners, property managers, and businesses who expect more than just a quick fix. Our clients value certified workmanship, transparent pricing, and clear communication from start to finish.</p>
            <p className="mt-50 h-2.5 w-150"> We believe that professionalism is not just about technical skill — it’s about responsibility. Every installation, repair, or renovation we complete is carried out by authorized and insured technicians, following strict safety and compliance standards.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
