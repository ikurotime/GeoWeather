import Img from './Img'

export default function WindHumData({ src, data, text, title, newLine }) {
  return (
    <div className='flex gap-3'>
      <Img
        className='self-center'
        src={src}
        alt='Location'
        width={25}
        height={24}
      />
      <h3 className='text-xs sm:text-base text-gray-500 dark:text-gray-100'>
        {title} {newLine && <br />}
        {data} {text}
      </h3>
    </div>
  )
}
