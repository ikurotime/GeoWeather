import { useEffect, useState } from 'react'

const useImage = (fileName) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import('../img/' + fileName + '.png')
        setImage(response.default)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    fetchImage()
  }, [fileName])

  return {
    loading,
    error,
    image
  }
}

export default useImage
