import sunImage from '../img/Sunny.svg'
export default function RightPanel() {
  return (
    <div className='container border-4 rounded border-cardGray'>
      <div className='grid items-center w-full grid-cols-1 grid-rows-6 gap-4 p-10 place-items-center'>
        <span className='my-5 text-3xl place-self-start'>Today</span>
        <img src={sunImage} alt='Location' width={120} height={120} />
        <span className='my-5 text-3xl place-self-start'>Today</span>
      </div>
    </div>
  )
}
