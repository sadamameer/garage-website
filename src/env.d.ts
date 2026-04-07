/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_QUOTE_RECEIVER_EMAIL: string
  readonly VITE_QUOTE_API_URL: string
  readonly VITE_CONTACT_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
