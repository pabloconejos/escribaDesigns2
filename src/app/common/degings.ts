export type Designs = Designs[]

export interface Design {
  id: number
  title: string
  description: string
  category: string[]
  development: string[]
  thanksto: string[]
  imagen_base64: string
}
