import Card from '../components/Card'
import { cn } from '../lib/utils'

export type BlogPreviewCardProps = {
  imageSrc: string;
  categories: string[];
  publishedAt: string;
  title: string;
  description: string;
  author: {
    name: string;
    imageSrc: string;
  }
  className?: string;
}

export default function BlogPreviewCard({
  imageSrc,
  categories,
  publishedAt,
  title,
  description,
  author,
  className
}: BlogPreviewCardProps) {
  const baseStyle = "w-full p-5 max-w-[354px] border-2 border-black flex flex-col gap-4 font-figtree"

  return (
    <Card
      className={cn(baseStyle, className)}
    >
      <img
        className="rounded-xl"
        src={imageSrc}
        alt="Blog Preview Card"
      />
      <div className="flex flex-wrap gap-2">
        {categories.length > 0
          ? categories.map((category) => (
            <span
              key={category}
              className="text-sm font-[700] text-black bg-[#f4d04d] rounded-md px-4 py-1"
            >
              {category}
            </span>
          ))
          : <span
            className="text-sm font-[700] text-gray-700 bg-gray-200 rounded-md px-4 py-1">
            Uncategorized
          </span>
        }

      </div>
      <p className="text-sm font-[500] text-gray-600">
        Published {new Date(publishedAt)
          .toLocaleDateString()}
      </p>
      <h2 className="text-2xl font-[800] leading-tight text-black text-balance">
        {title}
      </h2>
      {/* Description */}
      <p className="font-[500] text-gray-500">
        {description}
      </p>
      <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-full"
          src={author.imageSrc}
          alt={author.name}
        />
        <span
          className="text-md font-[700] text-black"
        >
          {author.name}
        </span>
      </div>
    </Card>
  )
}