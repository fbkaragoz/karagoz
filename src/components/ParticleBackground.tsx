"use client";

import { useCallback, useMemo } from "react";
import Particles from "@tsparticles/react";

export default function ParticleBackground() {
  const particlesLoaded = useCallback(async () => {
    // Optional callback when particles are loaded
  }, []);

  // Simplified particle options to avoid type errors
  const particleOptions = useMemo(() => ({
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: {
          enable: true,
        },
      },
      modes: {
        push: {
          quantity: 2,
        },
        repulse: {
          distance: 150,
          duration: 0.3,
        },
      },
    },
    particles: {
      color: {
        value: "#00ffff",
      },
      links: {
        color: "#00ffff",
        distance: 120,
        enable: true,
        opacity: 0.15,
        width: 0.8,
      },
      move: {
        enable: true,
        random: false,
        speed: 0.8,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 50,
      },
      opacity: {
        value: 0.25,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.8, max: 2.5 },
      },
    },
    detectRetina: true,
  }), []);

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      className="absolute inset-0 -z-10"
      options={particleOptions}
    />
  );
} 