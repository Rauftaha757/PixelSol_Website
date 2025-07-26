import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-charcoal-black">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-fog-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-cool-blue mb-6">Page Not Found</h2>
        <p className="text-muted-gray mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center px-6 py-3 bg-steel-gray hover:bg-alt-slate text-fog-white rounded-lg transition-colors duration-200 hover-lift"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 