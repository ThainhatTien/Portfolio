import React from 'react'
import { useTranslation } from 'react-i18next'

const Banner = () => {
  const { t } = useTranslation()
  return (
    <section id="banner" className="relative h-screen flex items-center" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Background Image */}
        <div className="absolute top-0 right-0 -z-10 w-full lg:w-3/5" data-aos="fade-left">
          <img
            src={`${import.meta.env.BASE_URL}img/banner-img.png`}
            alt={t('banner_img_alt')}
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0 lg:pt-20 pt-16">
          <h1 className="text-4xl text-custom-gray font-medium mb-4">
            {t('banner_hello')}
          </h1>
          <p className="font-light leading-8 mb-6 text-custom-gray">
            {t('banner_desc')}
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('experience')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary mb-12"
          >
            {t('learn_more')}
          </button>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-11 text-2xl">
            <a
              href="https://github.com/thainhattien"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-gray hover:text-custom-green-light transition-all duration-300"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/th%C3%A1i-nh%E1%BA%ADt-ti%E1%BA%BFn-0486962a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-gray hover:text-custom-green-light transition-all duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:thainhattien3011@gmail.com"
              className="text-custom-gray hover:text-custom-green-light transition-all duration-300"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner 