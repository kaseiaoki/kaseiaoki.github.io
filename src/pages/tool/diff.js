import { useRouter } from 'next/router'
import Hero from '../../components/hero'
import ResultBlock from '../../components/result-block'
import SeoMeta from '../../foundations/seo-meta'
import { useState, useEffect } from 'react'
import { decompress, share } from '../../lib/diff-share'
import SideMenu from '../../components/side-menu'
import { encode } from 'html-entities'

const diff = require('diff')

export default function Diff() {
  const pageTitle = 'Compare text diff'
  const desc = 'This is an online tool for comparing texts. Show the difference between two texts.'

  const router = useRouter()
  const [textA, textValueA] = useState('')
  const [textB, textValueB] = useState('')

  useEffect(() => {
    if (router.query.a || router.query.b) {
      textValueA(decompress(router.query.a))
      textValueB(decompress(router.query.b))
    }
  }, [router.query])

  const diffStates = (primary, comparison) => {
    const p = encode(primary)
    const c = encode(comparison)
    const td = diff.diffChars(p, c)

    let text = ''
    td.forEach(function (part) {
      text += part.added
        ? '<ins>' + part.value + '</ins>'
        : part.removed
        ? '<del>' + part.value + '</del>'
        : '<span>' + part.value + '</span>'
    })
    return text
  }

  return (
    <>
      <SeoMeta pageTitle={pageTitle} pageDescription={desc} pagePath={'/tool/diff'} />
      <Hero pageTitle={pageTitle} subTitle={desc} />
      <section style={{ padding: '1vw', height: '100vw' }}>
        <div className='columns'>
          <div className='column'>
            <textarea
              value={textA}
              onChange={(e) => textValueA(e.target.value)}
              className='textarea is-medium'
              placeholder='e.g. Hello world'
            ></textarea>
          </div>
          <div className='column'>
            <textarea
              value={textB}
              onChange={(e) => textValueB(e.target.value)}
              className='textarea is-medium'
              placeholder='e.g. How low, world'
            ></textarea>
          </div>
        </div>
        <div className='buttons'>
          <button
            className='button is-info is-medium is-outlined'
            onClick={() => (textValueA(''), textValueB(''), history.replaceState('', '', 'diff'))}
          >
            Reset
          </button>
          <button
            className='button is-link is-medium is-outlined'
            onClick={() => share(textA, textB)}
          >
            Copy this diff`&aposs share link
          </button>
        </div>
        <div className='columns mt-4'>
          <div className='column is-half'>
            <ResultBlock result={diffStates(textA, textB)} />
          </div>
          <div className='column is-half'>
            <ResultBlock result={diffStates(textA, textB)} />
          </div>
        </div>
      </section>
      <style>
        {`
         textarea {
          white-space: pre;
          overflow-wrap: normal;
          overflow-x: auto;
         }
        `}
      </style>
    </>
  )
}
