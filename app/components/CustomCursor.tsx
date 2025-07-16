"use client"

import { useEffect, useRef } from "react"

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const isTouch = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  useEffect(() => {
    if (isTouch) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let targetX = x;
    let targetY = y;
    let rafId: number;
    const speed = 0.2;
    const move = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };
    const animate = () => {
      x += (targetX - x) * speed;
      y += (targetY - y) * speed;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    window.addEventListener('mousemove', move);
    rafId = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(rafId);
    };
  }, [isTouch]);
  if (isTouch) return null;
  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: '#60a5fa',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 1,
        transition: 'background 0.2s',
      }}
    />
  );
} 