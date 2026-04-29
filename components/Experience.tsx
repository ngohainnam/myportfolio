/* eslint-disable @next/next/no-img-element */
import { workExperience } from '@/data'

const Experience = () => {
  return (
    <div className="py-20 bg-background" id="experience">
      <h1 className="heading">
        My{' '}
        <span className="text-blue">experience</span>
      </h1>

      <div className="mt-12 max-w-4xl mx-auto flex flex-col gap-0">
        {workExperience.map((item, i) => (
          <div
            key={i}
            className="group flex flex-col sm:flex-row gap-2 sm:gap-8 px-6 py-5 border-b dark:border-white/10 border-black/10 hover:dark:bg-white/3 hover:bg-black/2 transition-colors duration-200"
          >
            {/* Year */}
            <div className="sm:w-36 shrink-0 pt-0.5">
              <span className="text-xs font-semibold tracking-widest uppercase dark:text-white/90 text-black/90">
                {item.year}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                <div>
                  <h3 className="text-base font-bold dark:text-white text-black">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-blue mt-0.5">{item.org}</p>
                  {item.meta && (
                    <span className="text-xs dark:text-white/90 text-black/90">
                      {item.meta}
                    </span>
                  )}
                </div>
                {item.logo && (
                  <img
                    src={item.logo}
                    alt={item.org}
                    className={[
                      'h-8 w-auto object-contain shrink-0',
                      item.invertLight ? 'invert' : '',
                      item.invertDark ? 'dark:invert' : 'dark:invert-0',
                    ].join(' ')}
                  />
                )}
              </div>
              <p className="text-sm dark:text-white/90 text-black/90 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
