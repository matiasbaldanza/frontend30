import { cn } from "../lib/utils"

type CardProps = {
  children: React.ReactNode;
  className?: string;
}

export default function Card(
  { children, className }: CardProps
) {
  const baseStyle = "bg-white rounded-2xl"

  return (
    <div className={cn(baseStyle, className)}>
      {children}
    </div>
  )
}