import { upgradeData } from '@/app/api/data';
import Image from 'next/image';

const Upgrade = () => {
  return (
    <section className='md:py-40 py-20' id='upgrade'>
      <div className='container px-4'>
        <div className='grid lg:grid-cols-2 sm:gap-0 gap-10 items-center'>
          <div>
            <p className='text-primary sm:text-28 text-18 mb-3'>Upgrade</p>
            <h2 className='text-white sm:text-40 text-30 font-medium mb-5'>
              Elevate Your Voice Agent Experience
            </h2>
            <p className='text-muted/60 text-18 mb-7'>
              Enhance your voice agent with advanced features, robust security,
              and seamless mobile access, ensuring a decentralized and
              reliable solution.
            </p>
            <div className='grid sm:grid-cols-2 lg:w-70% text-nowrap sm:gap-10 gap-5'>
              {upgradeData.map((item, index) => (
                <div key={index} className='flex gap-5 items-center'>
                  <div className='bg-light_grey/45 p-1 rounded-full'>
                    <svg
                      width='20'
                      height='20'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z'
                        fill='#4B5EFC'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-18 text-muted/60'>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className=''>
              <Image
                src='/images/upgrade/image4.png'
                alt='Voice Agent Upgrade'
                width={625}
                height={580}
                sizes='(max-width: 768px) 100vw, 625px'
                className='-mr-5'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;