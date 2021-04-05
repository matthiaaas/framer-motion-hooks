# Framer Motion Hooks

Fill the hook gap in Framer Motion.

## Installation

```bash
npm install framer-motion-hooks
```

_Note_: If you prefer `yarn` instead of `npm`, just use `yarn add framer-motion-hooks`.

## Hooks

### `useInViewScroll`

Returns a `MotionValue` representing the y scroll progress that updates when the target element is visible in viewport.

```jsx
const MyComponent = () => {
  const progress = useInViewScroll(wrapperRef)

  return <motion.div style={{ scale: progress }} />
}
```

#### API

`const scrollProgress = useInViewScroll(ref, options)`

- `scrollProgress`: A number between 0 and 1
- `ref`: React ref target element
- `options`: _(optional)_ Scroll options (e.g. threshold)

### `useInViewAnimate`

Fires an animation as soon as the element is visible in viewport.

```jsx
const MyComponent = () => {
  const { inViewRef, animation } = useInViewAnimate(variants)

  return <motion.div ref={inViewRef} animate={animation} />
}

const variants = {
  initial: {
    x: 0
  },
  animate: {
    x: 200
  }
}
```

_Note_: Also works with direct props on the React element

#### API

`const { inViewRef, animation } = useInViewAnimate(variants, options)`

- `inViewRef`: React ref
- `animation`: Motion animation controls
- `variants`: Motion target object
- `options`: _(optional)_ Intersection options

### `useMotionAsState`

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
