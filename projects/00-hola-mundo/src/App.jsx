import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){

    return (
        <section className='App'>

        <TwitterFollowCard  
             
            userName='midudev'>
          Miguel Ángel Durán 
          </TwitterFollowCard>     
        <TwitterFollowCard 
            userName='pheralb'>
            Pablo Hernadez
            </TwitterFollowCard>
        <TwitterFollowCard   
            userName='PacoHdezs'>
            Paco Hdez
            </TwitterFollowCard>
        <TwitterFollowCard  
            userName='TMChein' >
            Tomas
        </TwitterFollowCard>

        </section>
    )
}  
 

