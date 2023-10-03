import React from 'react'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'

import Layout from '../../../components/layout'

function Icon({ id, open }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
    </svg>
  )
}

export default function VideoLibrary() {
  const [open, setOpen] = React.useState(1)
  const [alwaysOpen, setAlwaysOpen] = React.useState(true)

  const handleAlwaysOpen = () => setAlwaysOpen((cur) => !cur)
  const handleOpen = (value) => setOpen(open === value ? 0 : value)
  return (
    <>
      <section className='bg-gradient__video-lib-page h-[535px] min-h-[350px] max-h-[400px] flex items-center'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='text-white'>
                <span className='inline-block text-xl sm:text-2xl md:text-5xl lg;text-7xl uppercase font-bold font-lato'>
                  video library
                </span>
                <div className='text-xl md:text-2xl font-normal mt-2'>
                  Have a browse through our video library and check out what we've been up to.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-12 mb-10'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div>
                <Accordion
                  open={alwaysOpen}
                  className='mb-8 bg-accents_0 border border-blue-gray-100 px-0 md:px-4 py-8 md:py-3'
                  icon={<Icon id={1} open={open} />}
                >
                  <AccordionHeader
                    onClick={handleAlwaysOpen}
                    className={`text-base md:text-lg lg:text-xl px-3 md:px-8 border-b-0 transition-colors ${
                      open === 1 ? 'text-black' : ''
                    }`}
                  >
                    Drilling a water well and building a water reservoir for the Paktika
                    earthquake-affected people
                  </AccordionHeader>
                  <AccordionBody className='flex justify-center items-center py-8 md:py-16'>
                    <iframe
                      width='560'
                      height='315'
                      src='https://www.youtube.com/embed/xc119S_QN_U'
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowfullscreen
                    ></iframe>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 2}
                  className='mb-8 bg-accents_0 border border-blue-gray-100 px-0 md:px-4 py-8 md:py-3'
                  icon={<Icon id={2} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className={`text-base md:text-lg lg:text-xl px-3 md:px-8 border-b-0 transition-colors ${
                      open === 2 ? 'text-black' : ''
                    }`}
                  >
                    Arj Social Organization's initiative for holding tree-planting program in Kabul
                    City
                  </AccordionHeader>
                  <AccordionBody className='flex justify-center items-center py-8 md:py-16'>
                    <iframe
                      width='560'
                      height='315'
                      src='https://www.youtube.com/embed/Eoc6CcSCA2U'
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowfullscreen
                    ></iframe>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 3}
                  className='mb-8 bg-accents_0 border border-blue-gray-100 px-0 md:px-4 py-8 md:py-3'
                  icon={<Icon id={3} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className={`text-base md:text-lg lg:text-xl px-3 md:px-8 border-b-0 transition-colors ${
                      open === 3 ? 'text-black' : ''
                    }`}
                  >
                    Donating Essential Medicine to the CHC Clinic of Gayan District, Paktika
                    Province
                  </AccordionHeader>
                  <AccordionBody className='flex justify-center items-center py-8 md:py-16'>
                    <iframe
                      width='560'
                      height='315'
                      src='https://www.youtube.com/embed/pHDpC8ih4VA'
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowfullscreen
                    ></iframe>
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 4}
                  className='mb-8 bg-accents_0 border border-blue-gray-100 px-0 md:px-4 py-8 md:py-3'
                  icon={<Icon id={4} open={open} />}
                >
                  <AccordionHeader
                    onClick={() => handleOpen(4)}
                    className={`text-base md:text-lg lg:text-xl px-3 md:px-8 border-b-0 transition-colors ${
                      open === 4 ? 'text-black' : ''
                    }`}
                  >
                    Building House for Paktika Earthquake-Affected People
                  </AccordionHeader>
                  <AccordionBody className='flex justify-center items-center py-8 md:py-16'>
                    <iframe
                      width='560'
                      height='315'
                      src='https://www.youtube.com/embed/7L7WK7stvVI'
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                      allowfullscreen
                    ></iframe>
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

VideoLibrary.getLayout = (page) => {
  return (
    <Layout
      title='Watch Video Updates - Arj Social Organization'
      page='video-library'
      canonical='https://arj.org.af/faqs/category/video-library/'
      pageDescription=''
      jsonLD=''
    >
      {page}
    </Layout>
  )
}
