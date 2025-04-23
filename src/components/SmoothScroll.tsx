'use client'

import { useEffect } from 'react'

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')
      
      if (link?.hash && link.pathname === window.location.pathname) {
        e.preventDefault()
        scrollToHash(link.hash)
      }
    }

    const scrollToHash = (hash: string) => {
      const targetElement = document.querySelector(hash)
      
      if (targetElement) {
        const headerOffset = 80 // Высота фиксированного хедера
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }

    const handleInitialScroll = () => {
      if (window.location.hash) {
        setTimeout(() => {
          scrollToHash(window.location.hash)
        }, 100)
      }
    }

    // Добавляем обработчики событий
    document.addEventListener('click', handleClick)
    handleInitialScroll()

    // Очистка при размонтировании
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return null
} 