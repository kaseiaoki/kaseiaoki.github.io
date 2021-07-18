import { useState } from "react";

export default function Diff() {
    const [textA, textValueA] = useState()
    const [textB, textValueB] = useState()

    const diff = ((textA, textB) => {
        console.log(textA, textB)
        return textA
      })

    const restText = (() => {
        textA = ""
        textB = ""
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
            <button className="button is-danger is-outlined" onClick={() => (textValueA("") , textValueB(""))}>Reset</button>
            <div className="columns mt-4">
            <div className="column">
                <div className="block ml-3">
                    {diff(textA, textB)}
                </div>
            </div>
            <div className="column">
                <div className="block ml-3">
                    {diff(textB,textA)}
                </div>
            </div>
        </div>
        </section>
        </>
    );
  }