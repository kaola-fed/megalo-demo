const path = require('path')
const contextDir = path.resolve(process.cwd(), '.')
function resolve (...args) {
  return path.resolve(contextDir, ...args)
}

exports.contextDir = contextDir
exports.resolve = resolve
