# Design System

## 1. Overview
The **movidev** design system is built on minimal, high-contrast aesthetics using **Tailwind CSS (v4)** and **shadcn/ui** ("New York" style). It features a dark-themed UI with glassmorphism effects and smooth micro-interactions.

## 2. Typography
The project uses a combination of modern sans-serif fonts for UI and a custom serif for display.

| Usage | Font Family | Variable | Source |
| :--- | :--- | :--- | :--- |
| **Primary UI** | `Geist Sans` | `--font-geist-sans` | Google Fonts |
| **Code / Mono** | `Geist Mono` | `--font-geist-mono` | Google Fonts |
| **Display / Headings** | `Batangas` | `--font-batangas` | Local (`.otf`) |

## 3. Color Palette
Colors are defined via CSS variables in `src/app/globals.css` and adapt to specific themes. The default theme is **Dark Mode**.

### Core Colors
| Token | Value (HSL or exact) | Description |
| :--- | :--- | :--- |
| `background` | `0 0% 0%` (#000000) | Deep black background |
| `foreground` | `0 0% 100%` (#FFFFFF) | Pure white text |
| `card` | `0 0% 3%` | Slightly lighter black for cards |
| `primary` | `0 0% 98%` | Primary action color (almost white) |
| `secondary` | `0 0% 14.9%` | Secondary elements (dark gray) |
| `accent` | `0 0% 14.9%` | Accents and hover states |
| `muted` | `0 0% 14.9%` | Muted text backgrounds |
| `border` | `0 0% 14.9%` | Borders and dividers |
| `blue-400` | `213 94% 68%` | Brand Blue Light |
| `blue-500` | `217 91% 60%` | Brand Blue Default |
| `blue-600` | `221 83% 53%` | Brand Blue Dark |

### Functional Colors
- **Destructive**: `0 62.8% 30.6%` (Dark Red)
- **Ring**: `0 0% 83.1%` (Focus rings)

## 4. Effects & Utilities
Custom Tailwind utilities referencing `@layer utilities`.

### Glassmorphism
The `.glass` utility creates a frosted glass effect:
```css
.glass {
  background: rgba(255, 255, 255, 0.05); /* bg-white/5 */
  backdrop-filter: blur(24px); /* backdrop-blur-xl */
  border: 1px solid rgba(255, 255, 255, 0.1); /* border-white/10 */
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
}

.glass-hover {
  /* Hover state for interactive glass elements */
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
    transition: all 300ms;
  }
}
```

### Text Gradient
For headings and emphasized text:
```css
.text-gradient {
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, white, rgba(255,255,255,0.8), rgba(255,255,255,0.5));
}

.text-gradient-blue {
  background-clip: text;
  color: transparent;
  background-image: linear-gradient(to right, var(--color-blue-400), var(--color-blue-500), var(--color-blue-600));
}

.bg-gradient-blue {
  background-image: linear-gradient(to right, var(--color-blue-400), var(--color-blue-500), var(--color-blue-600));
}
```

## 5. Animations
Custom keyframe animations defined in `globals.css`:
- **Blob**: `7s infinite` (Floating background blobs)
- **Float**: `6s ease-in-out infinite` (Floating elements)

## 6. Radius & Spacing
- **Base Radius**: `0.5rem` (8px)
- **Card/Container Radius**: Derived from base (`--radius`)
- **Spacing**: Standard Tailwind spacing scale.

## 7. Component Library
- **Base**: [shadcn/ui](https://ui.shadcn.com/)
- **Style**: "New York"
- **Icon Set**: Lucide React
