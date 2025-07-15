import React from 'react'

const skillIcons = {
  Backend: (
    <svg className="w-6 h-6 text-custom-green inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9-5-9-5-9 5 9 5z" /><path d="M12 12V4l9 5-9 5-9-5 9-5v8z" /></svg>
  ),
  Frontend: (
    <svg className="w-6 h-6 text-custom-green inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M2 7h20" /></svg>
  ),
  Database: (
    <svg className="w-6 h-6 text-custom-green inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" /></svg>
  ),
  WordPress: (
    <svg className="w-6 h-6 text-custom-green inline-block mr-2" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path fill="#fff" d="M12 4a8 8 0 0 0-7.47 10.94l3.34-9.16A8.01 8.01 0 0 1 12 4zm0 16a8 8 0 0 0 7.47-10.94l-3.34 9.16A8.01 8.01 0 0 1 12 20z" /></svg>
  ),
  DevOps: (
    <svg className="w-6 h-6 text-custom-green inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
  ),
  Testing: (
    <svg className="w-6 h-6 text-custom-green inline-block mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><path d="M8 11h8M8 15h6" /></svg>
  ),
}

const miniSkillIcons = {
  Java: <svg className="w-4 h-4 text-orange-500 inline-block mr-1" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /><path fill="currentColor" d="M12 7c-1.1 0-2 .9-2 2h2v2h-2v2h2v2h-2c0 1.1.9 2 2 2s2-.9 2-2h-2v-2h2v-2h-2V9h2c0-1.1-.9-2-2-2z" /></svg>,
  'Spring Boot': <svg className="w-4 h-4 text-green-600 inline-block mr-1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6DB33F" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">SB</text></svg>,
  'RESTful API': <svg className="w-4 h-4 text-blue-500 inline-block mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="10" x="3" y="7" rx="2" /><path d="M7 7v10" /></svg>,
  'Node.js': <svg className="w-4 h-4 text-green-700 inline-block mr-1" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#8CC84B" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">N</text></svg>,
  PHP: <svg className="w-4 h-4 text-indigo-600 inline-block mr-1" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="8" fill="#777BB4" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">PHP</text></svg>,
  ReactJS: <svg className="w-4 h-4 text-sky-500 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="2" /><g stroke="currentColor" strokeWidth="1.5" fill="none"><ellipse rx="10" ry="4.5" cx="12" cy="12" /><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(60 12 12)" /><ellipse rx="10" ry="4.5" cx="12" cy="12" transform="rotate(120 12 12)" /></g></svg>,
  AngularJS: <svg className="w-4 h-4 text-red-600 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><polygon points="12,2 2,7 12,22 22,7" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">A</text></svg>,
  HTML5: <svg className="w-4 h-4 text-orange-600 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3l1.89 17.03L12 21l7.11-0.97L21 3H3zm15.09 2l-1.2 13.45L12 18.77l-4.89-0.32L6.91 5h11.18z" /></svg>,
  CSS: <svg className="w-4 h-4 text-blue-600 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3l1.89 17.03L12 21l7.11-0.97L21 3H3zm15.09 2l-1.2 13.45L12 18.77l-4.89-0.32L6.91 5h11.18z" /></svg>,
  Bootstrap: <svg className="w-4 h-4 text-purple-600 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">B</text></svg>,
  Tailwind: <svg className="w-4 h-4 text-sky-400 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M3 15s1-6 9-6 9 6 9 6" /><path d="M3 15s1 6 9 6 9-6 9-6" /></svg>,
  'SQL Server': <svg className="w-4 h-4 text-red-500 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="8" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">SQL</text></svg>,
  MySQL: <svg className="w-4 h-4 text-blue-400 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="8" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">My</text></svg>,
  MongoDB: <svg className="w-4 h-4 text-green-700 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="8" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">MG</text></svg>,
  Elementor: <svg className="w-4 h-4 text-pink-500 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">E</text></svg>,
  Flatsome: <svg className="w-4 h-4 text-blue-300 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">F</text></svg>,
  'Beaver Builder': <svg className="w-4 h-4 text-yellow-600 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">BB</text></svg>,
  'Custom Plugin/Theme': <svg className="w-4 h-4 text-gray-500 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">C</text></svg>,
  Git: <svg className="w-4 h-4 text-orange-600 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">G</text></svg>,
  GitHub: <svg className="w-4 h-4 text-black inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">GH</text></svg>,
  GitLab: <svg className="w-4 h-4 text-orange-500 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">GL</text></svg>,
  'JUnit 5': <svg className="w-4 h-4 text-green-800 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">J5</text></svg>,
  TestNG: <svg className="w-4 h-4 text-yellow-500 inline-block mr-1" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#fff">NG</text></svg>,
}

