import { useEffect, useState } from "react"
import { MotionValue } from "framer-motion"

/**
 * `useMotionAsState` returns a React state that updates when the MotionValue changes
 *
 * @param motionValue - MotionValue
 */
export const useMotionAsState = (motionValue: MotionValue) => {
  const [state, setState] = useState()

  useEffect(() => {
    const handleChange = () => setState(motionValue.get())

    const unsubscribe = motionValue.onChange(handleChange)

    return () => unsubscribe()
  }, [])

  return state
}
