import React from 'react';
const IncNum=()=>{
    console.log('click'+count++);
}
let count=1;
const Hooks=()=>{
return(
<>
    <h1>{count}</h1>
    <button onClick={IncNum}>Click me</button>
</>
);
};
export default Hooks;