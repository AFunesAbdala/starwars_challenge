import Link from "next/link";
import Logo from "../../public/logo.png"
import Image from "next/image";
import VideoComponent from "@/components/video";

export default function Home() {
  return (
    <Link href={"/select"} className="relative flex items-center justify-center h-screen overflow-hidden">
      <div className="w-full flex flex-col items-center justify-center z-20 gap-40">
        <Image src={Logo} alt="Logo" className="w-2/6"></Image>
        <h1 className="w-1/4 border-y text-center py-2 font-bold text-white text-xl">CLICK ANYWHERE TO START</h1>
      </div>
      <VideoComponent className="absolute z-10 w-auto min-w-full min-h-full max-w-none" src={'../video/landing.mp4'}/>
    </Link>
  );
}
