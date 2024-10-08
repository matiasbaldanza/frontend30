import Card from "./Card"
import { cn } from "../lib/utils"

type QRCodeCardProps = {
  imageSrc: string
  altText: string
  href?: string
  title: string
  description: string
  className?: string
}

export default function QRCodeCard(
  { imageSrc, altText, href, title, description, className }: QRCodeCardProps
) {
  const baseStyle = "flex flex-col items-center gap-6 p-5 mx-auto bg-white rounded-2xl max-w-[354px]"


  const qrImage = (
    <img
      className="rounded-xl"
      src={imageSrc} alt={altText} />
  )
  return (
    <Card className={cn(baseStyle, className)}>
      {
        href ? (
          <a href={href}>
            {qrImage}
          </a>
        ) : (
          qrImage
        )
      }
      <div className="flex flex-col items-center gap-4 pb-6 mx-5">
        <h2 className="text-2xl font-[700] text-slate-900 font-outfit text-center">{title}</h2>
        <p className="text-base font-[400] text-slate-500 font-outfit text-center">{description}</p>
      </div>
    </Card>
  )
}