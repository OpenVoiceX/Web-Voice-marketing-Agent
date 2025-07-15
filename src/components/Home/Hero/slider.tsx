import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Icon } from '@iconify/react'
import { AgentFeatures } from '@/app/api/data'

const AgentSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  }

  return (
    <div className="lg:-mt-16 mt-16">
      <Slider {...settings}>
        {AgentFeatures.map((item, index) => (
          <div key={index} className="pr-6">
            <div className="px-5 py-6 bg-dark_grey/80 rounded-xl">
              <div className="flex items-center gap-5">
                <div className={`${item.background} ${item.padding} rounded-full`}>
                  <Icon icon={item.icon} width={item.width} height={item.height} className="text-primary" />
                </div>
                <p className="text-white text-xs font-normal">
                  <span className="text-16 font-bold mr-2">{item.title}</span>
                  {item.short}
                </p>
              </div>
              <div className="flex justify-between mt-7">
                <div className="">
                  <p className="text-16 font-bold text-white mb-0 leading-none">
                    {item.status}
                  </p>
                </div>
                <div className="">
                  <span className="text-error text-xs">{item.mark}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default AgentSlider