import Link from 'next/link'

import ResponsiveHeader from './ResponsiveHeader'

export default function HeaderSection({ activePage }) {
  return (
    <>
    <div className='block lg:hidden'>
        <ResponsiveHeader activePage={activePage} />
    </div>
    <header className='hidden lg:block shadow-navbar'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='h-full flex items-center'>
              <Link href='/'>
                <img src='/images/logo.png' alt='' />
              </Link>
            </div>
          </div>
          <div className='col-lg-9'>
            <nav className='flex justify-end'>
              <ul className='flex items-center'>
                <li className='pr-6 last:pr-0 py-10'>
                  <Link
                    href='/'
                    className={activePage === 'home' ? 'text-primary' : 'hover:text-primary'}
                  >
                    Home
                  </Link>
                </li>
                <li className='pr-6 last:pr-0 py-10 group'>
                  <Link href='#' className='relative'>
                    <div className='flex items-center justify-center'>
                      <span
                        className={`mr-1 ${
                          activePage === 'education' ||
                          activePage === 'emergency-response' ||
                          activePage === 'health' ||
                          activePage === 'water' ||
                          activePage === 'sport' ||
                          activePage === 'environment'
                            ? 'text-primary'
                            : 'hover:text-primary'
                        }`}
                      >
                        Our Work
                      </span>
                      <i className='fas fa-angle-down'></i>
                    </div>
                    <div className='hidden absolute -left-[204px] top-0 z-10 p-8 mt-16 w-[25rem] leading-relaxed text-accents_0 shadow-2xl bg-accents_9 group-hover:block group-hover:opacity-100'>
                      <div className=''>
                        <div className='text-accents_6 mb-3'>Our Work</div>
                      </div>
                      <div className='row pt-3'>
                        <div className='col-12'>
                          <div className=''>
                            <ul className='text-medium normal-case'>
                              <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                <Link
                                  href='/education'
                                  className={
                                    activePage === 'education'
                                      ? 'text-primary'
                                      : 'hover:text-primary'
                                  }
                                >
                                  Education
                                </Link>
                              </li>
                              <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                <Link
                                  href='/emergency-response'
                                  className={
                                    activePage === 'emergency-reponse'
                                      ? 'text-primary'
                                      : 'hover:text-primary'
                                  }
                                >
                                  Emergency Response
                                </Link>
                              </li>
                              <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                <Link
                                  href='/health'
                                  className={
                                    activePage === 'health' ? 'text-primary' : 'hover:text-primary'
                                  }
                                >
                                  Health
                                </Link>
                              </li>
                              <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                <Link
                                  href='/water'
                                  className={
                                    activePage === 'water' ? 'text-primary' : 'hover:text-primary'
                                  }
                                >
                                  Water
                                </Link>
                              </li>
                              <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                <Link
                                  href='/sport'
                                  className={
                                    activePage === 'sport' ? 'text-primary' : 'hover:text-primary'
                                  }
                                >
                                  Sport
                                </Link>
                              </li>
                              <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                <Link
                                  href='/environment'
                                  className={
                                    activePage === 'environment'
                                      ? 'text-primary'
                                      : 'hover:text-primary'
                                  }
                                >
                                  Environment
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className='pr-6 last:pr-0 py-10'>
                  <Link
                    href='/gallery'
                    className={activePage === 'galley' ? 'text-primary' : 'hover:text-primary'}
                  >
                    Gallery
                  </Link>
                </li>
                <li className='pr-6 last:pr-0 py-10 group'>
                  <Link href='#' className='relative'>
                    <div className='flex items-center justify-center'>
                      <span
                        className={`mr-1 ${
                          activePage === 'latest-news' || activePage === 'video-library'
                            ? 'text-primary'
                            : 'hover:text-primary'
                        }`}
                      >
                        News & Stories
                      </span>
                      <i className='fas fa-angle-down'></i>
                    </div>
                    <div className='hidden absolute -left-[204px] top-0 z-10 p-8 mt-16 w-[25rem] leading-relaxed text-accents_0 shadow-2xl bg-accents_9 group-hover:block group-hover:opacity-100'>
                      <div className=''>
                        <div className='text-accents_6 mb-3'>News & Stories</div>
                      </div>
                      <div className='row pt-3'>
                        <div className='col-12'>
                          <div className=''>
                            <ul className='text-medium normal-case'>
                              <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                <Link
                                  href='/news/category/latest-news'
                                  className={
                                    activePage === 'latest-news'
                                      ? 'text-primary'
                                      : 'hover:text-primary'
                                  }
                                >
                                  Latest News
                                </Link>
                              </li>
                              <li className='border-b border-accents_7 last:border-b-0 py-4'>
                                <Link
                                  href='/faqs/category/video-library'
                                  className={
                                    activePage === 'video-library'
                                      ? 'text-primary'
                                      : 'hover:text-primary'
                                  }
                                >
                                  Video Library
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
                <li className='pr-6 last:pr-0 py-10'>
                  <Link
                    href='/about'
                    className={activePage === 'about' ? 'text-primary' : 'hover:text-primary'}
                  >
                    About Us
                  </Link>
                </li>
                <li className='pr-6 last:pr-0 py-10'>
                  <Link
                    href='/contact'
                    className={activePage === 'contact' ? 'text-primary' : 'hover:text-primary'}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className='ml-7 mb-1'>
                <a
                  href='https://gofund.me/aa9fdf48'
                  target='_blank'
                  className='block px-6 py-9 bg-primary'
                >
                  <span className='text-white text-xl font-bold tracking-wider'>Donate</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}
