import { DivIcon } from 'leaflet';
import React, { useState, useEffect } from 'react';
import Datatable from "./Datatable.js";

require("es6-promise").polyfill();
require("isomorphic-fetch");

 export default function Table({ data, search }) {
    const [q, setQ] = useState("");

    useEffect(() => {
        search(q)
    }, [q])

     return (
            <div>
                <div>
                    <input type="text" value={q} onChange={(e) => setQ(e.target.value)} />
                </div>
                <div>
                    <Datatable data={data} />
                </div>
            </div>

     );
 }

