import Image from 'next/image';
import { getImageUrl } from '@/lib/imageUtils';
import ImageExample from '@/components/ImageExample';

// Product data with the actual images
const products = [
  { id: 1, name: 'Steel Beds', image: 'steel-beds.png' },
  { id: 2, name: 'Steel Furniture', image: 'steel-furniture.png' },
  { id: 3, name: 'Steel Locker', image: 'steel-locker.png' },
  { id: 4, name: 'Steel Pipes', image: 'steel-pipes.png' },
  { id: 5, name: 'Steel Rack', image: 'steel-rack.png' },
  { id: 6, name: 'Steel Rods', image: 'steel-rods.png' },
  { id: 7, name: 'Steel Sheets & Coils', image: 'steel-sheets-coils.png' },
  { id: 8, name: 'TMT Bars', image: 'tmt-bars.png' },
];

export default function TestImagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Image Handling Test Page</h1>
        
        {/* Test Banner Image */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Banner Image</h2>
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={getImageUrl('banners/homepage-banner.jpg')}
              alt="Thangam Steels - Premium Quality Steel Products"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        </section>

        {/* Test Product Images */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Product Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Product Grid */}
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="relative aspect-square mb-4">
                  <Image
                    src={getImageUrl(`products/${product.image}`)}
                    alt={product.name}
                    fill
                    className="object-cover rounded-md"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center">{product.name}</h3>
                <p className="text-gray-600 text-sm text-center">High-quality {product.name.toLowerCase()}</p>
              </div>
            ))}

            {/* Using ImageExample component */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <ImageExample 
                src="products/tmt-bars.png"
                alt="Premium TMT Bars"
                width={400}
                height={300}
              />
              <h3 className="text-lg font-medium text-gray-900 mt-4 text-center">Featured Product</h3>
              <p className="text-gray-600 text-center">Using the pre-built ImageExample component</p>
            </div>

            {/* Test missing image fallback */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="relative aspect-square mb-4">
                <Image
                  src={getImageUrl('products/non-existent-image.jpg')}
                  alt="This image will show the fallback"
                  fill
                  className="object-cover rounded-md"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center">Fallback Test</h3>
              <p className="text-gray-600 text-center">Shows placeholder when image is missing</p>
            </div>
          </div>
        </section>

        {/* Image with different sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Responsive Images</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Large (16:9)</h3>
              <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md">
                <Image
                  src={getImageUrl('banners/homepage-banner.jpg')}
                  alt="Responsive Banner"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Square (1:1)</h3>
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-lg overflow-hidden shadow-md">
                <Image
                  src={getImageUrl('products/steel-sheets-coils.png')}
                  alt="Steel Sheets & Coils"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Image with lazy loading */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lazy Loading</h2>
          <div className="space-y-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Scroll down item {i + 1}</h3>
                <div className="relative w-full h-48 md:h-64 rounded-md overflow-hidden">
                  <Image
                    src={getImageUrl(`products/${products[i % products.length].image}`)}
                    alt={`${products[i % products.length].name} - Lazy loaded`}
                    fill
                    className="object-cover"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <p className="mt-3 text-gray-600">
                  This image is lazy loaded. Check the network tab as you scroll.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
