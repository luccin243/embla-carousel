import { LimitType } from './Limit'

export type SlideBoundType = {
  start: number
  end: number
  index: number
}

export type SlidesInViewType = {
  check: (location: number, bounds?: SlideBoundType[]) => number[]
  findSlideBounds: (offsets?: number[], threshold?: number) => SlideBoundType[]
}

export function SlidesInView(
  viewSize: number,
  contentSize: number,
  slideSizes: number[],
  snaps: number[],
  limit: LimitType,
  loop: boolean,
  inViewThreshold: number,
): SlidesInViewType {
  const { removeOffset, constrain } = limit
  const cachedThreshold = Math.min(Math.max(inViewThreshold, 0.01), 0.99)
  const cachedOffsets = loop ? [0, contentSize, -contentSize] : [0]
  const cachedBounds = findSlideBounds(cachedOffsets, cachedThreshold)

  function findSlideBounds(
    offsets?: number[],
    threshold?: number,
  ): SlideBoundType[] {
    const slideOffsets = offsets || cachedOffsets
    const slideThreshold = threshold || 0
    const thresholds = slideSizes.map((s) => s * slideThreshold)

    return slideOffsets.reduce((list: SlideBoundType[], offset) => {
      const bounds = snaps.map((snap, index) => ({
        start: snap - slideSizes[index] + thresholds[index] + offset,
        end: snap + viewSize - thresholds[index] + offset,
        index,
      }))
      return list.concat(bounds)
    }, [])
  }

  function check(location: number, bounds?: SlideBoundType[]): number[] {
    const limitedLocation = loop ? removeOffset(location) : constrain(location)
    const slideBounds = bounds || cachedBounds

    return slideBounds.reduce((list: number[], slideBound) => {
      const { index, start, end } = slideBound
      const inList = list.indexOf(index) !== -1
      const inView = start < limitedLocation && end > limitedLocation
      return !inList && inView ? list.concat([index]) : list
    }, [])
  }

  const self: SlidesInViewType = {
    check,
    findSlideBounds,
  }
  return self
}
