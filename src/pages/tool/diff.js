import { useState } from "react";

export default function Diff() {
    const [textA, textValueA] = useState()
    const [textB, textValueB] = useState()
    const findDiff = (textA, textB) => {
       console.log(textA, textB)
    };
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
                    <textarea onChange={(e) => textValueA(e.target.value)}  className="textarea is-medium" placeholder="e.g. Hello world"></textarea>
                </div>
                <div className="column">
                    <textarea onChange={(e) => textValueB(e.target.value)} className="textarea is-medium" placeholder="e.g. How low, world"></textarea>
                </div>
            </div>
            
            <button className="button is-primary is-outlined" onClick={() => findDiff(textA, textB)}>Find diff</button>
        </section>
        </>
    );
  }
