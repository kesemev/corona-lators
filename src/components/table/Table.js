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










// class Table extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       users: [],
//       isLoading: false,
//       isError: false
//     }
//   }


//   async componentDidMount() {
//     this.setState({ isLoading: true })
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     if (response.ok) {
//       const users = await response.json()
//       this.setState({ users, isLoading: false })
//     } else {
//       this.setState({ isError: true, isLoading: false })
//     }
//   }

//   renderTableHeader = () => {
//     return Object.keys(this.state.users[0]).map(attr => <th key={attr}>{attr.toUpperCase()}</th>)
//   }

//   render() {
//     const { users, isLoading, isError } = this.state

//     if (isLoading) {
//       return <div>Loading...</div>
//     }

//     if (isError) {
//       return <div>Error</div>
//     }

//     return users.length > 0
//       ? (
//         <table>
//           <thead>
//             <tr>
//               {this.renderTableHeader()}
//             </tr>
//           </thead>
//           <tbody>
//             {this.renderTableRows()}
//           </tbody>
//         </table>
//       ) : (
//         <div>
//           No users.
//       </div>
//       )
//   }



// }



// export default Table;