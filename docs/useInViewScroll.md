# `useInViewScroll`

## Example

```jsx
import { useRef } from "react"
import { motion, useTransform } from "framer-motion"
import { useInViewScroll } from "framer-motion-hooks"

export function MyComponent() {
  const ref = useRef(null)

  const progress = useInViewScroll(ref)

  const x = useTransform(progress, [0, 1], [0, 200])

  return (
    <div style={{ height: "200vh", paddingTop: "120vh" }}>
      <motion.h1 ref={ref} style={{ x }}>
        Moving
      </motion.h1>
    </div>
  )
}
```
