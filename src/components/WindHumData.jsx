export default function WindHumData({ src, data, text }) {
  return (
    <div className='flex gap-3'>
      <img
        src={'./src/img/' + src + '.png'}
        alt='Location'
        width={20}
        height={20}
      />
      <h3 className='text-base text-gray-500'>
        {data} {text}
      </h3>
    </div>
  )
}
