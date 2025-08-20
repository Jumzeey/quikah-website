# Quikah Website

A modern, responsive website built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components. The site connects businesses with customers through a clean, professional interface.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Development**: Turbopack for fast development

## 📁 Project Structure

```
quikah-website/
├── app/                          # Next.js App Router
│   ├── (pages)/                  # Route groups
│   │   ├── for-businesses/       # Business-focused page
│   │   ├── for-customers/        # Customer-focused page
│   │   ├── pricing/              # Pricing tiers page
│   │   └── faqs/                 # FAQ page with accordions
│   ├── globals.css               # Global styles & CSS variables
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Homepage
├── components/
│   ├── layout/                   # Layout components
│   │   ├── Container.tsx         # Responsive container wrapper
│   │   ├── Footer.tsx            # Site footer with links
│   │   └── Navbar.tsx            # Sticky navigation with mobile menu
│   └── ui/                       # shadcn/ui components
│       ├── accordion.tsx         # Collapsible FAQ sections
│       ├── button.tsx            # Customizable button component
│       ├── card.tsx              # Content cards
│       ├── dialog.tsx            # Modal dialogs
│       ├── dropdown-menu.tsx     # Dropdown menus
│       ├── navigation-menu.tsx   # Navigation components
│       └── TestimonialSlider.tsx # Custom testimonial carousel
├── lib/
│   └── utils.ts                  # Utility functions (cn helper)
└── public/                       # Static assets (add your images here)
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563eb) - Used for main CTAs and branding
- **Secondary**: Green (#16a34a) - Used for customer-focused elements
- **Accent**: Purple (#9333ea) - Used for pricing and premium features
- **Neutral**: Gray scale for text and backgrounds

### Typography
- **Font**: Inter (Google Fonts)
- **Hierarchy**: H1 (4xl-6xl) → H2 (3xl-4xl) → H3 (xl-2xl)
- **Body**: Base size with good line height for readability

### Components
All UI components follow shadcn/ui patterns with consistent:
- Border radius (0.5rem default)
- Spacing scale (Tailwind's spacing system)
- Color tokens (CSS custom properties)
- Focus states and accessibility

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and install dependencies**:
```bash
cd quikah-website
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript compiler check
```

## 📄 Pages Overview

### 1. Homepage (`/`)
- Hero section with dual CTAs
- Feature preview cards
- Call-to-action sections

### 2. For Businesses (`/for-businesses`)
- Business-focused hero
- 6-card feature grid
- Industry category grid
- 3-step process explanation
- Business testimonial slider
- Conversion-focused CTA

### 3. For Customers (`/for-customers`)
- Customer-focused hero
- Customer benefit features
- Service category grid
- Simple 3-step process
- Customer testimonial slider
- Free signup CTA

### 4. Pricing (`/pricing`)
- Customer plan (free forever)
- 3-tier business pricing
- Feature comparison
- FAQ section
- Multiple CTAs

### 5. FAQs (`/faqs`)
- Categorized accordion sections
- Comprehensive Q&A coverage
- Support contact CTAs
- Quick action links

## 🔧 Customization Guide

### Adding New Pages
1. Create new folder in `app/` directory
2. Add `page.tsx` with default export
3. Include metadata export for SEO
4. Update navigation in `components/layout/Navbar.tsx`

### Modifying Colors
Update the CSS custom properties in `app/globals.css`:
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --secondary: 210 40% 96%;
  /* ... other color tokens */
}
```

### Adding Components
Use shadcn/ui CLI to add new components:
```bash
npx shadcn@latest add [component-name]
```

### SEO Configuration
Each page includes metadata. Update in the page files:
```typescript
export const metadata = {
  title: 'Your Page Title - Quikah',
  description: 'Your page description',
  // ... other metadata
}
```

## 🖼️ Asset Management

### Images
- Place images in `public/` directory
- Use Next.js `Image` component for optimization
- Add appropriate `alt` text for accessibility
- Consider using `priority` prop for above-the-fold images

### Icons
- Using Lucide React icon library
- Import icons: `import { IconName } from 'lucide-react'`
- Consistent sizing with Tailwind classes

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms
The site works on any platform supporting Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

### Build Command
```bash
npm run build
```

### Environment Variables
Add any required environment variables to your deployment platform.

## 📊 Performance Optimization

### Current Optimizations
- Next.js Image optimization
- Turbopack for fast development
- Tree-shaking with ES modules
- CSS-in-JS with Tailwind
- Component lazy loading where appropriate

### Lighthouse Targets
- **Performance**: 90+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader friendly

## 🔒 Security

- TypeScript for type safety
- ESLint for code quality
- No hardcoded secrets
- Secure headers via Next.js
- Input validation on forms

## 🐛 Troubleshooting

### Common Issues

**Build Errors**:
- Run `npm run type-check` to identify TypeScript issues
- Check for missing imports or typos

**Styling Issues**:
- Ensure Tailwind classes are correct
- Check if custom CSS conflicts with Tailwind

**Component Issues**:
- Verify shadcn/ui components are properly installed
- Check import paths

### Getting Help
- Check Next.js documentation
- Review shadcn/ui component docs
- Check Tailwind CSS documentation

## 📝 Content Management

### Updating Content
- **Testimonials**: Edit arrays in `components/ui/TestimonialSlider.tsx`
- **Features**: Update feature arrays in respective page files
- **Pricing**: Modify pricing data in `app/pricing/page.tsx`
- **FAQs**: Update FAQ arrays in `app/faqs/page.tsx`

### Adding New Testimonials
```typescript
const newTestimonial = {
  id: 4,
  name: 'Customer Name',
  role: 'Job Title',
  company: 'Company Name',
  content: 'Testimonial content...',
  rating: 5
}
```

## 🎯 Future Enhancements

### Potential Additions
- [ ] Dark mode toggle
- [ ] Blog section
- [ ] Contact form
- [ ] Live chat integration
- [ ] Multi-language support
- [ ] Advanced animations
- [ ] A/B testing setup

### Performance Improvements
- [ ] Image optimization with next-optimized-images
- [ ] Service worker for caching
- [ ] Bundle analyzer integration
- [ ] Core Web Vitals monitoring

## 📞 Support

For questions or issues:
- Create an issue in the repository
- Check the documentation
- Review component source code

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS.
