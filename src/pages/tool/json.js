import Hero from '../../components/hero'
import SeoMeta from '../../foundations/seo-meta'
import { useState } from 'react'
import { john } from '../../lib/john'

export default function Json() {
  const pageTitle = 'JSON processor'
  const desc = 'JSON processor..?'

  const [filter, filterValue] = useState('')
  const [inputedJSON, jsonValue] = useState('')

  const applyJSONFilter = (inputedJSON, filter) => {
    if (!inputedJSON) return ''
    try {
      JSON.parse(inputedJSON)
    } catch (e) {
      return ''
    }
    const json = JSON.parse(inputedJSON)
    if (!filter) return JSON.stringify(json, null, '\t')
    return john(json, filter)
  }

  return (
    <>
      <SeoMeta pageTitle={pageTitle} pageDescription={desc} pagePath={'/tool/diff'} />
      <Hero pageTitle={pageTitle} subTitle={desc} />
      <section style={{ padding: '1vw', height: '100vw' }}>
        <div className='columns'>
          <div className='column'>
            <lable className='label'>Filter</lable>
            <input
              className='input mb-4'
              type='text'
              placeholder='Filter'
              value={filter}
              onChange={(e) => filterValue(e.target.value)}
            />
            <lable className='label'>JSON</lable>
            <textarea
              value={inputedJSON}
              onChange={(e) => jsonValue(e.target.value)}
              className='textarea is-medium'
              rows='13'
              placeholder='JSON'
            ></textarea>
          </div>
          <div className='column'>
            <lable className='label'>Result</lable>
            <textarea
              readOnly
              value={applyJSONFilter(inputedJSON, filter)}
              rows='20'
              placeholder='Result'
              className='textarea is-medium'
            ></textarea>
          </div>
        </div>
        <style>
          {`
         textarea {
          white-space: pre;
          overflow-wrap: normal;
          overflow-x: auto;
        `}
        </style>
      </section>
    </>
  )
}
