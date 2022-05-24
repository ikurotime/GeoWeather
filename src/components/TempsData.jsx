export default function TempsData({ temp }) {
  return (
    <div className='flex items-center gap-3'>
      <h2 className='text-xl '>{temp}°C</h2>
      <div className='flex'>
        <img className='w-5 h-5' src='./src/img/Temp.png' alt='Max temp' />
        <img
          className='w-5 h-5 aspect-square'
          src='./src/img/DownArrow.png'
          alt='Max temp'
        />
      </div>
    </div>
  )
}
