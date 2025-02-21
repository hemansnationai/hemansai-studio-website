import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-12">About HemansAI</h1>

          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">AI Product & Service Studio</h3>
            <p className="text-lg leading-8 text-gray-600">
              HemansAI is committed to helping businesses and individuals with artificial intelligence solutions. We
              bring a structured and scalable approach to solving AI challenges. Whether you&apos;re an enterprise looking to
              streamline operations or a leader aiming to build AI expertise, we are your trusted partner on this
              journey.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Solving AI Challenges with AI Expertise</h3>
            <p className="text-lg leading-8 text-gray-600">
              At HemansAI, we offer a diverse range of AI-focused services and products from AI Engineering, Consulting,
              and Development to Education. We believe that AI has the power to transform industries and improve lives.
              Implementing AI requires the right tools, knowledge, and guidance. At HemansAI, we are passionate about
              bridging the gap between technology and real-world applications.
            </p>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Building an AI Ecosystem Since 2018</h3>
            <p className="text-lg leading-8 text-gray-600">
              HemansAI was started in 2018 by{" "}
              <Link
                href="https://www.linkedin.com/in/hemansnation/"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                Himanshu Ramchandani
              </Link>
              . At that time we were doing research and providing services in AI. From there we are continuously
              learning and building our way to create an ecosystem for AI-focused products and services. Be part of our
              mission to make AI accessible, scalable, and impactful for everyone, helping businesses stay ahead of the
              curve and individuals build meaningful skills for the future.
            </p>
          </section>

          <div className="mt-10 flex items-center justify-center gap-x-6 text-white">
            <Link
              href="/contact"
              className="rounded-md  text-white px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:border hover:border-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Contact Us
            </Link>
            <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
              Learn more about our services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
