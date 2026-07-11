import { useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { ScrollProgress } from './components/ScrollProgress'
import { CustomCursor } from './components/CustomCursor'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Home } from './pages/Home'

// Code-split secondary routes so the landing page ships less JS.
const WorkPage = lazy(() => import('./pages/WorkPage').then((m) => ({ default: m.WorkPage })))
const ProjectPage = lazy(() => import('./pages/ProjectPage').then((m) => ({ default: m.ProjectPage })))
const NotFound = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })))

// Scroll to hash anchors (via Lenis when available), else top on route change.
function HashScroll() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash) as HTMLElement | null
      if (el) {
        requestAnimationFrame(() => {
          if (window.__lenis) window.__lenis.scrollTo(el, { offset: -80 })
          else el.scrollIntoView({ behavior: 'smooth' })
        })
      }
    }
  }, [pathname, hash])
  return null
}

// Fade/slide each route in. Keyed on pathname so it re-animates on navigation.
function AnimatedRoutes() {
  const location = useLocation()
  return (
    <div key={location.pathname} className="route-fade">
      <Suspense fallback={<div className="min-h-[70vh]" />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default function App() {
  useSmoothScroll()
  return (
    <BrowserRouter>
      <ScrollProgress />
      <CustomCursor />
      <HashScroll />
      <Nav />
      <main>
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  )
}
