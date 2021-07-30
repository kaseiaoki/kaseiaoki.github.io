import { encode, decode } from 'url-safe-base64'
const rawinflate = require('zlibjs/bin/rawinflate.min.js').Zlib
const rawdeflate = require('zlibjs/bin/rawdeflate.min.js').Zlib
const ab2str = require('arraybuffer-to-string')
const Buffer = require('buffer').Buffer

export function compress(val) {
  const encoder = new TextEncoder()
  const encoded = encoder.encode(val)
  const compressed = new rawdeflate.RawDeflate(encoded).compress()
  return compressed
}

export function decompress(compressed) {
  const buffer = Buffer.from(decode(compressed), 'base64')
  const inflate = new rawinflate.RawInflate(buffer)
  const decompress = inflate.decompress()
  return ab2str(decompress)
}

export function share(textA, textB) {
  const compressedA = compress(textA)
  const compressedB = compress(textB)
  history.replaceState(
    '',
    '',
    'diff?a=' +
      encode(ab2str(compressedA, 'base64')) +
      '&b=' +
      encode(ab2str(compressedB, 'base64')),
  )
  navigator.clipboard.writeText(location.href)
}
