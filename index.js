import React from 'react'

export default class Content extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return <div>

          {
            this.props.getTopGames.map((el)=>{
              return  <a href={el.box_art_url}  > <img src={el.box_art_url} style={{border: '3px solid BlueViolet'}}></img> </a>
            })
          }
      </div>
    }
    
}