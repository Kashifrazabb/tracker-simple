import React,{useState} from 'react';
import uuid from 'uuid/dist/v4';
import Header from './Components/Header';
import Total from './Components/Total';
import IncomeExpenseTotal from './Components/IncomeExpenseTotal';
import History from './Components/History';
import Form  from './Components/Form';
import Footer from './Components/Footer';
import Alert from './Components/Alert';


function App() {
  // Hooks
  const [charge,setCharge]=useState('');
  const [amount,setAmount]=useState('');
  const [data,setData]=useState([{charge:'',amount:''}]);
  const [btnText,setBtnText]=useState(false);
  const [ID,setID]=useState(0);
  const [alert,setAlert]=useState({show:false,text:'',type:''});
 //Handles
 const handleCharge=e=>setCharge(e.target.value);
 const handleAmount=e=>setAmount(e.target.value);
 const handleAlert=({type,text})=>{
  setAlert({show:true,text,type})
  setTimeout(()=>setAlert({show:false}),1000)
}
 const handleClear=()=>{
   setData([]);
   handleAlert({type:'cleared',text:'Item(s) Cleared Successfully! 😊'})}
 const handleDelete=id=>setData(data.filter(item=>item.id!==id));
 const handleEdit=id=>{
   const {charge,amount}=data.find(item=>item.id===id);
   setCharge(charge);
   setAmount(amount);
   setBtnText(true);
   setID(id);
 } 
 const handleSubmit=e=>{
   e.preventDefault();
   setCharge('');
   setAmount('');
   if (charge!=='' && amount!==''){
     if (btnText){
       setData(data.map(item=>item.id===ID?{id:ID,charge,amount:parseInt(amount)}:item))
       setBtnText(false);
     }
     else{
     setData([{id:uuid(),charge,amount:parseInt(amount)},...data])}
     handleAlert({type:'success',text:'Item Added Successfully! ❤️'})
     }
     else{
      handleAlert({type:'fail',text:'Invalid Input(s); Look again! 😉'})
     }
   
 }

const income=data.map(item=>item.amount).filter(item=>item>0).reduce((acc,curr)=>acc+=curr,0)
const expense=data.map(item=>item.amount).filter(item=>item<0).reduce((acc,curr)=>acc+=curr,0)

  return (
    <div id='wrapper'> {/* For Padding  */}
          <Header/>
          <Total income={income} expense={expense}/>
          <IncomeExpenseTotal data={data} income={income} expense={expense}/>
          <History data={data} handleClear={handleClear} handleDelete={handleDelete}
          handleEdit={handleEdit}/>
          <Form charge={charge} amount={amount} handleAmount={handleAmount} 
          handleCharge={handleCharge} handleSubmit={handleSubmit} btnText={btnText}/>
          <Footer/>
          <Alert type={alert.type} text={alert.text}/>
    </div>
  );
}

export default App;
