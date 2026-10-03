import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logo */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-8 lg:py-12">
          <div className="flex items-center">
            <img src="/logo.png" alt="GraphoryBD Logo" className="h-16 w-auto" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 lg:px-8 pt-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-4 lg:gap-8 items-center">
            <div className='space-y-6'>
              <div className="space-y-1">
                <h1 className="font-oswald font-medium text-[138px] leading-none" style={{ color: '#B2C73A' }}>
                  OOPS!
                </h1>
                <h2 className="font-oswald font-medium text-[34px] leading-tight" style={{ color: '#363A25' }}>
                  UNDER CONSTRUCTION
                </h2>
              </div>
              <div className='space-y-2'>
                <p className="font-questrial font-normal text-[24px] leading-relaxed" style={{ color: '#363A25' }}>
                  The website is temporarily being upgraded and will be available again soon.
                </p>
                <a href="mailto:graphory.bd@gmail.com" className="flex items-center space-x-2 hover:opacity-70 transition-opacity">
                  <svg className="w-5 h-5" style={{ color: '#363A25' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="font-questrial font-normal text-[16px]" style={{ color: '#363A25' }}>
                    graphory.bd@gmail.com
                  </p>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="/desktop.png"
                alt="Desktop View"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
