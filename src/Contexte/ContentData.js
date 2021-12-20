import React, {useContext} from 'react'
import { UserContext, ColorContext } from './MyContext'

const ContentData = () => {

    const user = useContext(UserContext);
    const color = useContext(ColorContext);

    return(
        <div style={{color}}>
            <ul>
                <li>Nom: {user.name} </li>  
                <li>Age: {user.age} </li>
            </ul>     
        </div>
    )

    // Le return ci-dessous sans le useContex, ce qui le rend trop encombrant 
    // return (
    //     <UserContext.Consumer>
    //         {
    //             user => {
    //                 return(
    //                     <ColorContext.Consumer>
    //                         {
    //                             color => {
    //                                 return(
    //                                     <div style={{color}}>
    //                                         <ul>
    //                                             <li>Nom: {user.name} </li>  
    //                                             <li>Age: {user.age} </li>
    //                                         </ul>     
    //                                     </div>
    //                                 )
    //                             }
    //                         }
    //                     </ColorContext.Consumer>
    //                 )
    //             }
    //         }
    //     </UserContext.Consumer>
    // )
}

export default ContentData
