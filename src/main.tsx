import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// On a page reload/refresh, always land at the top of the current page
// (strip any #hash and don't let the browser restore the old scroll position).
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
try {
  const navType = (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming)?.type
  if (navType === 'reload' && window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search)
  }
} catch {
  /* ignore */
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
