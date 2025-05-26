# DESIGN_SPEC.md

## 1. Overall Philosophy

- **Goal:** Create a modern, professional, and sleek personal portfolio website.
- **Aesthetic:** Minimalist dark mode, prioritizing content clarity and readability.
- **Inspiration:** Cleanliness of Vercel, visual style elements from provided screenshots (serif headings, ample whitespace, subtle card elements).
- **Focus:** Highlight professional experience through a timeline and showcase key projects like a consulting firm would, emphasizing impact and results over an exhaustive skills list.

## 2. Color Palette

- **Mode:** Dark Mode Primary.
- **Background:** Very dark gray (e.g., `#111111` or `#1A1A1A`) - Avoid pure black for better depth.
- **Text:** Off-white or light gray (e.g., `#E0E0E0` or `#CCCCCC`) for primary body text. Slightly brighter white for headings (e.g., `#F5F5F5`).
- **Accent:** A single, muted accent color for links, buttons, and subtle highlights. Potential options (choose one or two):
  - Muted Blue: (e.g., `#5E8BBD`)
  - Desaturated Teal/Green: (e.g., `#6D9F9F`)
  - Subtle Gold/Warm Gray: (e.g., `#A89B8C` - similar to screenshots)
- **Subtle UI Elements:** Slightly lighter grays for card backgrounds, borders, or dividers (e.g., `#2A2A2A`, `#333333`).

## 3. Typography

- **Heading Font:** A sophisticated Serif font (e.g., 'Merriweather', 'Lora', 'Playfair Display', or similar to screenshots). Use for main section titles (Experience, Projects, Contact) and potentially the Hero intro name. Aim for good readability at larger sizes.
- **Body Font:** A clean, highly readable Sans-Serif font (e.g., 'Inter', 'Source Sans Pro', 'Lato', system-ui). Use for paragraphs, descriptions, timeline details, navigation links, button text.
- **Monospace Font (Optional):** If displaying code snippets or specific tech terms (e.g., 'Fira Code', 'Source Code Pro').
- **Hierarchy:** Establish clear visual hierarchy using font size, weight (bold, regular), and color variations from the palette.

## 4. Layout & Structure

- **Overall:** Single-page application feel with smooth scrolling between sections.
- **Sections:**
  1.  **Hero/Intro:** Name, concise professional title/summary (from resume).
  2.  **Experience Timeline:** Chronological display of work history.
  3.  **Project Showcase:** Highlight key projects with company context.
  4.  **Contact:** Simple contact information/link.
- **Grid & Spacing:** Utilize generous whitespace. Employ a consistent spacing scale (e.g., multiples of 8px or 4px) for padding and margins. Content centered within a max-width container (e.g., `1024px` or `1100px`) for optimal readability on larger screens.
- **Responsiveness:** Fully responsive design adapting cleanly to tablet and mobile viewports. Navigation might collapse into a hamburger menu, timeline items might stack, project cards might become single-column.

## 5. Components & Primitives

- **Navigation:** Minimal top navigation bar. Links: "Experience", "Projects", "Contact". Subtle hover/active states using the accent color or a slight background change.
- **Buttons:** Minimalist. Text-based with an arrow (`->`) or a subtle underline/color change on hover. Primary call-to-action (e.g., Contact button) might have a subtle filled or outlined style using the accent color.
- **Timeline:** Vertical layout. Each entry:
  - Clear visual connection (line).
  - Company Name & Role (Serif or heavier Sans-Serif).
  - Dates (Smaller Sans-Serif).
  - Key bullet points (Body Sans-Serif).
- **Project Showcase:** Card-based or distinct section layout. Each project:
  - Company Logo (obtained or placeholders).
  - Project Title (e.g., "Costco Order Management Platform").
  - Brief Description (1-2 sentences summarizing role/impact, derived from resume). Use body font.
  - Subtle visual separation (card background, border).
- **Contact:** Simple section with email address link, potentially LinkedIn/GitHub links. Avoid complex forms for minimalism.

## 6. Imagery & Visuals

- **Logos:** Source high-quality logos for Costco, Livefront, Optum, Epsilon. Ensure consistent styling (e.g., monochrome versions if needed for dark mode coherence).
- **Backgrounds:** Keep backgrounds clean. Maybe a very subtle noise texture or a faint gradient if desired, but default to solid dark color.
- **Icons:** Use minimal, clean icons (e.g., for links, arrows) potentially from a library like Feather Icons or Heroicons.

## 7. Interactivity & Animations

- **Goal:** Enhance the sleek feel without distraction.
- **Examples:** Subtle fade-in transitions for sections on scroll, smooth color/background transitions on hover for links and buttons. Avoid jerky or complex animations.
