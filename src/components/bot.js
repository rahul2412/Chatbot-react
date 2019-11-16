import React from 'react';
import '../styles/bot.scss'
import { connect } from 'react-redux';
import {addMessage} from '../redux/actions/action'
import avatar from '../images/bot.png'
import {stateChange} from '../redux/actions/action'

class Bot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMessage: ""

        }

        this.currentMessage = this.currentMessage.bind(this);
        this.messageSend = this.messageSend.bind(this);
        this.toggleApp = this.toggleApp.bind(this);

    }

    currentMessage(e) {
        this.setState({ currentMessage: e.target.value });
    }
    messageSend() {

        this.props.onLoginClick(this.state.currentMessage);
    }

    toggleApp(app_state) {
        
        this.props.changeState(app_state);
    }

    render() {

        return (
            <div className="bot-box">
                <div className="header">
              <span><i className="fa fa-close" onClick={()=>this.toggleApp("closed")} ></i>
                <i className="fa fa-arrow-left" onClick={()=>this.toggleApp("home")}></i></span> 
                <div className="avatar"><img src={avatar} alt="avatar" /><b className="avatarName">Botsy</b>
                <hr />
                </div></div>
                
                <div className="inner">

                <div className="chat">
                    <li class="botMessage"><b className="botMessage">{this.props.messageFromBot}</b></li>
                    {this.props.messageFromUser.map(message => <li className="userMessage"> {message}</li>)}

                </div>
                <div className="send">
                    <input type="text" className="textbox" placeholder="Enter message..." onChange={this.currentMessage} value={this.state.currentMessage} />
                    <i class="fa fa-paper-plane" onClick={this.messageSend} ></i>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messageFromBot: state.messageFromBot,
        messageFromUser: state.messageFromUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLoginClick: (mssg) => {
            dispatch(addMessage(mssg))
        },
       
        changeState: (new_state) => {
            dispatch(stateChange(new_state))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bot);