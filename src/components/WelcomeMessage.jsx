import sunImage from '../img/Sunny.svg'
export default function WelcomeMessage() {
  return (
    <div className='flex items-center gap-5 mb-10'>
      <img src={sunImage} alt='Location' width={80} height={80} />

      <h1 className='text-5xl text-[#40396E] font-bold' data-for='sun' data-tip>
        Good morning!
      </h1>
    </div>
  )
}
