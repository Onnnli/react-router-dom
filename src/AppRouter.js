import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import UsersContainer from './containers/UsersContainer'
import { users } from './helpers/Users'


const AppRouter = props => {
    return (
       <header >
           <div className="container wrapper">
            
           <Router>
               <nav>
                   {users.map(item => {
                       return( 
                       <li key={item.id}>
                            <Link to={`/id${item.id}`} name={item.name} >   {`${item.name}`}  </Link>  
                        </li>
                        )}
                    )}
               </nav>   
                <Switch>
                    <Route  path='/:id' component={(props) =>  <UsersContainer {...props} user={users}/> }  />
                </Switch>
           </Router>
           </div>
       </header>
    )
}

export default AppRouter;