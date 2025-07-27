import React from 'react'
import { useTranslation } from 'react-i18next'

const Works = () => {
  const { t } = useTranslation()

  const works = [
    {
      id: 1,
      image: 'https://xuongaokhoachcm.com/wp-content/uploads/2025/04/favicon-aokhoac-100x100.png',
      title: t('work1_title'),
      url: 'https://xuongaokhoachcm.com/',
      tech: 'WordPress • Custom Theme',
      desc: t('work1_desc')
    },
    {
      id: 2,
      image: 'https://lgservicehanoi.com/wp-content/uploads/2025/07/cropped-lg_small-removebg-preview-192x192.png',
      title: t('work2_title'),
      url: 'https://lgservicehanoi.com/',
      tech: 'WordPress • Flatsome',
      desc: t('work2_desc')
    },
    {
      id: 3,
      image: 'https://coidb.com/wp-content/uploads/2025/05/cropped-logo-ngang-32x32.png',
      title: t('work3_title'),
      url: 'https://coidb.com/',
      tech: 'WordPress • Elementor',
      desc: t('work3_desc')
    },
    {
      id: 4,
      image: 'https://batdongsanthailan.com/wp-content/uploads/2025/02/favicon-batdongsanthailan.png',
      title: t('work4_title'),
      url: 'https://batdongsanthailan.com/',
      tech: 'WordPress • Elementor',
      desc: t('work4_desc')
    },
    {
      id: 5,
      image: 'https://noithatnhomtoong.vn/wp-content/uploads/2025/05/favicon-modnest-100x100.png',
      title: t('work5_title'),
      url: 'https://noithatnhomtoong.vn/',
      tech: 'WordPress • Elementor',
      desc: t('work5_desc')
    },
    {
      id: 6,
      image: 'https://maitangthanhbinh.com/wp-content/uploads/2024/11/thanh-binh-favicon-100x100.png',
      title: t('work6_title'),
      url: 'https://maitangthanhbinh.com/',
      tech: 'WordPress • Flatsome',
      desc: t('work6_desc')
    },
    {
      id: 7,
      image: 'https://artlive.vn/wp-content/uploads/2023/07/cropped-favicon-32x32.png',
      title: t('work7_title'),
      url: 'https://artlive.vn/',
      tech: 'WordPress • Custom Theme',
      desc: t('work7_desc')
    },
    {
      id: 8,
      image: 'https://lusaconnect.com/wp-content/uploads/2025/03/Group-1000009819-100x100.png',
      title: t('work8_title'),
      url: 'https://lusaconnect.com/',
      tech: 'WordPress • Elementor',
      desc: t('work8_desc')
    },
    {
      id: 9,
      image: 'https://tuonglongpack.com/wp-content/uploads/2025/03/cropped-favicon-192x192.png',
      title: t('work9_title'),
      url: 'https://tuonglongpack.com/',
      tech: 'WordPress • Elementor',
      desc: t('work9_desc')
    },
  ]

  return (
    <section id="works" className="pt-40 relative overflow-hidden" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 -translate-x-3/5 -z-10" data-aos="fade-right">
          <img src={`${import.meta.env.BASE_URL}img/work-dec.png`} alt={t('work_dec_l_alt')} />
        </div>
        <div className="absolute bottom-[15%] right-0 translate-x-3/5 -z-10" data-aos="fade-left">
          <img src={`${import.meta.env.BASE_URL}img/work-dec.png`} alt={t('work_dec_r_alt')} />
        </div>

        {/* Section Title */}
        <h2 className="text-center text-custom-gray text-3xl mb-12 lg:mb-12">
          {t('works_title')}
        </h2>

        {/* Works Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
          {works.map((work, idx) => (
            <div key={work.id} className="w-full max-w-xs" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="relative group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                <a href={work.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-20 h-20 mx-auto mt-6 object-contain bg-white"
                    onError={e => { e.target.onerror = null; e.target.src = '/img/logo.svg' }}
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2 text-custom-gray group-hover:text-custom-green transition-colors duration-300">
                      {work.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2 min-h-[40px]">{work.desc}</p>
                    <div className="text-xs text-custom-green mb-2">{work.tech}</div>
                    <span className="inline-block mt-2 px-4 py-1 bg-custom-green text-white rounded-full text-xs group-hover:bg-custom-green-light transition-colors duration-300">
                      {t('view_website')}
                    </span>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works 