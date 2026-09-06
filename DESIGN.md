---
name: Ilias Thalassochoritis Portfolio
description: A calm, serious and human portfolio for a production-focused Full Stack Engineer.
colors:
  primary: "#4f7f80"
  primary-hover: "#65989a"
  primary-focus: "#a7cfca"
  surface-light: "#f8fafc"
  surface-dark: "#0f172a"
  panel-dark: "#11182a"
  panel-light: "#ffffff"
  border-light: "#e2e8f0"
  border-dark: "rgba(255,255,255,0.1)"
  text-light: "#020617"
  text-dark: "#f8fafc"
  muted-light: "#475569"
  muted-dark: "#cbd5e1"
  accent-text: "#3f6869"
  accent-wash: "#e6f1ef"
  accent-border: "#b9d5d2"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.25rem, 3vw, 1.5rem)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.2em"
rounded:
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  pill: "9999px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2.5rem"
  section: "7rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-dark}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  button-secondary:
    backgroundColor: "rgba(255,255,255,0.7)"
    textColor: "{colors.text-light}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
    height: "48px"
  card:
    backgroundColor: "rgba(255,255,255,0.7)"
    textColor: "{colors.text-light}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input:
    backgroundColor: "{colors.panel-light}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
    height: "48px"
  nav:
    backgroundColor: "rgba(255,255,255,0.85)"
    textColor: "{colors.muted-light}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
  chip:
    backgroundColor: "{colors.accent-soft}"
    textColor: "{colors.accent-text}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
---

# Design System: Ilias Thalassochoritis Portfolio

## Overview

**Creative North Star: "The Quiet Signal"**

The portfolio is calm, serious, human and precise. It gives recruiters and engineering leads a clear signal about Ilias's production experience without competing with the work itself. The interface uses a restrained surface language, concise copy and a deliberate hierarchy that supports fast evaluation.

The visual system is built around a deep navy foundation, mineral teal accents and softly layered panels. Rounded forms and ambient depth keep the experience approachable, while the restrained component language prevents it from feeling playful, generic or AI-generated. The visual direction explicitly avoids heavy glow, excessive glassmorphism and default Tailwind color styling.

**Key Characteristics:**

- Calm navy foundation with a mineral teal action color and a restrained warm-sand glow.
- Serious hierarchy with human, direct copy.
- Soft layering through translucent panels, borders and ambient shadows.
- Restrained rounded components with clear interaction states.
- Evidence-led presentation of projects, experience and technical depth.

## Colors

The palette is Deep Muted Navy + Mineral Teal. Teal is reserved for actions, active navigation, labels and small moments of emphasis, while navy, slate and white surfaces carry the reading experience.

### Primary

- **Mineral Teal**: The main action color for primary buttons and active states.
- **Mineral Teal Hover**: A lighter action state used only for hover feedback.
- **Sea-glass Focus**: A light focus treatment that keeps keyboard navigation visible without becoming decorative.

### Neutral

- **Deep Navy**: The dark-mode page foundation and the strongest dark surface.
- **Navy Panel**: The darker translucent panel used by the header and chatbot surfaces.
- **Cool Paper**: The light-mode page foundation.
- **White Panel**: Light cards, inputs and elevated content surfaces.
- **Slate Border**: Quiet borders that define structure without creating hard boxes.
- **Slate Text**: Primary light-mode body text and supporting copy.
- **Cool Light Text**: Dark-mode body text and secondary content.
- **Sea-glass Wash**: Project technology chips and small accent surfaces.

### Named Rules

**The Quiet Accent Rule.** Mineral teal should guide action and orientation, not become a full-screen decoration or a generic color wash.

**The Surface Contrast Rule.** Use tonal separation, borders and text hierarchy before increasing saturation.

## Typography

**Display Font:** Manrope (with a sans-serif fallback)
**Body Font:** Manrope (with a sans-serif fallback)
**Label/Mono Font:** Manrope, using uppercase tracking for labels rather than a separate display face.

**Character:** Manrope gives the portfolio a contemporary but grounded voice. One family across the system keeps the experience coherent and lets weight, size and spacing create hierarchy instead of visual novelty.

### Hierarchy

- **Display** (600, responsive 2.25rem to 3.75rem, tight line-height): The hero name and primary introduction.
- **Headline** (600, responsive 1.875rem to 2.25rem, tight line-height): Section headings and major closing calls to action.
- **Title** (600, responsive 1.25rem to 1.5rem, tight line-height): Project titles, timeline entries and component titles.
- **Body** (400, 1rem, 1.75 line-height): Project descriptions, experience details and supporting profile copy.
- **Label** (600, 0.75rem, 0.2em tracking, uppercase): Section eyebrows, metadata and orientation cues.

### Named Rules

**The One Voice Rule.** Keep Manrope consistent and create emphasis through scale, weight and spacing rather than mixing type personalities.

**The Scan Before Detail Rule.** Labels and headings should establish context before the visitor reaches longer descriptions.

