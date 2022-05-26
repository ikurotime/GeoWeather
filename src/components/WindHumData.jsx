export default function WindHumData({ src, data, text, title }) {
  return (
    <div className='flex gap-3'>
      <img src={'./src/img/' + src + '.png'} alt='Location' width={24} />
      <h3 className='text-base text-gray-500'>
        {title}
        {data} {text}
      </h3>
    </div>
  )
}
