// interfaces/index.ts

export interface Property {
  id: number
  name: string
  address: {
    state: string
    city: string
    country: string
  }
  category: string[]
  offers: {
    bed: string
    shower: string
    occupants: string
  }
  image?: string
  rating: number
  price: number
  discount?: string
}

// Props for the component
export interface PropertyListingsProps {
  properties: Property[]
}

