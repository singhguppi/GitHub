import React from 'react';
import {css} from 'glamor'

const NewsItem=({item})=>{
    let news_item=css({
        padding:'20px',
        boxsizing:'border-box',
        borderBottom:'1px solid grey',
        ':hover':{color:'red'},
        '@media(max-width:300px)':{color:'blue'}
    })
    let item_grey=css({
        background:'light grey'
    })
    
    

    
    return(
            <div{...news_item}{...item_grey}>
               <h3>{item.title}</h3>
               <div>
                    {item.feed}
               </div>   
            </div>       
    )
}
 export default NewsItem;            