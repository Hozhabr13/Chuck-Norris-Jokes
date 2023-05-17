import { IntrinsicAttributes } from 'react'

type favoriteType = IntrinsicAttributes & {
    favoriteHandler: () => void,
    isActive?: boolean,
    id: string
  }
  

export {favoriteType}