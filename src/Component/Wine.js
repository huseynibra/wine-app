import React,{Component} from "react";


class Wine extends Component {
    render(){
        return(
            <div className="product">
                <h3>{this.props.title}</h3>
                <p>{this.props.description}</p>
                <p>{this.props.rating}</p>
                <p>{this.props.isLike ? <p>&#128147;</p> : null}</p>
            </div>
        )
    }
}

export default Wine