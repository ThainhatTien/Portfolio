import React, { useContext } from 'react'
import { MenuContext } from './MenuContext'

const MobileOverlay = () => {
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext)

  const handleOverlayClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div 
      id="overlay" 
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 z-40 ${isMenuOpen ? 'block' : 'hidden'}`}
      onClick={handleOverlayClick}
    />
  )
}

export default MobileOverlay 