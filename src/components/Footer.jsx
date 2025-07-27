import React from 'react'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer id="footer" className="overflow-hidden relative h-screen flex items-center" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 -translate-x-2/5 -z-10" data-aos="fade-right">
          <img src={`${import.meta.env.BASE_URL}img/things-dec-l.png`} alt={t('footer_dec_l_alt')} />
        </div>

        {/* Background Image */}
        <div className="absolute top-0 lg:-top-[15%] right-0 translate-x-1/4 lg:translate-x-1/3 -z-10 w-full lg:w-3/5" data-aos="fade-left">
          <img
            src={`${import.meta.env.BASE_URL}img/footer-img.png`}
            alt={t('footer_bg_alt')}
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0">
          <h1 className="text-3xl lg:text-4xl text-custom-gray font-medium mb-8">
            {t('footer_heading')}
          </h1>

          {/* Contact Information */}
          <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0 mb-8">
            <a
              href="tel:+84976745901"
              className="flex items-center justify-center lg:justify-start space-x-3 text-custom-gray hover:text-custom-green transition-all duration-300"
            >
              <i className="fas fa-phone-alt"></i>
              <span>+84 976 745 901</span>
            </a>
            <a
              href="mailto:thainhattien3011@gmail.com"
              className="flex items-center justify-center lg:justify-start space-x-3 text-custom-gray hover:text-custom-green transition-all duration-300"
            >
              <i className="fas fa-envelope"></i>
              <span>thainhattien3011@gmail.com</span>
            </a>
          </div>

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
    </footer>
  )
}

export default Footer 