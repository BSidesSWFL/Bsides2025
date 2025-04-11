import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Code, Rss } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link href="https://twitter.com" className="hover:text-gray-300" aria-label="Twitter">
            <Twitter size={20} />
          </Link>
          <Link href="https://facebook.com" className="hover:text-gray-300" aria-label="Facebook">
            <Facebook size={20} />
          </Link>
          <Link href="https://discord.com" className="hover:text-gray-300" aria-label="Discord">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="9" cy="12" r="1" />
              <circle cx="15" cy="12" r="1" />
              <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
              <path d="M7 16.5c3.5 1 6.5 1 10 0" />
              <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
              <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5C6.151 4.485 7.545 4.16 9 4l1 2.5" />
            </svg>
          </Link>
          <Link href="https://instagram.com" className="hover:text-gray-300" aria-label="Instagram">
            <Instagram size={20} />
          </Link>
          <Link href="https://linkedin.com" className="hover:text-gray-300" aria-label="LinkedIn">
            <Linkedin size={20} />
          </Link>
          <Link href="/mastodon" className="hover:text-gray-300" aria-label="Mastodon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21.58 13.913c-.29 1.469-2.592 3.121-5.238 3.396-1.379.184-2.737.368-4.185.276-2.368-.092-4.237-.844-4.237-.844 0 .368.23.844.691 1.104 1.954 1.471 14.589 1.38 16.427-1.288.46-.66.368-1.565.368-1.565-.046-.66-.414-1.104-.828-1.104l.002.025zm-1.662-3.79c0-2.72-1.772-3.517-1.772-3.517 0-6.424-9.17-6.332-11.585-6.332h-.115c-2.415 0-11.585-.092-11.585 6.332 0 0-1.772.796-1.772 3.517 0 3.884-.115 8.675.46 11.212 1.954 8.582 14.82 8.582 18.91 8.582 4.09 0 16.956 0 18.91-8.582.574-2.537.46-7.328.46-11.212h-.001z" />
              <path d="M7.347 8.04v5.292h2.76s.138 0 .138-.137v-5.43s0-.137-.138-.137H7.347s-.138 0-.138.137v.275h.138zm4.144 0v5.292h2.76s.138 0 .138-.137v-5.43s0-.137-.138-.137h-2.76s-.138 0-.138.137v.275h.138zm4.144 0v5.292h2.76s.138 0 .138-.137v-5.43s0-.137-.138-.137h-2.76s-.138 0-.138.137v.275h.138z" />
            </svg>
          </Link>
          <Link href="/code-of-conduct" className="hover:text-gray-300" aria-label="Code of Conduct">
            <Code size={20} />
          </Link>
          <Link href="/feed" className="hover:text-gray-300" aria-label="RSS Feed">
            <Rss size={20} />
          </Link>
        </div>
        <div className="text-center text-sm">
          <p>© 2025 TechSides Conference. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}