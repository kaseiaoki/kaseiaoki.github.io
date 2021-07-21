import { useState } from "react";
const textDiff = require('text-diff');
const diff = require('diff');

const emojiRegex = require('emoji-regex/RGI_Emoji');
export default function Diff() {
    const [textA, textValueA] = useState("")
    const [textB, textValueB] = useState("")

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
        <section>
            <div className="hero">
            <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="is-size-1 is-family-sans-serif title">Diff checker</h1>
                </div>
            </div>
            </div>
        </section>
        <section style={{ padding: '1vw',height: '100vw' }}>
            <div className="columns">
                <div className="column">
                    <textarea value={textA} onChange={(e) => textValueA(e.target.value)} className="textarea is-medium" placeholder="e.g. Hello world"></textarea>
                </div>
                <div className="column">
                    <textarea value={textB} onChange={(e) => textValueB(e.target.value)} className="textarea is-medium" placeholder="e.g. How low, world"></textarea>
                </div>
            </div>
            <button className="button is-info is-medium is-outlined" onClick={() => (textValueA("") , textValueB(""))}>Reset</button>
            <div className="columns mt-4">
                <div className="column">
                    <div className="block ml-3">
                    <div dangerouslySetInnerHTML={{ __html: diffStates(textA, textB)}} />
                    </div>
                </div>
                <div className="column">
                    <div className="block ml-3">
                        <div dangerouslySetInnerHTML={{ __html:  diffStates(textB, textA)}} />
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