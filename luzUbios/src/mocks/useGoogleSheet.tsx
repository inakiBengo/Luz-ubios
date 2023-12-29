import { useEffect, useState } from "react"

const useGoogleSheet = () => {
  const [loding, setLoding] = useState(true)
  const [data, setData] = useState([])

  const feching = async () => {
    setLoding(true)

    await fetch('https://sheet.best/api/sheets/fea50cf3-8929-4348-a9e7-a0363adf7b01')
    .then(res => res.json())
    .then(res => setData(res))
    .catch(err => console.error(err))

    setLoding(false)
  }

  useEffect(() => {
    feching()
  }, [])
  

  return {data, loding}
}

export default useGoogleSheet
