import { Route, Switch } from 'react-router-dom'

import Login from './Login'
import Pokedex from './Pokedex'
import Pokemon from './Pokemon'
import NoMatch from './NoMatch'
import ProtectedRoute from './ProtectedRoute'

const Routes = () => {    

    
    return (
        <Switch>
            <Route path='/' exact component={Login}/>
            <ProtectedRoute path='/pokedex' exact > 

            <Pokedex />
            </ProtectedRoute>
            <Route path='/pokedex/pokemon/:PokemonName' component={Pokemon}/>
            <Route path='*' component={NoMatch}/>            
            
            {/* <Route path='/' exact>
                <Login />
            </Route>

            <ProtectedRoute path='/pokedex' exact>
                <Pokedex/>
            </ProtectedRoute> */}
        </Switch>
    )
}

export default Routes