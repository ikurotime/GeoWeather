import useImage from '../../hooks/useImage'

export default function Img({ className, src, alt, width, height }) {
  const { image } = useImage(src)

  return (
    <img
      className={className}
      src={image}
      alt={alt}
      width={width}
      height={height}
    />
  )
}
