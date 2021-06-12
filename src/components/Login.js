import { useHistory } from 'react-router-dom'
import { useAuth } from '../provider/AuthProvider'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'


const Login = () => {
    
    const { register, handleSubmit } = useForm()
    const { signIn, trainer } = useAuth()
    const history = useHistory()

    const onSubmit = (values) => {        
        signIn(values.trainer, () => { })
        
    }

    useEffect( () => {
        if (trainer) {                        
            history.push('/pokedex')
        }
    }, [trainer, history])
    
   
    return (
        <form className='login-container' onSubmit={handleSubmit(onSubmit)}>

            <img className='pokemon-logo' alt='pokemon-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png'/>                    
            
            <h1>Welcome! </h1>
            
            <input placeholder='Add your name' {...register('trainer')}/>

            <button>Log in</button>            

        </form>
    )
}

export default Login