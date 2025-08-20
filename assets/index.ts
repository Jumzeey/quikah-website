// Assets Index - Central export point for all images and icons
// This file provides a single source of truth for all your assets

// Import and re-export images
import * as ImagesModule from './images'
import * as IconsModule from './icons'

// Re-export all images
export * from './images'

// Re-export all icons  
export * from './icons'

// You can also create grouped exports for better organization
export const Images = ImagesModule
export const Icons = IconsModule

// Example usage:
// import { Images, Icons } from '@/assets'
// import { heroImage, QuikahLogo } from '@/assets'