const defaultMiniIcon = <svg className="w-3 h-3 text-custom-green inline-block mr-1" fill="currentColor" viewBox="0 0 20 20"><circle cx="10" cy="10" r="10" /></svg>;

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Web Developer",
      company: "Puramu",
      period: "02/2025 - Hiện tại",
      description: "Thiết kế & phát triển nhiều website thương mại điện tử/giới thiệu dịch vụ trên WordPress. Xây dựng plugin tùy chỉnh (tích hợp thanh toán, API bên thứ ba, dashboard quản trị). Tối ưu SEO & hiệu suất."
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Bizibusiness",
      period: "10/2024- 12/2014",
      description: "Tham gia dự án nội bộ, sử dụng plugin Beaver Builder để tạo landing page."
    }
  ]

  const techSkills = [
    {
      category: "Backend",
      skills: ["Java", "Spring Boot", "RESTful API", "Node.js", "PHP"]
    },
    {
      category: "Frontend",
      skills: ["ReactJS", "AngularJS", "HTML5", "CSS", "Bootstrap", "Tailwind"]
    },
    {
      category: "Database",
      skills: ["SQL Server", "MySQL", "MongoDB"]
    },
    {
      category: "WordPress",
      skills: ["Elementor", "Flatsome", "Beaver Builder", "Custom Plugin/Theme"]
    },
    {
      category: "DevOps",
      skills: ["Git", "GitHub", "GitLab"]
    },
    {
      category: "Testing",
      skills: ["JUnit 5", "TestNG"]
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4">
        {/* Goal Section */}
        <div className="mb-20 text-center" data-aos="fade-up">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-medium text-custom-gray mb-4">
              🎯 Mục tiêu nghề nghiệp
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              Mục tiêu của tôi là phát triển sự nghiệp trở thành một <strong>Full‑stack Engineer</strong> chuyên sâu, có khả năng tham gia và đóng góp hiệu quả trong các dự án quy mô lớn. Tôi mong muốn được phát triển sâu hơn trong mảng xây dựng website thực tế, bao gồm cả lập trình giao diện và backend, đặc biệt là trên nền tảng WordPress và các công nghệ web hiện đại. Luôn chủ động học hỏi, tôi cam kết mang lại giá trị bền vững cho sản phẩm và đội ngũ phát triển.
            </p>
          </div>
        </div>
        {/* Experience Section */}
        <div className="mb-20">
          <h2 className="text-center text-custom-gray text-3xl mb-12">
            Kinh nghiệm làm việc
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-custom-gray mb-1">{exp.title}</h3>
                    <p className="text-custom-green font-medium">{exp.company}</p>
                  </div>
                  <span className="text-sm text-gray-500 mt-2 lg:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Skills Section */}
        <div>
          <h2 className="text-center text-custom-gray text-3xl mb-12">
            Công nghệ & Kỹ năng
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSkills.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300" data-aos="zoom-in" data-aos-delay={index * 100}>
                <h3 className="text-lg font-medium text-custom-gray mb-4 border-b border-gray-200 pb-2 flex items-center">
                  {skillIcons[category.category]}
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-custom-green-light text-custom-gray text-sm rounded-full hover:bg-custom-green hover:text-white transition-colors duration-300 flex items-center"
                      data-aos="fade-up"
                      data-aos-delay={skillIndex * 50}
                    >
                      {miniSkillIcons[skill] || defaultMiniIcon}
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 