import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    "",
    props.user.username,
    props.user.secret
  );

  return <div>chats...</div>;
};

export default ChatsPage;
