import Link from 'next/link'

export default function FooterSection() {
  return (
    <div className='bg-[#1a252e] text-white py-16'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='flex lg:justify-center pb-12 lg:pb-0'>
              <Link href='/'>
                <img src='/images/logo.png' alt='' />
              </Link>
            </div>
          </div>
          <div className='col-lg-5'>
            <div className='h-full flex items-end lg:justify-center pb-12 lg:pb-0'>
              <div>
                <div className='pb-2 mb-2 border-b border-accents_7'>Quick Links</div>
                <ul className='flex'>
                  <li className='pr-5 text-sm lg:text-base last:pr-0 after:content-["/"] last:after:content-none after:pl-2 md:after:pl-5'>
                    <Link href='/gallery'>Gallery</Link>
                  </li>
                  <li className='pr-5 text-sm lg:text-base last:pr-0 after:content-["/"] last:after:content-none after:pl-2 md:after:pl-5'>
                    <Link href='/news/category/latest-news'>Latest News</Link>
                  </li>
                  <li className='pr-5 text-sm lg:text-base last:pr-0 after:content-["/"] last:after:content-none after:pl-2 md:after:pl-5'>
                    <Link href='/about'>About Us</Link>
                  </li>
                  <li className='pr-5 text-sm lg:text-base last:pr-0 after:content-["/"] last:after:content-none after:pl-2 md:after:pl-5'>
                    <Link href='/contact'>Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='h-full flex items-end md:justify-center'>
              <div className='w-full'>
                <div className='pb-2 mb-2 border-b border-accents_7'>Follow Us</div>
                <div className='flex flex-col justify-end w-full h-full'>
                  <ul className='flex items-baseline justify-start'>
                    <li className='mr-[30px] last:mr-0'>
                      <a
                        href='https://www.facebook.com/Arjsocialfoundation'
                        target='_blank'
                        rel='noreferrer'
                        className='text-sm'
                      >
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li className='mr-[30px] last:mr-0'>
                      <a
                        href='https://twitter.com/Arjorganization'
                        target='_blank'
                        rel='noreferrer'
                        className='text-sm'
                      >
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li className='mr-[30px] last:mr-0'>
                      <a
                        href='https://instagram.com/arj_social_organization'
                        target='_blank'
                        rel='noreferrer'
                        className='text-sm'
                      >
                        <i className='fab fa-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
