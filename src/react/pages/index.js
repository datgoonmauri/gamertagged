import Home from "./Home";
import Profile from "./Profile";
import NotFound from "./NotFound";
import MessageFeed from "./MessageFeed.js";

export default {
  Home: { path: "/", component: Home },
  Profile: { path: "/profile/:username", component: Profile },
  NotFound: { path: "*", component: NotFound },
  MessageFeed: { path: "/messagefeed/:username", component: MessageFeed }
};
