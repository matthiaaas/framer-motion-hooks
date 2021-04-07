# `useInViewAnimate`

## Basic Example

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

## Example with Options

The `useInViewAnimate` hook relies on [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) under the hood.Therefore it accepts all options mentioned in the package's README including `threshold`, `delay`, `initialInView`, `triggerOnce` and many more. A complete list can be found [here](https://www.npmjs.com/package/react-intersection-observer#options).

```jsx
import { motion } from "framer-motion"
import { useInViewAnimate } from "framer-motion-hooks"

export function MyComponent() {
  const { inViewRef, animation } = useInViewAnimate(
    {
      animate: "visible"
    },
    {
      threshold: 200,
      triggerOnce: false // set it explicitly to false to get the expected result
    }
  )

  return ...
}

const variants = ...
```
