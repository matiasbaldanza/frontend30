import './App.css'
// import QrCodeCard from './components/qr-code-card'
import BlogPreviewCard, { BlogPreviewCardProps } from './components/blog-preview-card'

const cards: BlogPreviewCardProps[] = [
  {
    imageSrc: "/02-blog-preview-card/illustration-article.svg",
    categories: ["Learning"],
    publishedAt: "2023-12-21",
    title: "HTML & CSS Foundations",
    description: "These languages are the backbone of every website, defining structure, content, and presentation.",
    author: {
      name: "Greg Hooper",
      imageSrc: "/02-blog-preview-card/image-avatar.webp",
    }
  }
]

function App() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen gap-5 p-4 m-0 bg-slate-300">
        {/* <QrCodeCard
          compact
          imageSrc="/01-qr-code/image-qr-code.png"
          altText="QR Code"
          href="https://www.frontendmentor.io/"
          title="Improve your front-end skills by building projects"
          description="Scan the QR code to visit Front-End Mentor and take your coding skills to the next level"
          className={`
            hover:shadow-lg hover:-translate-y-0.5 transition-all duration-150
            active:shadow-none active:translate-y-0
          `}
        />
        <QrCodeCard
          imageSrc="/01-qr-code/image-qr-code.png"
          altText="QR Code"
          href="https://www.frontendmentor.io/"
          title="Improve your front-end skills by building projects"
          description="Scan the QR code to visit Front-End Mentor and take your coding skills to the next level"
        /> */}
        <BlogPreviewCard
          imageSrc={cards[0].imageSrc}
          categories={cards[0].categories}
          publishedAt={cards[0].publishedAt}
          title={cards[0].title}
          description={cards[0].description}
          author={cards[0].author}
        />

      </div>
    </>
  )
}

export default App
