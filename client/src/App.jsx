import { useState } from "react";

import AuthPage from "./AuthPage.jsx";
import ChatsPage from "./ChatsPage.jsx";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
