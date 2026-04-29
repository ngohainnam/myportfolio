import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full mb-25 pb-10 md:mb-5 bg-background" id="contact">
        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
                Ready to take <span className="text-blue">your</span> digital presence to the next level?
            </h1>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light dark:text-white text-black">Copyright &copy; 2026 Kent. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
