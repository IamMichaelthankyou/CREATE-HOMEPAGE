"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function Footer({ className = "" }: { className?: string }) {
  return (
  <footer className={`bg-black backdrop-blur-sm text-white relative z-10 ${className}`}>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:py-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">© 2025 CREATE. All Rights Reserved.</div>
          <nav className="w-full md:w-auto">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-8 text-sm">
              <FooterNavItem href="/MainPage" text="TOP" />
              <FooterNavItem href="/AboutUsPage" text="ABOUT" />
              <FooterNavItem href="/ProjectsPage" text="PROJECTS" />
              <FooterNavItem href="/TechPage" text="TECH" />
              <FooterNavItem href="/Fund&SponsorPage" text="FUND&SPONSORS" />
              <FooterNavItem href="/ContactPage" text="CONTACT" />
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

function FooterNavItem({ href, text }: { href: string; text: string }) {
  return (
    <li>
      <Link href={href} className="hover:text-gray-300 font-mono transition-colors">
        {text}
      </Link>
    </li>
  )
}

