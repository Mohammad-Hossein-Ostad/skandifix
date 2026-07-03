type ContactCTAProps = {
  variant: "WhatsApp Us" | "Get a quote",
  href: string
}

export default function ContactCTA({ variant, href }: ContactCTAProps) {
  return (
    <div className="pt-5 inline-flex">
      <a
        className="bg-lime-800 mr-1.5 px-5 py-3 rounded-full text-white"
        href={href}
      >
        {variant}
      </a>
    </div>
  )
}
