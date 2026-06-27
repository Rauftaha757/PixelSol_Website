"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * RotatableObject — raw three.js (no plugin / no react-three-fiber).
 *
 * A 360° drag-rotatable "product": a faceted, gem-like form that reads as the
 * PixelSolve sigil made physical. Lit by a WebGL PointLight whose INTENSITY
 * and COLOUR react to scroll position — the "UVC glow" brightens + shifts from
 * cool indigo (top of page) through vermilion (mid) to coral (deep) as you scroll.
 *
 * Guards: SSR-safe (all THREE work guarded to the effect), reduced-motion renders
 * a static SVG fallback (no canvas), touch supports one-finger rotate, and the
 * renderer/geometry/disposed on unmount.
 */
export default function RotatableObject({
  className = "",
}: {
  className?: string;
}) {
  const mountRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const mount = mountRef.current;
    if (!mount) return;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    // ── scene / camera / renderer ───────────────────────────────────────
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // ── the object: an icosahedron with flat facets + a wireframe overlay ──
    const group = new THREE.Group();
    scene.add(group);

    const geo = new THREE.IcosahedronGeometry(1.35, 0); // faceted gem
    const mat = new THREE.MeshStandardMaterial({
      color: 0xebe6d9, // bone-deep
      metalness: 0.35,
      roughness: 0.28,
      flatShading: true,
    });
    const mesh = new THREE.Mesh(geo, mat);
    group.add(mesh);

    const wire = new THREE.LineSegments(
      new THREE.WireframeGeometry(geo),
      new THREE.LineBasicMaterial({
        color: 0xc8412b, // vermilion edges
        transparent: true,
        opacity: 0.35,
      })
    );
    group.add(wire);

    // inner glowing core (the "pixel")
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.42, 1),
      new THREE.MeshBasicMaterial({ color: 0xc8412b })
    );
    group.add(core);

    // ── lights ──────────────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xffffff, 0.35);
    scene.add(ambient);

    // THE scroll-reactive UVC PointLight
    const uvc = new THREE.PointLight(0x7a66e1, 6, 14, 1.6);
    uvc.position.set(2.4, 2, 2.6);
    scene.add(uvc);

    const fill = new THREE.DirectionalLight(0xffffff, 0.6);
    fill.position.set(-3, -1, 2);
    scene.add(fill);

    // coloured helpers so the glow is visible
    const indigo = new THREE.Color(0x7a66e1);
    const vermilion = new THREE.Color(0xc8412b);
    const coral = new THREE.Color(0xf8805f);

    // ── interaction: drag to rotate ─────────────────────────────────────
    const rot = { x: 0, y: 0, vx: 0, vy: 0, target: { x: 0.2, y: 0 } };
    const drag = { active: false, lastX: 0, lastY: 0 };

    const onPointerDown = (e: PointerEvent) => {
      drag.active = true;
      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      mount.setPointerCapture?.(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!drag.active) return;
      const dx = e.clientX - drag.lastX;
      const dy = e.clientY - drag.lastY;
      drag.lastX = e.clientX;
      drag.lastY = e.clientY;
      rot.target.y += dx * 0.01;
      rot.target.x += dy * 0.01;
      rot.target.x = Math.max(-1.1, Math.min(1.1, rot.target.x));
      // impart momentum for inertia
      rot.vy = dx * 0.01;
      rot.vx = dy * 0.01;
    };
    const onPointerUp = (e: PointerEvent) => {
      drag.active = false;
      mount.releasePointerCapture?.(e.pointerId);
    };

    mount.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);

    // ── scroll reactivity ───────────────────────────────────────────────
    let scrollT = 0;
    const onScroll = () => {
      const max = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      scrollT = Math.max(0, Math.min(1, window.scrollY / max));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ── resize ──────────────────────────────────────────────────────────
    const onResize = () => {
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    // ── render loop ─────────────────────────────────────────────────────
    let raf = 0;
    let running = true;
    const onVis = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(loop);
      else cancelAnimationFrame(raf);
    };
    document.addEventListener("visibilitychange", onVis);

    const loop = () => {
      if (!running) return;

      // gentle auto-spin when not dragging + inertia
      if (!drag.active) {
        rot.target.y += 0.0035 + rot.vy * 0.0;
        rot.vy *= 0.94;
        rot.vx *= 0.94;
      }
      rot.x += (rot.target.x - rot.x) * 0.08 + rot.vx * 0.02;
      rot.y += (rot.target.y - rot.y) * 0.08;
      group.rotation.x = rot.x;
      group.rotation.y = rot.y;

      // core pulse
      const s = 1 + Math.sin(performance.now() * 0.002) * 0.08;
      core.scale.setScalar(s);

      // ── scroll-reactive UVC glow ──
      // intensity ramps with scroll; colour walks indigo → vermilion → coral
      uvc.intensity = 4 + scrollT * 9;
      const color =
        scrollT < 0.5
          ? indigo.clone().lerp(vermilion, scrollT * 2)
          : vermilion.clone().lerp(coral, (scrollT - 0.5) * 2);
      uvc.color.copy(color);
      core.material.color.copy(color);

      // light orbits slightly for live specular
      const t = performance.now() * 0.0005;
      uvc.position.x = Math.cos(t) * 2.6;
      uvc.position.z = Math.sin(t) * 2.6 + 1;

      renderer.render(scene, camera);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    // ── cleanup ─────────────────────────────────────────────────────────
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
      mount.removeEventListener("pointerdown", onPointerDown);
      geo.dispose();
      mat.dispose();
      wire.geometry.dispose();
      (wire.material as THREE.Material).dispose();
      core.geometry.dispose();
      (core.material as THREE.Material).dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, [reduce]);

  if (reduce) {
    // static faceted motif fallback
    return (
      <div className={`grid place-items-center ${className}`} aria-hidden>
        <svg viewBox="0 0 200 200" className="h-48 w-48 text-vermilion">
          <polygon
            points="100,15 170,55 170,145 100,185 30,145 30,55"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <polygon
            points="100,15 100,185 30,55 170,145"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.5"
          />
          <circle cx="100" cy="100" r="14" fill="currentColor" />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className={`cursor-grab touch-none active:cursor-grabbing ${className}`}
      aria-label="Draggable 3D object — drag to rotate"
      role="img"
    />
  );
}
