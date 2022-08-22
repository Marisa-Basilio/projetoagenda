import './App.css';
import React,{useState, useRef, useEffect} from 'react';
import  { FontAwesomeIco, FontAwesomeIcon }  from '@fortawesome/react-fontawesome'
import  {faCirclePlus, faList, faTrash}  from '@fortawesome/free-solid-svg-icons'
import { v4 as chave } from 'uuid';
import Contato from './Components/Contato';


export default function App(){

  //declarar os estados
  const [contato, setContato] = useState({id:'', nome:'', telefone:'', email:'',})
  const [listaContatos, setListaContatos] = useState([])

  //declarar useRef
  const inputNome = useRef()
  const inputTelefone = useRef()
  const inputEmail = useRef()

  //definir os metodos
  function escrevaNome (event) {
    setContato({...contato, nome: event.target.value})
  } 

  function escrevaTelefone(event) {
    setContato({...contato, telefone: event.target.value})
  } 

  function escrevaEmail(event) {
    setContato({...contato, email: event.target.value})
  }

  
  function adicionarContato() {

    // validar os campos de entrada

    if (contato.nome === "" || contato.telefone === ""  || contato.email === "") {
      console.log("return")
      return
    }


    // verificar se o contato ja existe na lista de contato

    let existente = listaContatos.find((lct) => lct.nome === contato.nome && lct.telefone === contato.telefone && lct.email === contato.email)
    console.log(existente)
    if (typeof existente !== 'undefined') {
      return
    }

    //adicionar novo contato na lista
    setListaContatos([...listaContatos, {...contato, id: chave() }])

    // limpar o contato
    setContato({nome: "", telefone: "", email:""})

    // colocar focus no input nome
    inputNome.current.focus()

  
  }

  //atualizar minha lista de contato no localStorage
  useEffect(() =>{
    if (localStorage.getItem('minha_lista') !== null) {
      setListaContatos(JSON.parse(localStorage.getItem('minha_lista')))
      
    }
  }, [])

  //guardar os contatos no localStorage
  useEffect(() =>{
    localStorage.setItem('miha_lista', JSON.stringify(listaContatos))
  }, [listaContatos])

  //limpar toda minha lista de contato
  function limparStorage() {
    setListaContatos([])
    
  }

  //Remover somente um contato da minha lista
  function removerContato(id) {
    let listTemporaria = listaContatos.filter(lct => lct.id !== id )
    setListaContatos(listTemporaria)
  }

  


  return(
    <>
      
      <div className='container-titulo'>
        <div className='row'>
          <div className='col text-center'>
            <h1 className='tex-center' ><FontAwesomeIcon icon={faList} className='me-3'/>Lista de Contato Marisa Edna Basilio</h1>
          </div>
        </div>
      </div>
      <div className='row justify-content-center formulario' >
        <div className='row' >
          <div className='col p-4' >
            <div className='row justify-content-center' >
              <div className='col-12 col-sm-10 col-md-8 col-lg-6'>
                <div className='mb-3'>
                  <label className='form-label' >Nome:</label><br></br>
                  <input className='form-control' type="text" ref={inputNome} onChange={escrevaNome} value = {contato.nome}/>
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Telefone:</label><br></br>
                  <input type="number" ref={inputTelefone} onChange={escrevaTelefone} value = {contato.telefone} className='form-control' />
                </div>
                <div className='mb-3'>
                  <label className='form-label'>Email:</label> <br></br>
                  <input type="text" ref={inputEmail} onChange={escrevaEmail} value = {contato.email} className='form-control'/>
                </div>
                <div className='row mt-3'>
                  <div className='col text-start' >

                    <button onClick={adicionarContato} className='btn btn-outline-info'>
                      <FontAwesomeIcon icon={faCirclePlus} className='me-2'/>
                      Adicionar
                      </button>
                  </div>
                  <div className='col text-end' >
                    <button onClick={limparStorage} className='btn btn-outline-warning'>
                        <FontAwesomeIcon icon={faTrash} className={'me-2'}/> 
                        Limpar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      
      {listaContatos.map(lct => {
        return<Contato key={lct.id} id={lct.id} nome={lct.nome} telefone={lct.telefone} email={lct.email} remover={removerContato} />
      })}
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>










  );









}



