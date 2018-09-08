import React,{Component} from 'react';
import ReactDom from 'react-dom';
import JSON from './db.json';
//components
import Header from './components/header';
import NewsList from './components/news_list';

class App extends Component{
    state={ 
        news:JSON,
        filtered:[]
    }
    getKeyword=(event)=>{
        console.log(event.target.value)
        let keyword=event.target.value;
        let filtered=this.state.news.filter((item)=>{
            return item.title.indexOf(keyword)>-1
        })
       this.setState({
            filtered
        })
        console.log(filtered)
    }
     render(){
        
      return(
        
                <div>
                  <Header Keywords = {this.getKeyword}
                  />
                  <NewsList news={this.state.filtered.length === 0   ? this.state.news:this.state.filtered}>
                  <h1>The news are:</h1>
                  </NewsList>
                </div>    
      )
    }   
}


ReactDom.render(<App/>,document.querySelector('#root'))