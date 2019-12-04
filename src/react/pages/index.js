import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import MessageFeed from "./MessageFeed.js";
import Register from "./Register"

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  MessageFeed: { path: "/messagefeed/:username", component: MessageFeed },
  Register: { path: "/register", component: Register},
  NotFound: { path: "*", component: NotFound }
};
