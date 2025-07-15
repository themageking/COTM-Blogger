// Versão CORRETA
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <--- A correção está aqui
    autoprefixer: {},
  },
}
export default config