# Framer Motion Hooks

Fill the hook gap in Framer Motion.

## Installation

```bash
npm install framer-motion-hooks
```

_Note_: If you prefer `yarn` instead of `npm`, just use `yarn add framer-motion-hooks`.

## Hooks

### [`useInViewScroll`](docs/useInViewScroll.md)

Returns a `MotionValue` representing the y scroll progress that updates when the target element is visible in viewport.

```jsx
const MyComponent = () => {
  const ref = useRef()

  const progress = useInViewScroll(ref)

  return <motion.div ref={ref} style={{ scale: progress }} />
}
```

[Comprehensive example →](docs/useInViewScroll.md)

#### API

`const scrollProgress = useInViewScroll(ref, options)`

- `scrollProgress`: A number between 0 and 1
- `ref`: React ref target element
- `options`: _(optional)_ Scroll options (e.g. threshold)

### [`useInViewAnimate`](docs/useInViewAnimate.md)

Fires an animation as soon as the element is visible in viewport.

```jsx
const MyComponent = () => {
  const { inViewRef, animation } = useInViewAnimate({ animate: "visible" })

  return (
    <motion.div
      ref={inViewRef}
      initial="initial"
      animate={animation}
      variants={variants}
    />
  )
}

const variants = {
  initial: {
    x: 0
  },
  visible: {
    x: 200
  }
}
```

[Comprehensive example →](docs/useInViewAnimate.md)

_Note_: Also works with direct props on the React element

#### API

`const { inViewRef, animation } = useInViewAnimate(variants, options)`

- `inViewRef`: React ref
- `animation`: Motion animation controls
- `variants`: Motion target object
- `options`: _(optional)_ Intersection options

### [`useMotionAsState`](docs/useMotionAsState.md)

Returns a React state value that updates when the MotionValue changes

```jsx
const MyComponent = () => {
  const { scrollY } = useViewportScroll()

  const reactState = useMotionAsState(scrollY)

  return <span>{reactState}</span>
}
```

#### API

`const state = useMotionAsState(value)`

- `state`: React state
- `value`: Motion value

### [`useStateAsMotion`](docs/useStateAsMotion.md)

Returns a MotionValue value that updates when the React state changes

```jsx
const MyComponent = () => {
  const [opacity, setOpacity] = useState(0)

  const motionOpacity = useStateAsMotion(opacity)

  return <motion.div style={{ opacity: motionOpacity }} />
}
```

#### API

`const value = useStateAsMotion(state)`

- `value`: Motion value
- `state`: React state
