import Link from "next/link"
import { Linkedin} from "lucide-react"
import { SiX, SiYoutube, SiDiscord, SiFacebook } from '@icons-pack/react-simple-icons'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 h-[14.5vh]">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link href="https://x.com/BSides_SWFL" className="hover:text-gray-300" aria-label="Twitter">
            <SiX size={20} />
          </Link>
          <Link href="https://www.facebook.com/people/BSides-SWFL/61566492254339/" className="hover:text-gray-300" aria-label="Facebook">
            <SiFacebook size={20} />
          </Link>
          <Link href="https://discord.gg/yHfHPZ3JRb" className="hover:text-gray-300" aria-label="Discord">
            <SiDiscord size={20} />
          </Link>
          <Link href="https://www.youtube.com/@BSidesSWFL" className="hover:text-gray-300" aria-label="Instagram">
            <SiYoutube size={20} />
          </Link>
          <Link href="https://www.linkedin.com/company/bsides-swfl/" className="hover:text-gray-300" aria-label="LinkedIn">
            <Linkedin size={20} />
          </Link>
        </div>
        <div className="text-center text-sm">
          <p>© 2025 BSides SWFL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}