import React,{useState} from 'react';
import Rist from './Rist';
import './Card.css';
const Card=()=>{
    const[name,setName]=useState('Name');
    const[job,setJob]=useState('Title');
    const[about,setAbout]=useState('kuch');



    return(
        <>
        <div className='Card'>
            <div className='Card1'>
            <Rist name={'punit'} job={'google'} about={'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language'}/>
            </div>
            <div className='Card2'>
            <Rist name={'Shivam'} job={'MicroSoft'} about={'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language'}/>
            
            </div>
            <div className='Card3'>
            <Rist name={'Mukund'} job={'Amazon'} about={'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language'}/>
            </div>
            <div className='Card4'>
            <Rist name={'Udit'} job={'Amazon'} about={'EngineerA paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language'}/>
            
            </div>
            <div className='Card5'>
            <Rist name={'rakesh'} job={'flipkart'} about={'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language'}/>
            </div>
            <div className='Card6'>
            <Rist name={'akshay'} job={'walmart'} about={'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language'}/>
            </div>
            
        </div>
        <div>
        <button><span>add</span></button>
        </div>
        
        </>
        
    );
};
export default Card;