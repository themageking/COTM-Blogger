// tailwind.config.ts - Versão Final e Limpa para v4
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // A seção 'theme' pode ficar vazia ou ser removida se não houver outras customizações.
  theme: {},
  plugins: [],
}
export default config