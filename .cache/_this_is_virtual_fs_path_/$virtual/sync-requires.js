
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/philippeparis/Desktop/Ejercicio/pokemones/.cache/dev-404-page.js")),
  "component---src-pages-index-jsx": preferDefault(require("/Users/philippeparis/Desktop/Ejercicio/pokemones/src/pages/index.jsx"))
}

