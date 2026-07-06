import Image, { StaticImageData } from "next/image"

type ImageInformation = "cables" | "construction" | "emergency" | "smart_device" | "tap";

type Title = "Electrical installations & fault finding" |
  "Plumbing & water systems" |
  "Renovations – residential & commercial" |
  "Smart systems & appliances" |
  "Emergency repairs";

type Description = "Certified installations, upgrades, new sockets, panels, lighting systems and troubleshooting." |
  "Repairs, installations, leak detection, boilers, water heaters and pressure systems." |
  "Bathrooms, kitchens, flooring, tiling, painting and complete property refurbishments." |
  "Installation and repair of technical systems for homes and businesses." |
  "Fast response when something stops working.";


type CardProps = {
  src: StaticImageData,
  information: ImageInformation,
  title: Title,
  description: Description
}

export default function Card({ src, information, title, description }: CardProps) {
  return (
    <div className="max-w-3xs border border-gray-200 rounded-2xl shadow-xs">
      <div>
        <Image
          src={src}
          width={340}
          height={340}
          alt={`picture of ${information}`}
          className="rounded-2xl"
        />
        <div className="p-2">
          <div>
            <p className="text-2xl underline font-bold">{title}</p>
            <p className="mt-3 text-base/7">{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
