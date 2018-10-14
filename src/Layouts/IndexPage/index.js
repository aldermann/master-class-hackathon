import ListMovie from '../../Components/ListMovie';

import React,{Component} from 'react';

export default class IndexPage extends Component{
    render(){
        return (
        <div>
            <h2 style={{margin: "10px auto",textAlign:"center",color:"white"}}>Movies</h2>
            <ListMovie />
        </div>
        );
    }
}