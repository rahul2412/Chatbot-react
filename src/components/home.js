import React from 'react';
import '../styles/home.css'
import Bot from './bot'
import { connect } from 'react-redux';
import avatar from '../images/bot.png';
import services from '../images/services.jpg'
import {stateChange} from '../redux/actions/action'

class Home extends React.Component {

    constructor(props) {
        super(props);
        
        this.toggleApp = this.toggleApp.bind(this);
        
    }

    toggleApp(app_state) {
        
        this.props.changeState(app_state);
    }

   
    render() {
        return (

            <div>
                {this.props.app_state==="home"? (
                    <div className="box">
                        <div className="header">
                         <i className="fa fa-close" onClick={()=>this.toggleApp("closed")} ></i>
                        
                            <h2>Botsy</h2>
                            <img src={avatar} alt="avatar" /> <br/><br/></div>
                        <div className="askQuestion" onClick={()=>this.toggleApp("inbox")}><b>Chat with Botsy</b></div><br/><br/>
                        <p className="aboutUs">We offer mutiple services-<img src={services} alt="services"/></p>


                    </div>): (<Bot/>)}

                    </div>
            

        );
    }
}
const mapStateToProps = state => {
    return {
        messageFromBot: state.messageFromBot,
        app_state: state.app_state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeState:(new_state)=> dispatch(stateChange(new_state))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);