## Layout

The page uses a centered, wide content frame with a narrower reading column for experience and a consistent inner container for the hero, projects, skills and contact sections. The outer page uses horizontal padding that grows from mobile to desktop. Sections are separated by generous vertical rhythm, while cards and controls use compact internal spacing.

The hero changes from a stacked mobile composition to a two-column desktop composition with the text and portrait sharing the first viewport. Projects use a responsive card grid, with the first project receiving more visual weight on large screens. Skills use four columns at large widths, and the experience timeline narrows to a readable column. Navigation collapses into a mobile menu below the desktop breakpoint.

## Elevation & Depth

This is a layered and ambient system. Depth comes from translucent surfaces, quiet borders, backdrop blur and soft shadows rather than hard drop-shadow effects. The dark theme uses navy-on-navy tonal separation; the light theme uses white panels over a cool paper background. Shadows become more noticeable on interactive or floating surfaces, such as the header, project hover state, portrait frame and chatbot.

### Shadow Vocabulary

- **Ambient Low** (`0 8px 30px rgba(15,23,42,0.06)`): Header and light floating surfaces.
- **Card Lift**: A restrained resting shadow that gives cards enough separation from the page.
- **Ambient High** (`0 24px 80px rgba(0,0,0,0.45)`): Dark chatbot elevation and other prominent floating overlays.

### Named Rules

**The Layered, Not Lifted Rule.** Use tonal surfaces and borders as the default depth cue. Reserve stronger shadows for elements that genuinely float above the page.

## Shapes

The form language is gently curved and consistent. Pills are used for actions, chips and social links. Cards, panels and large containers use generous 1.5rem to 2rem radii, while inputs and compact controls use approximately 0.75rem to 1rem radii. Borders are subtle and low contrast. The portrait and contact panel use clipping and overflow to keep their silhouettes clean.

## Components

### Buttons

- **Shape:** Full pill silhouette with a minimum height of 48px.
- **Primary:** Mineral teal background with white text, horizontal padding around 24px and a clear arrow or action icon where useful.
- **Hover / Focus:** Use the lighter teal hover state and a visible sea-glass focus outline. Keep motion limited to small icon translation or a very subtle active scale.
- **Secondary / Ghost / Tertiary:** Transparent or lightly translucent white surfaces with a quiet border and slate text. They should support the primary action without competing with it.

### Chips

- **Style:** Small pill surfaces with a soft sea-glass wash and compact horizontal padding.
- **State:** Informational by default. Use stronger color only when a chip communicates an active or expanded state.

### Cards / Containers

- **Corner Style:** Generous rounded corners, normally 1.5rem for cards and up to 2rem for large panels.
- **Background:** Translucent white in light mode and translucent white over navy in dark mode.
- **Shadow Strategy:** Resting cards use a quiet shadow; hover can add a more noticeable but still soft card lift.
- **Border:** A low-contrast slate border in light mode and a subtle white border in dark mode.
- **Internal Padding:** Usually 24px, growing to 28px or more on larger surfaces.

### Inputs / Fields

- **Style:** Full-width fields with a light or translucent dark surface, subtle border, approximately 12px corner radius and comfortable 48px input height.
- **Focus:** Border shift plus a soft focus ring using the sea-glass focus color.
- **Error / Disabled:** Rose error borders and inline messages. Disabled actions reduce opacity and retain their shape without suggesting they are clickable.

### Navigation

- **Style:** A fixed, centered rounded panel with a translucent surface, backdrop blur and a quiet shadow. Desktop links use small, medium-weight Manrope labels.
- **States:** Active links use the strongest text color and a short teal underline. Hover changes text or surface tone without adding decorative motion.
- **Mobile:** The navigation becomes a compact menu trigger with a rounded dropdown panel and a clear active left border.

### Chatbot

The portfolio assistant is a quiet utility rather than a visual centerpiece. It uses a floating circular trigger, a compact rounded panel, plain-language English and Greek guidance, short suggestions and restrained message bubbles. It should feel like an optional way to explore the portfolio, not like an AI brand layered over it.

## Do's and Don'ts

### Do:

- **Do** let the work, experience and technical evidence lead the visual hierarchy.
- **Do** use the mineral teal accent sparingly for action, orientation and focus.
- **Do** preserve the calm navy and cool-paper contrast between dark and light themes.
- **Do** keep surfaces soft, layered and readable with quiet borders.
- **Do** make responsive behavior feel intentional, especially the hero, project grid, timeline and navigation.
- **Do** keep copy direct, human and factual.

### Don't:

- **Don't** introduce heavy glow, ornamental gradients or excessive glassmorphism.
- **Don't** make the interface look AI-generated, futuristic or overly decorative.
- **Don't** fall back to generic Tailwind color utilities when a semantic design token exists.
- **Don't** add a second typeface just to create novelty.
- **Don't** use em dashes or en dashes in portfolio copy.
- **Don't** invent testimonials, customers, benchmarks or professional claims.
