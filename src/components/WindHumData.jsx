import Img from './Img'

export default function WindHumData({ src, data, text, title }) {
  return (
    <div className='flex gap-3'>
      <Img
        className='aspect-square'
        src={src}
        alt='Location'
        width={24}
        height={24}
      />
      <h3 className='text-base text-gray-500'>
        {title}
        {data} {text}
      </h3>
    </div>
  )
}
