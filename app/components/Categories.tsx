import Card from "./Card";
import cables from "../../public/assets/images/cabels.jpg"
import tap from "../../public/assets/images/tap.jpg"
import contruction from "../../public/assets/images/construction.jpg"
import smartDevice from "../../public/assets/images/smart_device.jpg"
import emergency from "../../public/assets/images/emergency.jpg"

export default function Categories() {
  return (
    <div className="p-10">
      <div className="pb-10 text-4xl text-center">
        <h3>Our Skandifix Services</h3>
      </div>
      <section className="flex flex-row gap-6">
        <Card
          src={cables}
          information="cables"
          title="Electrical installations & fault finding"
          description="Certified installations, upgrades, new sockets, panels, lighting systems and troubleshooting."
        />
        <Card
          src={tap}
          information="tap"
          title="Plumbing & water systems"
          description="Repairs, installations, leak detection, boilers, water heaters and pressure systems."
        />
        <Card
          src={contruction}
          information="construction"
          title="Renovations – residential & commercial"
          description="Bathrooms, kitchens, flooring, tiling, painting and complete property refurbishments."
        />
        <Card
          src={smartDevice}
          information="smart_device"
          title="Smart systems & appliances"
          description="Installation and repair of technical systems for homes and businesses."
        />
        <Card
          src={emergency}
          information="emergency"
          title="Emergency repairs"
          description="Fast response when something stops working."
        />
      </section>
    </div>
  )
}
