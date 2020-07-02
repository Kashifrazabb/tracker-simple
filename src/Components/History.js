import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';

const History = ({data,handleClear,handleDelete,handleEdit}) => {

    return (
        
        <div id='history'>
            <br/>
            <div id='history-btn-title'>
                <h3>History</h3>
                <h3><Button variant='contained' id='clr-btn' onClick={handleClear}>Clear All</Button></h3>
            </div>
            <br/><hr/><br/>
            <ul>
                {
                
                data.map(item=>
                (item.charge!=='' && item.amount!=='')?<li style={{borderLeft: `5px solid ${(item.amount>0)?'dodgerblue':'red'}`}}>
                    <h3>{item.charge}</h3>
                    <h4>{item.amount}$</h4>
                    <div id='history-btns'>
                        <IconButton id='edit-btn' onClick={()=>handleEdit(item.id)}>
                            <EditIcon />
                        </IconButton>
                        <IconButton id='del-btn' onClick={()=>handleDelete(item.id)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </li>:null)

                }
            </ul>
        </div>
    )
}

export default History;
