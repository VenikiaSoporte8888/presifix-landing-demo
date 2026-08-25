import { mkdir, writeFile } from 'node:fs/promises'

await mkdir('dist/server', { recursive: true })
await writeFile(
  'dist/server/index.js',
  `export default {\n  async fetch(request, env) {\n    return env.ASSETS.fetch(request)\n  }\n}\n`,
)
