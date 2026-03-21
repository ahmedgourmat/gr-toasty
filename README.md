# gr-toasty 🍞

A lightweight, animated React toast library with zero dependencies. Built with TypeScript, fully typed, and easy to drop into any React project.

---

## Installation

```bash
npm install gr-toasty
```

> **Peer dependencies:** Make sure you have `react` and `react-dom` installed (v17+).

---

## Quick Start

**1. Add `<Toaster />` once in your app root:**

```tsx
import { Toaster } from 'gr-toasty'

export default function App() {
  return (
    <>
      <Toaster position="top-right" />
      {/* the rest of your app */}
    </>
  )
}
```

**2. Call `toast` from anywhere:**

```tsx
import { toast } from 'gr-toasty'

toast.success("Saved successfully!")
toast.error("Something went wrong.")
toast("Just a heads up.")
```

That's it. No providers, no context setup.

---

## Usage Examples

### Different toast types

```tsx
toast("Default message")
toast.success("Profile updated!")
toast.error("Failed to load data.")
toast.warning("Your session is about to expire.")
toast.info("A new version is available.")
```

### Custom position

```tsx
<Toaster position="bottom-center" />
```

Available positions: `top-left` `top-center` `top-right` `bottom-left` `bottom-center` `bottom-right`

### Custom duration

```tsx
<Toaster duration={6000} /> // 6 seconds
```

Default is `4000ms`.

### Exit animations

```tsx
<Toaster variant="mac" />
```

| Variant | Animation |
|---|---|
| `default` | Fades out |
| `mac` | Shrinks and fades (macOS style) |
| `left` | Slides out to the left |
| `right` | Slides out to the right |
| `top` | Slides out upward |

### Custom container styles

```tsx
<Toaster
  position="top-right"
  variant="mac"
  duration={3000}
  styling={{ zIndex: 9999 }}
/>
```

---

## API Reference

### `toast(message)`

| Call | Description |
|---|---|
| `toast(message)` | Default toast |
| `toast.success(message)` | Green success toast |
| `toast.error(message)` | Red error toast |
| `toast.warning(message)` | Yellow warning toast |
| `toast.info(message)` | Blue info toast |

### `<Toaster />`

| Prop | Type | Default | Description |
|---|---|---|---|
| `position` | `Position` | `bottom-right` | Where toasts appear on screen |
| `duration` | `number` | `4000` | How long toasts stay (ms) |
| `variant` | `Variant` | `default` | Exit animation style |
| `styling` | `React.CSSProperties` | — | Extra styles for the container |

### Types

```tsx
import type { Toast, ToasterProps } from 'gr-toasty'
```

---

## Contributing

Found a bug or want to add a feature? Contributions are welcome!

1. Fork the repo
2. Create a branch: `git checkout -b my-feature`
3. Make your changes
4. Open a pull request

Please keep PRs focused — one feature or fix per PR makes review much easier.

---

## License

MIT