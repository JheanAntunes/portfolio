import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Menu from '../menu'
import { ModeToggle } from '../mode-toggle'

const Header = () => {
  return (
    <header className="container grid h-14 grid-cols-[1fr_1px_1fr] items-center border-b border-b-neutral-500">
      <div>
        <span>JheanAntunesLopes@gmail.com</span>
      </div>
      <div className="h-full bg-neutral-500 dark:bg-neutral-50">
        {/* decorator */}
      </div>
      <nav className="flex justify-between">
        <div className="pl-8">
          <ModeToggle />
        </div>
        <div className="flex">
          <Link href="#" className="block py-2 pl-2 pr-[10px]">
            <LinkedInLogoIcon width={20} height={20} />
          </Link>
          <Link href="#" className="block py-2 pl-[10px] pr-2">
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
