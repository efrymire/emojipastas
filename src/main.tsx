import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ComingSoon from './ComingSoon'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main>
      <ComingSoon />
    </main>
  </StrictMode>,
)
