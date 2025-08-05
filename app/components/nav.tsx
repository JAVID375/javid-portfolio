import Link from 'next/link'

export default function Nav() {
  return (
    <header className="mb-16">
      <nav className="flex justify-between items-center py-10">
        <Link href="/">
          <span className="text-2xl font-bold text-black dark:text-white">
            Shaik Javid
          </span>
        </Link>
        <div className="space-x-4 text-neutral-600 dark:text-neutral-300 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </nav>
    </header>
  )
}
