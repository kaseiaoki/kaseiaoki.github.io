import { useState } from "react";
const textDiff = require('text-diff');

export default function Diff() {
    const [textA, textValueA] = useState("")
    const [textB, textValueB] = useState("")

    const diff = ((primary, comparison) => {
        const td = new textDiff(); // options may be passed to constructor; see below
        const textDiffMain = td.main(primary, comparison); // produces diff array
        const tdHtml = td.prettyHtml(textDiffMain); // produces a formatted HTML string
        console.log(tdHtml);
        return tdHtml
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
                    <div dangerouslySetInnerHTML={{ __html: diff(textA, textB)}} />
                    </div>
                </div>
                <div className="column">
                    <div className="block ml-3">
                        <div dangerouslySetInnerHTML={{ __html:  diff(textB, textA)}} />
                    </div>
                </div>
            </div>
        </section>
        </>
    );
  }