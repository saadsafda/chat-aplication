import { ChatEngine } from "react-chat-engine";

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import "./App.css";

const projectID = "41cb450e-58a2-42fb-80fb-83d9ea3448d3";

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;

    return (
        <ChatEngine
            height="100vh"
            projectID={projectID}
            userName='SaadSafdar'
			userSecret='123123'
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
            onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
        />
    )
}

export default App;
