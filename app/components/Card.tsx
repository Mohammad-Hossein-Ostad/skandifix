import Image from "next/image";
import ContactCTA from "./PhoneLink";

export default function Card() {
  return (
    <div className="flex justify-around items-center py-10">
      <div className="w-2/5">
        <p className="text-lg/8">
          Scandinavian precision. Spanish compliance. Reliable renovations and technical services you can trust on the Costa del Sol. Certified workmanship, transparent pricing, and guaranteed results — done right the first time.
        </p>
        <ContactCTA
          href="https://wa.me/34613118814"
          variant="WhatsApp Us"
        />
        <ContactCTA
          href="/contact"
          variant="Get a quote"
        />
      </div>
      <div>
        <Image
          src="https://static.wixstatic.com/media/35da7a_2f64e1abbf3544b1b1d148d87475c49a~mv2.jpg/v1/fill/w_828,h_1104,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/jason-wang-5MG8cQbw-T8-unsplash.jpg"
          width={400}
          height={400}
          alt="portal image"
        />
      </div>
    </div>
  )
}
