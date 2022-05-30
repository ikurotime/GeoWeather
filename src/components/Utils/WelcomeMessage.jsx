import sunImage from '../../img/Sunny.svg'
export default function WelcomeMessage() {
  return (
    <div
      className='flex items-center gap-5 mb-10 duration-700 transform opacity-0 transition-all translate-y-12 ease-out'
      data-replace='{ "translate-y-12": "translate-y-0", "opacity-0": "opacity-100" }'
    >
      <img src={sunImage} alt='Location' width={80} height={80} />

      <h1
        className='text-5xl text-[#40396E] dark:text-gray-100 font-bold '
        data-for='sun'
        data-tip
      >
        Good morning!
      </h1>
    </div>
  )
}
