import React,{Component} from 'react';
//no need to import the dom
import  '../css/styles.css';
class Header extends Component{
   /* state={
        Keywords:''
    }
    inputChangeHandeler=(event)=>{
       this.setState({
           Keywords:event.target.value
       })

    }*/
    render(){ 
       // console.log(this.props.Keywords)
    return (
    <header >
        <div className="logo">logo</div>
        <input type="text"
        onChange={this.props.Keywords}/>
      
        </header>
    ) 
}
    }



export default Header;
