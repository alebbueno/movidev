/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Menu, X } from 'lucide-react'
import { cn } from "@/lib/utils"
import Link from "next/link"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { name: "Cases", href: "#work" },
    { name: "Serviços", href: "#services" },
    { name: "Sobre", href: "#about" },
    { name: "Contato", href: "#contact" },
    { name: "Blog", href: "/blog" },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
          isScrolled ? "py-4" : "py-6"
        )}
      >
        <div
          className={cn(
            "max-w-7xl mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-6 py-3",
            "glass bg-black/40"
          )}
        >
          <Link href="/" className="text-2xl font-bold tracking-tighter relative z-50">
            movidev<span className="text-blue-400">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/proposta"
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex items-center justify-center md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-8 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-light text-white hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/proposta"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Fale Conosco
            </Link>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
