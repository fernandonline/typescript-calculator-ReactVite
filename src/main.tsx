import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyled from './global-styled/globalStyled.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyled/>
    <App/>
  </StrictMode>
)