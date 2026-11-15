# ENFX E-Commerce — Immersive Sound For The Digital Generation

> **"IMMERSIVE SOUND FOR THE DIGITAL GENERATION"**  
> A cyber-luxury multi-category e-commerce storefront engineered in Space Grotesk typography, obsidian-violet atmospheric lighting, and high-fidelity studio product showcases.

---

## 🎨 Visual Design System & Image References

| Reference | Source Feature | Implementation |
| :--- | :--- | :--- |
| **Image 1: DecorNovaa Tokens** | Space Grotesk + 5 Color Palette | `#9D14FF` (Electric Violet), `#670707` (Deep Crimson), `#C858C6` (Soft Lilac), `#120917` (Obsidian Violet), `#FFFFFF` (White), plus `#D4F856` (Neon Volt). Interactive "View Design Tokens 🎨" palette modal. |
| **Image 2: Quantum Atmosphere** | Cosmic Violet Orb & Floating Rocks | Background atmospheric gradient mesh, pulsing violet nebulae, and floating obsidian crystalline rock particles with specular rim lighting. |
| **Image 3: Revolutionize (A28)** | Fluted Glass Cyber Panel | Vertical fluted glass ribbed textures (`.fluted-ribs`), hairline borders (`rgba(255, 255, 255, 0.12)`), window controls, and live EQ waveform bars. |
| **Image 4 & 5: MAXIMIZE Hero** | Flagship Studio Headphone Layout | macOS titlebar, two-tone Space Grotesk headline (`IMMERSIVE SOUND` in white, `FOR THE DIGITAL GENERATION` in metallic charcoal), neon lime `( ↗ ) Discover More >` pill button, studio radial spotlight, studio floor shadow, and bottom-right circular thumbnail switchers. |

---

## ⚡ Core Architecture & Interactive Features

### 1. Dual-Mode Hero Section
- **Mode 1: 🎧 IMMERSIVE SOUND (MAXIMIZE Flagship)**
  - Two-tone typography: White uppercase line 1 + metallic gunmetal lines 2 & 3.
  - Iconic CTA button: Neon lime pill (`#D4F856`) with white circular container with black diagonal arrow `↗` on the left and bold black text `Discover More >` on the right.
  - Large studio cutout of luxury over-ear headphones with continuous floating levitation and mouse-follow parallax tilt.
  - Studio radial spotlight gradient and realistic contact floor shadow.
  - **Bottom-Right Circular Thumbnail Switchers**:
    - `01 // OBSIDIAN BLACK EDITION`
    - `02 // PLATINUM SILVER EDITION`
    - `03 // CYBER VIOLET DROP`
    - Instant colorway & specification transitions with live cart integration.
- **Mode 2: ⚡ LIVE CATALOG ENGINE (Image 3 Cyber Window)**
  - Interactive fluted glass preview window with 6 category tabs, live EQ waveforms, and instant deal view.

### 2. User-Friendly Navigation & Categories Mega-Dropdown
- **Top Announcement Strip**: Slim rotating offer bar with 1-click promo code application.
- **Categories Mega-Dropdown**: 6 departments (`ELECTRONICS`, `WATCHES`, `BAGS`, `SHOES`, `COSMETICS`, `ACCESSORIES`) with custom icons and item counts.
- **Live Search Bar & Sort Selector**: Instant keyword filtering and price/rating sorting.

### 3. Storefront Catalog Grid & CAD Blueprints
- Seeded with 8 luxury hardware and lifestyle products.
- Staggered scroll-reveal animations with 3D card tilt and hover effects.
- **CAD Specification Blueprint Modal**: Technical architecture breakdown on clicking `SPECS ↗`.

### 4. Slide-Out Bag Drawer & Express Checkout
- **Currency**: Indian Rupee (`₹`) `en-IN` formatting.
- **Promo Engine**: Apply `ENFX15` for 15% off or `ENFX10` for 10% off.
- **Shipping**: Complimentary white-glove express delivery across India.
- **Tax Breakdown**: Clear `Inclusive of 18% GST (₹X included)` calculation.
- **Express Checkout Form**: Name, Phone, Address, City, PIN code, and 256-bit insured payment.

### 5. System Vault Admin Panel (PIN: 2026)
- Authenticate via PIN: **`2026`**.
- **Tab 1: PRODUCTS & PRICING**: Live inline price editor, delete item, add new item form, reset default catalog.
- **Tab 2: CUSTOMER ORDERS**: Live order records synced to browser `localStorage` (`enfx_db_orders`).
- **Tab 3: HERO VIDEO**: Live configurable background video source URL.

---

## 🚀 How to Run

Open [preview.html](file:///C:/Users/Admin/.gemini/antigravity/scratch/shopfree-ecommerce/preview.html) directly in any modern browser (Chrome, Edge, Firefox, Safari).  
- **Zero build or installation needed** (100% self-contained with React 18, Babel Standalone, and Tailwind CSS CDN).
