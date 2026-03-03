import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col mb-20 md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <i className="ri-github-line text-2xl"></i>
            </a>
            <span>Check out my repos</span>
          </div>
          <p className="font-medium tracking-wide">
            © 2025{" "}
            <span className="text-black dark:text-white">Ahmad Fauzan</span>.
            All rights reserved.
          </p>
        </footer>
    </>
  )
}

export default Footer
