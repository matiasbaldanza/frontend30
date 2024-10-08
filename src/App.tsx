import './App.css'
import QrCodeCard from './components/qr-code-card'

function App() {
  return (
    <>
      <div className="flex flex-col items-center w-full h-screen gap-5 p-4 m-0 bg-slate-300">
        <QrCodeCard
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
        />
      </div>
    </>
  )
}

export default App
