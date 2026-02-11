
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="bg-light-grey h-screen w-full flex flex-col justify-center items-center font-montserrat text-maroon p-8 text-center">
      <h2 className="font-heading text-6xl md:text-8xl tracking-widest mb-4">404</h2>
      <p className="text-xl md:text-2xl mb-8 font-medium">Page Not Found</p>
      <p className="text-[#2E2E2E] mb-12 max-w-md">Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved.</p>
      <Link href="/" className="px-12 py-4 bg-maroon text-white rounded-full hover:bg-maroon-dark transition-colors duration-300 text-lg tracking-wider uppercase font-medium shadow-lg hover:shadow-xl">
        Return Home
      </Link>
    </div>
  );
}
