# Image Handling Guide for Thangam Steels E-commerce

This document outlines the image handling system implemented for the Thangam Steels E-commerce website.

## Directory Structure

```
public/
  images/
    products/     # Product images
    banners/      # Homepage and promotional banners
    placeholders/ # Fallback images and placeholders
  fonts/         # Custom fonts
  assets/        # Other static assets
```

## Naming Conventions

- All filenames must be lowercase
- Use hyphens to separate words (no underscores or spaces)
- File extensions must be lowercase (e.g., `.jpg`, `.png`, `.webp`, `.svg`)
- Example: `stainless-steel-pipe.jpg`

## Usage

### Importing the Image Utility

```typescript
import { getImageUrl } from '@/lib/imageUtils';
```

### Using with Next.js Image Component

```tsx
import Image from 'next/image';
import { getImageUrl } from '@/lib/imageUtils';

function ProductImage({ imageName, alt }) {
  return (
    <div className="relative aspect-w-1 aspect-h-1">
      <Image
        src={getImageUrl(`products/${imageName}`)}
        alt={alt}
        fill
        className="object-cover rounded-md"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        loading="lazy"
      />
    </div>
  );
}
```

### Using the Pre-built ImageExample Component

```tsx
import ImageExample from '@/components/ImageExample';

function MyComponent() {
  return (
    <ImageExample 
      src="products/example-product.jpg"
      alt="Example Product"
      width={800}
      height={600}
      className="my-4"
    />
  );
}
```

## Best Practices

1. **Image Optimization**
   - Use WebP format for better compression
   - Specify appropriate `width` and `height` to prevent layout shifts
   - Use the `sizes` attribute for responsive images

2. **Performance**
   - Use `loading="lazy"` for below-the-fold images
   - Utilize the `blurDataURL` prop for placeholders
   - Consider using the `priority` prop for above-the-fold images

3. **Error Handling**
   - Always provide meaningful `alt` text
   - The system will automatically fall back to a placeholder if an image fails to load

## Adding New Images

1. Place product images in `public/images/products/`
2. Place banner images in `public/images/banners/`
3. Place generic placeholders in `public/images/placeholders/`

## Vercel Deployment

The `vercel.json` configuration includes optimal caching headers for assets:
- Images are cached for 1 year (31536000 seconds)
- Cache is immutable for versioned assets

## Troubleshooting

### Broken Images
1. Verify the file exists in the correct directory
2. Check the filename for typos and case sensitivity
3. Ensure the file extension is lowercase
4. Verify the path in `getImageUrl()` matches the file location

### Performance Issues
1. Check if images are properly optimized
2. Verify image dimensions are appropriate for their display size
3. Consider using a CDN if not already in use

## Example Image Specifications

### Product Images
- Format: WebP (preferred) or JPEG
- Size: 800x800px (minimum)
- Background: White or transparent
- File size: < 200KB (recommended)

### Banner Images
- Format: WebP or JPEG
- Size: 1920x600px (desktop), 800x600px (mobile)
- File size: < 300KB (recommended)
