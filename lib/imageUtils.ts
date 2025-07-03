/**
 * Utility function to get the correct image URL based on the environment
 * @param path - The relative path to the image from the public/images directory
 * @returns The full path to the image
 */
export const getImageUrl = (path: string): string => {
  try {
    // In production, we can use the base URL if needed
    if (process.env.NODE_ENV === 'production') {
      return `/images/${path}`;
    }
    // In development, use the same path structure
    return `/images/${path}`;
  } catch (e) {
    console.error(`Error loading image: ${path}`, e);
    // Return a default placeholder image if there's an error
    return '/images/placeholders/image-not-found.png';
  }
};

/**
 * Helper function to get image dimensions from an imported image
 * @param src - The imported image
 * @returns Object containing width and height
 */
export const getImageDimensions = (src: string) => {
  // This is a placeholder - in a real app, you might want to
  // implement actual image dimension detection
  return {
    width: 800,  // Default width
    height: 600  // Default height
  };
};
