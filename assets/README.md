# Assets Directory

This directory contains all images and icons used in the Quikah website, organized with a centralized export system.

## Structure

```
assets/
├── index.ts          # Main export file for all assets
├── images/
│   ├── index.ts      # Export file for all images
│   └── [image files] # Your image files (.jpg, .png, .webp, etc.)
├── icons/
│   ├── index.ts      # Export file for all icons
│   └── [icon files]  # Your icon files (.svg, .png, etc.)
└── README.md         # This file
```

## How to Use

### Adding New Images

1. Add your image file to the `assets/images/` folder
2. Import it in `assets/images/index.ts`:
   ```typescript
   import heroImage from './hero-image.jpg'
   ```
3. Export it:
   ```typescript
   export { heroImage }
   ```

### Adding New Icons

1. Add your icon file to the `assets/icons/` folder
2. Import it in `assets/icons/index.ts`:
   ```typescript
   import QuikahLogo from './quikah-logo.svg'
   ```
3. Export it:
   ```typescript
   export { QuikahLogo }
   ```

### Using Assets in Components

Import from the main assets index:

```typescript
// Import specific assets
import { heroImage, QuikahLogo } from '@/assets'

// Or import grouped assets
import { Images, Icons } from '@/assets'

// Use in component
<Image src={heroImage} alt="Hero" />
<Icons.QuikahLogo />
```

## Benefits

- **Centralized Management**: All assets exported from one place
- **Easy Refactoring**: Change asset names in one location
- **Better Organization**: Grouped exports for related assets
- **Type Safety**: TypeScript support for asset imports
- **Performance**: Tree-shaking removes unused assets

## Best Practices

1. Use descriptive names for your assets
2. Optimize images before adding (use WebP when possible)
3. Use SVG for icons when possible
4. Group related assets together in exports
5. Add alt text and proper sizing for images

## Supported Formats

### Images
- `.jpg`, `.jpeg` - Photos and complex images
- `.png` - Images with transparency
- `.webp` - Modern format with better compression
- `.svg` - Vector graphics and simple illustrations

### Icons
- `.svg` - Preferred format for scalable icons
- `.png` - For complex icons that can't be SVG
