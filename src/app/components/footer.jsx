import Link from "next/link"
import Image from "next/image"
import { Linkedin, NotebookPen, Contact2 } from "lucide-react"
import { SiX, SiYoutube, SiDiscord, SiFacebook, SiFormstack, SiBluesky } from '@icons-pack/react-simple-icons'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-3 h-[11vh] fixed bottom-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <Link href="https://x.com/BSides_SWFL" className="hover:text-orange-300 hover:scale-110 text-orange-200" aria-label="Twitter">
            <SiX size={20} />
          </Link>
          <Link href="https://www.facebook.com/people/BSides-SWFL/61566492254339/" className="hover:text-orange-300 hover:scale-110 text-orange-200" aria-label="Facebook">
            <SiFacebook size={20} />
          </Link>
          <Link href="https://discord.gg/yHfHPZ3JRb" className="hover:text-orange-300 hover:scale-110 text-orange-200" aria-label="Discord">
            <SiDiscord size={20} />
          </Link>
          <Link href="https://www.youtube.com/@BSidesSWFL" className="hover:text-orange-300 hover:scale-110 text-orange-200" aria-label="Instagram">
            <SiYoutube size={20} />
          </Link>
          <Link href="https://bsky.app/profile/bsidesswfl.bsky.social" className="hover:text-orange-300 hover:scale-110 text-orange-200" aria-label="BlueSky">
            <SiBluesky size={20} />
          </Link>
          <Link href="https://www.linkedin.com/company/bsides-swfl/" className="hover:text-orange-300 hover:scale-110 text-orange-200" aria-label="LinkedIn">
            <Linkedin size={20} />
          </Link>
          <Link href="/contactus" className="hover:text-orange-300 hover:scale-110 text-orange-200" aria-label="Contact Us">
            <NotebookPen size={20} />
          </Link>
        </div>
        <div className="text-center text-xs">
          <p>© 2025 BSides SWFL. All rights reserved.</p>
        </div>
        <div className="text-center text-sm">
          <p>Powered by <a href="https://github.com/bsides-swfl/bsides-swfl.github.io" className="hover:text-gray-300 text-sm" target="_blank" rel="noreferrer">BSides <Image src="/bsideslogo.ico" className="inline-block items-center" width={25} height={25} alt="BSides"></Image></a></p>
        </div>
      </div>
    </footer>
  )
}