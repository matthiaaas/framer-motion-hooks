import { useEffect } from "react"
import { useMotionValue } from "framer-motion"

/**
 * `useStateAsMotion` returns a MotionValue that updates when the React state changes
 *
 * @param state - React state
 */
export const useStateAsMotion = (state: any) => {
  const motionValue = useMotionValue(state)

  useEffect(() => {
    motionValue.set(state)
  }, [state])

  return motionValue
}
