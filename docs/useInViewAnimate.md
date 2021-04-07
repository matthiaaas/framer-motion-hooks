# `useInViewAnimate`

## Example

```jsx
import { motion } from "framer-motion"
import { useInViewAnimate } from "framer-motion-hooks"

export function MyComponent() {
  const { inViewRef, animation } = useInViewAnimate({ animate: "visible" })

  return (
    <div style={{ height: "200vh", paddingTop: "120vh" }}>
      <motion.h1
        ref={inViewRef}
        initial="hidden"
        animate={animation}
        variants={variants}
      >
        Appearing
      </motion.h1>
    </div>
  )
}

const variants = {
  hidden: {
    opacity: 0.2
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}
```
