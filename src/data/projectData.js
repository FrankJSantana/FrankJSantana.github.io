import TipTrack from "../assets/img-projects/tiptrack-collage.png";
import Shorty from "../assets/img-projects/shorty.png";
import Crypto from "../assets/img-projects/dashboard-crypto.png";

export const proyectos = [
  {
    titulo: "Dashboard Crypto - Análisis de Mercado",
    descripcion:
      "Terminal de análisis de criptomonedas de grado institucional. Construido con React, Tailwind CSS v4 y Recharts. Interfaz premium con diseño Glassmorphism, totalmente localizado al español y optimizado para análisis de mercado en tiempo real.",
    imagen: Crypto.src,
    tecnologias: ["React", "Tailwind CSS v4", "Recharts"],
    demo: "https://premium-crypto-terminal.vercel.app/",
    codigo: "https://github.com/FrankJSantana/premium-crypto-terminal",
    categoria: "frontend",
  },
  {
    titulo: "TipTrack - Gestión de Propinas",
    descripcion:
      "App móvil multiplataforma (Full Stack) para digitalizar el flujo de propinas en hostelería. Automatiza recaudación, auditoría y reparto justo. Stack: React Native, Expo, Node.js, Postgres (Neon), Redis, Clerk.",
    imagen: TipTrack.src,
    tecnologias: ["React Native", "Node.js", "PostgreSQL", "Redis"],
    demo: "",
    codigo: "https://github.com/FrankJSantana/TipTrack-React-Native-Expo",
    categoria: "fullstack",
  },
  {
    titulo: "Shorty - Acortador de URLs",
    descripcion:
      "Un acortador de URLs desarrollado con Java 17 y Spring Boot, diseñado demostrando las mejores prácticas de desarrollo backend empresarial. Incluye una interfaz moderna y documentación automática.",
    imagen: Shorty.src,
    tecnologias: ["Java 17", "Spring Boot", "Docker", "PostgreSQL"],
    demo: "",
    codigo: "https://github.com/FrankJSantana/Shorty",
    categoria: "backend",
  },
];
