import { useAuth } from '../provider/AuthProvider'
import { useForm } from 'react-hook-form'


const Navigator = ({ types, handleSelect, onSubmit }) => {

    const { register, handleSubmit } = useForm()
    const { signOut, trainer } = useAuth()        
    
    const onSignOut = () => {
        signOut(() => { })
    }    

    const typeOptions = types.map((type) => { 
        return <option className='m-1' value={type.name} key={type.name}>{type.name.charAt(0).toUpperCase() + type.name.slice(1)}</option>
    })
    

    return (

        <nav className='navbar'>
            <div className='d-flex form-container'>
                <form  onChange={handleSubmit(onSubmit)} >
                    <input className='input' type='text' {...register('value')} placeholder='Find a Pokemon...'/>                    
                </form>
             
                    <select onChange={handleSelect}>
                        <option defaultValue value={null}>Select type</option>
                        {typeOptions}
                    </select>
            </div>
            

                <div className='d-flex'>
                    <div>
                        <h4>Hi, {trainer.charAt(0).toUpperCase() + trainer.slice(1)} </h4>
                    </div>                    
                    
                    <button className='btn btn-danger' onClick={onSignOut}><i className="fas fa-sign-out-alt"></i></button>
                </div>                   
        </nav>
    )
}

export default Navigator;