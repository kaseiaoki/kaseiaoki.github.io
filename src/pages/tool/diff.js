import { useRouter } from 'next/router'
import Hero from '../../components/hero'
import SeoMeta from '../../foundations/seo-meta'
import { useState, useEffect  } from "react"
import { decompress, share } from "../../lib/diff-share"


const diff = require('diff');
const emojiRegex = require('emoji-regex/RGI_Emoji');

export default function Diff() {
    const pageTitle = "Compare text diff"
    const desc = "This is an online tool for comparing texts. Show the difference between two texts."

    const router = useRouter();
    const [textA, textValueA] = useState("")
    const [textB, textValueB] = useState("")

    useEffect(()=>{
      if(router.query.a || router.query.b) {
        textValueA(decompress(router.query.a));
        textValueB(decompress(router.query.b));
      }
    },[router.query])

    const diffStates = ((primary, comparison) => {
        
        const p = emojiConvertToTofu(primary);
        const c = emojiConvertToTofu(comparison);
        // const p = primary;
        // const c = comparison;
        const td = diff.diffChars(p, c); 
        // const textDiffMain = td.main(p, c); 
        // const tdHtml = td.prettyHtml(textDiffMain); 
        let text = "";
        td.forEach(function(part){
            text += part.added ? '<ins>' + part.value + '</ins>' :
                    part.removed ? '<del>' + part.value + '</del>' :
                    '<span>' + part.value + '</span>';
            
          });
          return text
      })

    const emojiConvertToTofu = ((text) => {
        const regex = emojiRegex();

        let t = text;
        let match;
        while (match = regex.exec(text)) {
            const emoji = match[0];
            t = t.replace(emoji, "□"); // convert to tofu
        }

        return t;
    })

    return (
        <>
        <SeoMeta
            pageTitle = { pageTitle }
            pageDescription = { desc }
            pagePath = {"/tool/diff"}
            // pageImg = {}
            // pageImgWidth = {}
            // pageImgHeight = {}
            // pageCanonical = {}
            // pageFor = {}
         />
        <Hero pageTitle = { pageTitle } subTitle = { desc } />
        <section style={{ padding: '1vw',height: '100vw' }}>
            <div className="columns">
                <div className="column">
                    <textarea value={textA} onChange={(e) => textValueA(e.target.value)} className="textarea is-medium" placeholder="e.g. Hello world"></textarea>
                </div>
                <div className="column">
                    <textarea value={textB} onChange={(e) => textValueB(e.target.value)} className="textarea is-medium" placeholder="e.g. How low, world"></textarea>
                </div>
            </div>
            <div className="buttons">
                <button className="button is-info is-medium is-outlined" onClick={() => (textValueA("") , textValueB(""), history.replaceState('','','diff'))}>Reset</button>
                <button className="button is-link is-medium is-outlined" onClick={() => (share(textA,textB))}>Copy this diff's share link</button>
            </div>
            <div className="columns mt-4">
                <div className="column">
                    <div className="block box is-half">
                        <div className="" dangerouslySetInnerHTML={{ __html: diffStates(textA, textB)}} />
                    </div>
                </div>
                <div className="column">
                    <div className="block box is-half">
                        <div className="" dangerouslySetInnerHTML={{ __html: diffStates(textB, textA)}} />
                    </div>
                </div>
            </div>
        </section>
        <style>
        {`
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
    );
  }