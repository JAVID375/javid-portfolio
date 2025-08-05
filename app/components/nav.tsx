import Link from 'next/link'

export default function Nav() {
  return (
    <header className="mb-16">
      <nav className="flex justify-between items-center py-10">
        <Link href="/" className="text-2xl font-bold text-black dark:text-white">
          Shaik Javid
        </Link>
        <div className="space-x-4 text-neutral-600 dark:text-neutral-300 text-sm">
          <Link href="#about" className="hover:underline">
            About
          </Link>
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
