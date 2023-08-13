import Link from 'next/link'

import Layout from '../components/layout'
import OurVision from '@/components/our-vision'

export default function About() {
  return (
    <>
      <section className='bg-gradient__banner h-[535px] min-h-[350px] max-h-[400px] flex items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-white'>
                <span className='inline-block text-xl sm:text-2xl md:text-5xl lg;text-7xl uppercase font-bold font-lato'>
                  about us
                </span>
                <div className='text-2xl font-normal mt-2'>Together we can make a difference</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-accents_1 pt-16 mb-20'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='pb-10'>
                <h1 className='mb-4 text-xl font-bold'>Welcome to Arj Social Organization</h1>
                <p className='pb-8 text-2xl text-accents_8 font-light'>
                  In the heart of Afghanistan&apos;s struggle, ASO envisions a world where every
                  individual can thrive, despite challenging circumstances.
                </p>
                <p className='text-base text-accents_6 font-light'>
                  We are dedicated to empowering lives and fostering sustainable development in
                  Afghanistan.
                </p>
              </div>
            </div>
            <div className='offset-lg-1 col-lg-5'>
              <div className='w-full h-full flex items-end'>
                <img
                  className='rounded-xl block -mb-4 w-full h-full object-cover'
                  src='/images/section-about-first.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='relative bg-[url("/images/handshake.svg")] bg-no-repeat bg-[length:auto_100px] bg-[position:top_center] max-w-[1230px] mt-40 mx-auto mb-12 px-32 py-[5%]'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-center'>
                <h2 className='text-2xl font-bold pt-12 pb-6'>What Sets Us Apart</h2>
                <p className='text-accents_7'>
                  At Arj, our unwavering commitment to empowerment sets us apart. We collaborate
                  with local communities, leveraging expertise to empower individuals as change
                  agents. Through tailored programs, we address specific needs, ensuring sustainable
                  progress and growth in Afghanistan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gradient__section-our-impact text-white'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='h-full w-full flex items-center'>
                <img src='/images/our-impact.jpg' className='border-8' alt='' />
              </div>
            </div>
            <div className='col-md-6'>
              <div className='flex flex-col items-center justify-center h-full text-left ml-16 pt-16 pb-24'>
                <div className='block w-full uppercase tracking-widest mb-6'>
                  donate to save lives
                </div>
                <h2 className='text-3xl mb-5 min-w-full'>Our Impact</h2>
                <div>
                  <p className='pb-6 last:pb-0 text-accents_3'>
                    Arj Social Organization has made a significant impact in the lives of countless
                    individuals and communities in Afghanistan. Our education and skill-building
                    programs have witnessed remarkable transformations, empowering children and
                    adults to rise above poverty and create better lives.
                  </p>
                  <p className='pb-6 last:pb-0 text-accents_3'>
                    During crises, our emergency response efforts provide critical aid, offering
                    hope and support to those facing dire circumstances. We take pride in ensuring
                    access to clean water and healthcare, reducing waterborne diseases and improving
                    well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-image__section-our-mission'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div className='py-28 pr-14'>
                <h2 className='text-3xl uppercase tracking-wider mb-6'>
                  Our <span className='font-bold'>Mission</span>
                </h2>
                <div className='text-accents_7'>
                  <p className='pb-6 last:pb-0 text-xl tracking-widest'>
                    Our mission is to uplift Afghan communities by addressing interconnected
                    challenges.
                  </p>
                  <p className='pb-6 last:pb-0'>
                    From fighting poverty and providing quality education to protecting the
                    environment and ensuring access to basic healthcare and clean water, our
                    multifaceted approach aims to create lasting and meaningful impact in the lives
                    of those we serve.
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
            <div className='col-lg-6'></div>
          </div>
        </div>
      </section>
      <OurVision />
    </>
  )
}

About.getLayout = (page) => {
  return (
    <Layout
      title='About Us - Arj Social Organization'
      page='about'
      canonical='https://arj.org.af/about/'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
