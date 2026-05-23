/**
 * PortfolioStatic emitter
 * Copies everything from project-root `static/` directory directly into `public/`.
 * This allows serving front-portfolio HTML pages and assets at the root URL level.
 */
import { FilePath, joinSegments } from "../../util/path"
import { QuartzEmitterPlugin } from "../types"
import fs from "fs"
import { glob } from "../../util/glob"
import { dirname } from "path"

export const PortfolioStatic: QuartzEmitterPlugin = () => ({
  name: "PortfolioStatic",
  async *emit({ argv, cfg }) {
    const staticPath = "static" // project root's static/ directory
    const outputPath = argv.output // public/

    // Check if static/ directory exists
    try {
      await fs.promises.access(staticPath)
    } catch {
      return // static/ doesn't exist, skip
    }

    const fps = await glob("**", staticPath, cfg.configuration.ignorePatterns)

    for (const fp of fps) {
      const src = joinSegments(staticPath, fp) as FilePath
      const dest = joinSegments(outputPath, fp) as FilePath
      await fs.promises.mkdir(dirname(dest), { recursive: true })
      await fs.promises.copyFile(src, dest)
      yield dest
    }
  },
  async *partialEmit() {},
})
