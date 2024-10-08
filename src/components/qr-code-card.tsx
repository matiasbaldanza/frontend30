import Card from "./Card"
import { cn } from "../lib/utils"

type QRCodeCardProps = {
  imageSrc: string
  altText: string
  href?: string
  title: string
  description: string
  compact?: boolean
  className?: string
}

export default function QRCodeCard(
  { imageSrc, altText, href, title, description, compact, className }: QRCodeCardProps
) {
  const baseStyle = cn(
    "flex items-center gap-6 p-5 mx-auto bg-white rounded-2xl max-w-[354px]",
    compact
      ? "flex flex-row gap-4 p-5"
      : "flex flex-col gap-6 p-5"
  )


  const qrImage = (
    <img
      className={cn("rounded-xl", compact ? "max-h-40" : null)}
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
      <div className={cn("flex flex-col items-center gap-4", compact ? "mx-2" : "mx-5")}>
        <h2 className={cn(
          "font-[700] text-slate-900 font-outfit",
          compact ? "text-xl text-left leading-tight font-[400]" : "text-2xl text-center")}>{title}</h2>
        {compact
          ? null
          : <p className="text-base font-[400] text-slate-500 font-outfit text-center pb-6 ">{description}</p>
        }
      </div>
    </Card >
  )
}