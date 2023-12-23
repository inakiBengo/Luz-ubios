export interface works {
  works: Data[]
}

export interface Data {
  id: number
  img: string
  title: string
  date: string
  dimensions: {x: number, y: number}
  colors: string[]
  text: string
  color: string
  available: boolean
  images: {src: string}[]
}

