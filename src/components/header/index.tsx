import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Menu from '../menu'
import { ModeToggle } from '../mode-toggle'

const Header = () => {
  return (
    <header
      id="im"
      className="container flex h-14 grid-cols-1 items-center justify-between border-b border-b-neutral-500 sm:grid sm:grid-cols-[1fr_1px_1fr] sm:justify-start"
    >
      <div className="flex justify-between">
        <span className="text-sm sm:hidden">(21) 96829-4324</span>
        <span className="hidden text-base lg:block">
          JheanAntunesLopes@gmail.com
        </span>
        <span className="hidden text-base sm:block sm:pr-8">
          (21) 96829-4324
        </span>
      </div>
      <div className="hidden h-full bg-neutral-500 sm:block">
        {/* decorator */}
      </div>
      <nav className="flex justify-between">
        <div className="pl-8">
          <ModeToggle />
        </div>
        <div className="flex">
          <Link
            href="https://www.linkedin.com/in/jhean-antunes-lopes/"
            className="block py-2 pl-2 pr-[10px]"
          >
            <LinkedInLogoIcon width={20} height={20} />
          </Link>
          <Link
            href="https://github.com/JheanAntunes"
            className="block py-2 pl-[10px] pr-2"
          >
            <GitHubLogoIcon width={20} height={20} />
          </Link>
        </div>
        <div>
          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
