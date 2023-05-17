import { IntrinsicAttributes } from 'react'

type CounterType = IntrinsicAttributes & {
    time: number,
    timeIsFinished: () => void
  }

export {CounterType}