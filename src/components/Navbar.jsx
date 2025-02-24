"use client"

import { useState } from "react"
import { Menu, Search } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4">
        {/* Mobile menu button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 hover:bg-accent rounded-md">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </button>

        {/* Mobile menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
            <div className="fixed left-0 top-0 h-full w-[300px] bg-background p-6 shadow-lg">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 p-2 hover:bg-accent rounded-md"
              >
                ✕
              </button>
              <nav className="flex flex-col gap-4 mt-8">
                <a
                  href="#brand"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Brand
                </a>
                <a
                  href="#gallery"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Gallery
                </a>
                <a
                  href="#compare"
                  className="text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Compare
                </a>
              </nav>
            </div>
          </div>
        )}

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-8">
          <div className="flex items-center gap-8">
            <a href="#brand" className="text-sm font-medium transition-colors hover:text-primary">
              Brand
            </a>
            <a href="#gallery" className="text-sm font-medium transition-colors hover:text-primary">
              Gallery
            </a>
          </div>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <a href="#home" className="text-xl font-bold tracking-tight">
            GearShift Garage
          </a>
        </div>

        {/* Right section */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-center lg:gap-8">
          <div className="flex items-center gap-8">
            <a href="#compare" className="text-sm font-medium transition-colors hover:text-primary">
              Compare
            </a>
            <div className="relative">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              <input
                type="search"
                placeholder="Search"
                className="h-9 w-[200px] rounded-md border border-input bg-transparent px-8 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

