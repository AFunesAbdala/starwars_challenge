import Image from "next/image"
import Linkedin from "../../public/icon/linkedin-icon.png"

function FooterComponent() {
    return(
        <div className="absolute inset-x-0 bottom-5  z-30 flex items-center justify-center gap-2 text-white font-light text-sm">
            <Image src={Linkedin} alt="LinkedIn Icon" className="w-[15px]"></Image>
            <a href="https://www.linkedin.com/in/alejo-funes-abdala/" className="font-medium" target="_blank">Alejo Funes Abdala</a>
            <p>Neowyze’s Frontend Challenge . Next.js + TailwindCSS</p>
        </div>
    )
}

export default FooterComponent

