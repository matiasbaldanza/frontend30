import './App.css'
import QrCodeCard from './components/qr-code-card'

function App() {
  return (
    <>
      <div className="w-full h-screen p-4 m-0 bg-slate-300">
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
