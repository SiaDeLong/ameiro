import Image from 'next/image'
import SearchBar from './SearchBar'

export default function Home () {
  return (
    <div className="flex flex-col justify-center items-center gap-8 bg-[url('/maple.jpg')] bg-cover bg-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className='flex flex-col items-center sm:items-start gap-[32px] backdrop-blur-lg p-6 rounded-2xl w-[50%]'>
        <div className='flex items-end gap-2'>
          <h1 className='font-black text-4xl'>Ame.iro</h1>
          <h1 className='mb-1 font-medium text-md'>雨いろ</h1>
        </div>

        <SearchBar />

        {/* <div className='flex sm:flex-row flex-col items-center gap-4'>
          <a
            className='flex justify-center items-center gap-2 bg-foreground hover:bg-[#383838] dark:hover:bg-[#ccc] px-4 sm:px-5 border border-transparent border-solid rounded-full sm:w-auto h-10 sm:h-12 font-medium text-background text-sm sm:text-base transition-colors'
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='dark:invert'
              src='/vercel.svg'
              alt='Vercel logomark'
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Read our docs
          </a>
        </div> */}
      </main>
      <footer className='flex flex-col gap-4 backdrop-blur-md px-6 py-4 rounded-2xl'>
        <div className='flex flex-col gap-2'>
          <h1 className='font-medium text-sm'>Powered By</h1>
          <div className='flex justify-between items-center gap-16 p-2 border border-white/[.145] border-solid rounded-lg'>
            <Image
              className='dark:invert'
              src='/next.svg'
              alt='Next.js logo'
              width={60}
              height={15}
              priority
            />
            <Image
              className='dark:invert'
              src='/tailwind.svg'
              alt='Tailwind CSS logo'
              width={35}
              height={5}
              priority
            />
            <Image
              src='/framer-motion.png'
              alt='Framer Motion logo'
              width={35}
              height={5}
              priority
            />
            <a href='https://www.weatherapi.com/' title='Free Weather API'>
              <h1 className='font-medium text-sm'>WeatherAPI.com</h1>
              {/* <Image
                src='https://cdn.weatherapi.com/v4/images/weatherapi_logo.png'
                alt='Weather data by WeatherAPI.com'
                width={60}
                height={15}
                priority
              /> */}
            </a>
          </div>
        </div>

        <h1 className='flex justify-center items-center font-medium text-xs'>
          Creation • Eric Sia
        </h1>
      </footer>
    </div>
  )
}
