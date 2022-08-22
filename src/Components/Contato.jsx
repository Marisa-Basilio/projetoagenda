import React from 'react'
import './Contato.css'
import  { FontAwesomeIco, FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import  {faUser, faPhoneVolume, faEnvelopeCircleCheck, faTrashAlt}  from '@fortawesome/free-solid-svg-icons'


export default function contato (props) {
    return(


        <div className='component_de_contato' my-4>
            <div className='row'>
                
                <div className='col' p-2> 
                    <h4> 
                        <FontAwesomeIcon icon={faUser} className='me-3'/>
                        {props.nome}
                    </h4>
                </div>

                <div className='col' p-2>
                    <h4>
                        <FontAwesomeIcon icon={faPhoneVolume} className='me-3'/>
                        {props.telefone}
                    </h4>
                </div>
                <div className='col' p-2>
                    <h4>
                        <FontAwesomeIcon icon={faEnvelopeCircleCheck} className='me-3'/>
                        {props.email}
                    </h4>
                </div>
                <div className='col  p-2 text-end'>
                    <FontAwesomeIcon
                        icon={faTrashAlt}
                        className='me-3'
                        onClick={() => {props.remover(props.id)}}
                        
                    />
                    
                </div>
            </div>
        </div>
    );
    
}
