import React, { useContext } from 'react'
import { MenuContext } from './MenuContext'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)
  const { t, i18n } = useTranslation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="absolute w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="w-14 h-14">
            <img src={`${import.meta.env.BASE_URL}img/z6808157182190_8d7932ca995c8142f41c2469a0cc1874-removebg-preview.png`} alt="website logo" className="w-full h-full object-cover rounded-full" />
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-2 mr-4">
            <button
              onClick={() => i18n.changeLanguage('vi')}
              className={`flex items-center px-3 py-1.5 rounded-full border transition-all duration-200 shadow-sm text-sm font-medium
                ${i18n.language === 'vi' ? 'bg-custom-green text-white border-custom-green shadow-md scale-105' : 'bg-white text-custom-gray border-gray-300 hover:bg-gray-100'}
              `}
            >
              <span role="img" aria-label="Vietnam flag" className="mr-1">🇻🇳</span> Tiếng Việt
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`flex items-center px-3 py-1.5 rounded-full border transition-all duration-200 shadow-sm text-sm font-medium
                ${i18n.language === 'en' ? 'bg-custom-green text-white border-custom-green shadow-md scale-105' : 'bg-white text-custom-gray border-gray-300 hover:bg-gray-100'}
              `}
            >
              <span role="img" aria-label="English flag" className="mr-1">🇺🇸</span> English
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('things')}
                className="text-custom-gray font-light hover:text-custom-green transition-all duration-300"
              >
                {t('skills')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-custom-gray font-light hover:text-custom-green transition-all duration-300"
              >
                {t('experience')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('works')}
                className="text-custom-gray font-light hover:text-custom-green transition-all duration-300"
              >
                {t('projects')}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('footer')}
                className="btn-primary"
              >
                {t('contact')}
              </button>
            </li>
          </ul>

          {/* Mobile Navigation */}
          <ul className={`lg:hidden fixed top-0 left-0 w-3/5 h-full bg-custom-gray z-50 transition-all duration-300 ${isMenuOpen ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'
            }`}>
            <li className="mt-14 mx-14">
              <button
                onClick={() => scrollToSection('things')}
                className="block text-white font-light hover:text-custom-green transition-all duration-300"
              >
                {t('skills')}
              </button>
            </li>
            <li className="mt-14 mx-14">
              <button
                onClick={() => scrollToSection('experience')}
                className="block text-white font-light hover:text-custom-green transition-all duration-300"
              >
                {t('experience')}
              </button>
            </li>
            <li className="mt-14 mx-14">
              <button
                onClick={() => scrollToSection('works')}
                className="block text-white font-light hover:text-custom-green transition-all duration-300"
              >
                {t('projects')}
              </button>
            </li>
            <li className="mt-14 mx-11">
              <button
                onClick={() => scrollToSection('footer')}
                className="btn-secondary"
              >
                {t('contact')}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <div
            className="lg:hidden flex justify-center items-center w-20 h-20 cursor-pointer transition-all duration-300 z-50"
            onClick={toggleMenu}
          >
            <div className={`w-11 h-1.5 bg-custom-gray rounded-md transition-all duration-300 relative ${isMenuOpen ? 'transform translate-x-12 bg-transparent' : ''
              }`}>
              <div className={`absolute w-11 h-1.5 bg-custom-gray rounded-md transition-all duration-300 ${isMenuOpen ? 'transform rotate-45 translate-x-[-48px] -translate-y-0' : 'transform -translate-y-3'
                }`}></div>
              <div className={`absolute w-11 h-1.5 bg-custom-gray rounded-md transition-all duration-300 ${isMenuOpen ? 'transform -rotate-45 translate-x-[-48px] translate-y-0' : 'transform translate-y-3'
                }`}></div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header 