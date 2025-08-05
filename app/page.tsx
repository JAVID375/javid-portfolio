

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-10">

      {/* ABOUT SECTION */}
      <img
  src="/javid.jpg"
  alt="Shaik Javid"
  className="w-32 h-32 rounded-full object-cover shadow-md border border-gray-300 dark:border-neutral-700"
/>

      <section id="about" className="mb-12 scroll-mt-20">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          About Me
        </h1>
        <p className="mb-4">
          I'm <strong>Shaik Javid</strong>, a final-year Computer Science Engineering student passionate about full-stack development and real-world problem solving. I've completed multiple internships and enjoy working with technologies like React, Node.js, C, Java, Python, and Oracle DB.
        </p>
        <p className="mb-4">
          I also actively engage in technical blogging, attend webinars, and constantly strive to improve my DSA, DevOps, and project-building skills. I love solving problems and exploring new technologies that can make a real difference.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="mb-12 scroll-mt-20">
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Food Sharing System:</strong> MERN stack app for reducing food waste by connecting donors and seekers.
          </li>
          <li>
            <strong>Augmented Reality Visualizer:</strong> Mini-project for visualizing educational concepts using AR.
          </li>
        </ul>
      </section>

      {/* BLOG POSTS SECTION */}
      

      {/* CONTACT SECTION */}
      <section id="contact" className="mb-12 scroll-mt-20">
        <h2 className="text-xl font-semibold mb-4">Contact</h2>
        <p className="mb-2">
          Email: <a href="mailto:shaikjavid71592@gmail.com" className="text-blue-600 underline">shaikjavid71592@gmail.com</a>
        </p>
        <p>
          LinkedIn: <a href="https://www.linkedin.com/in/shaik-javid-34758b2b2/" className="text-blue-600 underline" target="_blank">linkedin.com/in/shaik-javid</a>
        </p>
      </section>

    </main>
  )
}
