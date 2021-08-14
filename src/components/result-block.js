import profilePic from '../../public/icon.png'
import Link from 'next/link'
const xss = require('xss')

const ResultBlock = ({ result }) => {
  console.log(result)
  return (
    <>
      <div className='block box'>
        <div className='' dangerouslySetInnerHTML={{ __html: xss(result) }} />
      </div>
      <style>
        {`
         textarea {
          white-space: pre;
          overflow-wrap: normal;
          overflow-x: auto;
         }
          span {
             font-size: 1.5em;   
          }
          ins {
             background-color: hsl(141, 53%, 53%, 55%);
             font-size: 1.6em;
             text-decoration: none;
          }
          del {
             background-color: hsl(348, 100%, 61%, 55%);
             font-size: 1.6em;
          }
        `}
      </style>
    </>
  )
}

export default ResultBlock
