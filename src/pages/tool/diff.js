import { useState } from "react";

export default function Diff() {
    const [valueA, valueB] = "";
    const findDiff = () => {
       
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
                    <textarea value={valueA} className="textarea is-medium" placeholder="e.g. Hello world"></textarea>
                </div>
                <div className="column">
                    <textarea value={valueB} className="textarea is-medium" placeholder="e.g. How low, world"></textarea>
                </div>
            </div>
            
            <button className="button is-primary is-outlined" onClick={findDiff}>Find diff</button>
        </section>
        </>
    );
  }
