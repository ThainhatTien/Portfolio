import React from 'react'
import { useTranslation } from 'react-i18next'

const Things = () => {
  const { t } = useTranslation()
  const skills = [
    {
      id: 1,
      image: `${import.meta.env.BASE_URL}img/things-item-1.png`,
      title: t('frontend_title'),
      description: t('frontend_desc')
    },
    {
      id: 2,
      image: `${import.meta.env.BASE_URL}img/things-item-2.png`,
      title: t('backend_title'),
      description: t('backend_desc')
    },
    {
      id: 3,
      image: `${import.meta.env.BASE_URL}img/things-item-3.png`,
      title: t('wordpress_title'),
      description: t('wordpress_desc')
    }
  ]

  return (
    <section id="things" className="relative overflow-hidden mt-60" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 -translate-x-3/5 -z-10" data-aos="fade-right">
          <img src={`${import.meta.env.BASE_URL}img/things-dec-l.png`} alt={t('things_dec_l_alt')} />
        </div>
        <div className="absolute bottom-[15%] right-0 translate-x-3/5 -z-10" data-aos="fade-left">
          <img src={`${import.meta.env.BASE_URL}img/things-dec-r.png`} alt={t('things_dec_r_alt')} />
        </div>

        {/* Section Title */}
        <h2 className="text-center text-custom-gray text-3xl mb-12">
          {t('things_title')}
        </h2>

        {/* Skills Items */}
        <div className="space-y-12 lg:space-y-0">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className={`flex flex-col lg:flex-row items-center justify-between my-12 lg:my-0 ${
                index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
              }`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 100}
            >
              {/* Image */}
              <div className="w-full lg:w-2/5 mb-16 lg:mb-0">
                <img 
                  src={skill.image} 
                  alt={skill.title}
                  className="w-full h-auto"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-2/5 text-center lg:text-left">
                <h3 className="text-2xl text-custom-gray font-medium mb-4">
                  {skill.title}
                </h3>
                <p className="font-light leading-8 text-custom-gray max-w-sm mx-auto lg:mx-0 lg:max-w-none">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Things 