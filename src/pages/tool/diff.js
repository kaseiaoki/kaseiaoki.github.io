import { useRouter } from 'next/router';
import { useState } from "react";
import {encode, decode} from 'url-safe-base64'

const diff = require('diff');
const rawinflate = require('zlibjs/bin/rawinflate.min.js').Zlib
const rawdeflate = require('zlibjs/bin/rawdeflate.min.js').Zlib
const ab2str = require('arraybuffer-to-string')
const Buffer = require('buffer').Buffer;

const emojiRegex = require('emoji-regex/RGI_Emoji');
export default function Diff() {
    const router = useRouter();
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
    
    const compress = (function (val) {
        const encoder = new TextEncoder()
        const encoded = encoder.encode(val)
        const compressed = new rawdeflate.RawDeflate(encoded).compress()
        return compressed;
    })

    const decompress = (function (compressed) {
        const buffer = Buffer.from(decode(compressed), 'base64')     
        const inflate = new rawinflate.RawInflate(buffer);
        const decompress = inflate.decompress();
        return ab2str(decompress);
    })

    const share = (function () {
            const compressedA = compress(textA)
            const compressedB = compress(textB)
            history.replaceState('','',"diff?a=" + encode(ab2str(compressedA, "base64")) + "&b=" + encode(ab2str(compressedB, "base64")))
            navigator.clipboard.writeText(location.href);
        }
    )
    

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
                    <textarea value={textA === "" && router.query.a ? decompress(router.query.a) : textA} onChange={(e) => textValueA(e.target.value)} className="textarea is-medium" placeholder="e.g. Hello world"></textarea>
                </div>
                <div className="column">
                    <textarea value={textB === "" && router.query.b ? decompress(router.query.b) : textB} onChange={(e) => textValueB(e.target.value)} className="textarea is-medium" placeholder="e.g. How low, world"></textarea>
                </div>
            </div>
            <div className="buttons">
                <button className="button is-info is-medium is-outlined" onClick={() => (textValueA("") , textValueB(""))}>Reset</button>
                <button className="button is-link is-medium is-outlined" onClick={() => (share())}>Copy this diff's share link</button>
            </div>
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