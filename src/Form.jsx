import React, {Component} from "react";
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : "",
            globalTitle : "Hello world !"
        }
        
        
    }
    onChange = (event) =>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    onSubmit = (event) =>{
        event.preventDefault();
        this.setState({
            globalTitle : this.state.title
        })
        console.log("Titre Changé")
    }
    render() {
        return(
            <div className="Form">
            <h1>Mon formulaire {this.state.globalTitle}</h1>
            <h2>{this.state.title}</h2>
            <form  onSubmit={this.onSubmit}>
                <fieldset>
                    <legend>Complet this form please</legend>
                    <label htmlFor="title">Your name here : </label>
                    <input name="title" type="text" id="title" onChange={this.onChange} value={this.state.title}/>
                    <input type="submit" value="En voiture Simone !" />
                </fieldset>
            </form>
            
            {console.log("formulaire rendu")}
            </div>
            
        )
        
    }
    
}

export default Form;