import React from 'react'

const Banner = () => {
  return (
    <section id="banner" className="relative h-screen flex items-center" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Background Image */}
        <div className="absolute top-0 right-0 -z-10 w-full lg:w-3/5" data-aos="fade-left">
          <img
            src="/img/banner-img.png"
            alt="illustration of women"
            className="w-full h-auto"
          />
        </div>

        {/* Content */}
        <div className="max-w-md mx-auto text-center lg:text-left lg:mx-0 lg:pt-20 pt-16">
          <h1 className="text-4xl text-custom-gray font-medium mb-4">
            Hello, I'm Thái Nhật Tiến
          </h1>
          <p className="font-light leading-8 mb-6 text-custom-gray">
            Tôi là lập trình viên web, chuyên thiết kế và phát triển website trên nền tảng WordPress. Thành thạo sử dụng các công cụ như Elementor, Flatsome, và Beaver Builder, tôi có khả năng xây dựng giao diện tùy chỉnh, phát triển plugin theo yêu cầu và tối ưu hóa hiệu năng trang web.
            Bên cạnh đó, tôi cũng có nền tảng kỹ thuật vững chắc với Java / Spring Boot (backend) và ReactJS / AngularJS (frontend), sẵn sàng đảm nhận các dự án full-stack khi cần. Tôi luôn ưu tiên kiến trúc rõ ràng, mã nguồn dễ bảo trì và trải nghiệm người dùng mượt mà.</p>
          <button
            onClick={() => {
              const element = document.getElementById('experience')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary mb-12"
          >
            Tìm hiểu thêm
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
              href="https://linkedin.com/in/thainhattien"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-gray hover:text-custom-green-light transition-all duration-300"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="mailto:thainhattien@gmail.com"
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