import { useParams } from "react-router-dom";

const FeedPage = () => {
  const currentView = useParams();
  return <div>Current View: {currentView ? currentView : "Default Feed"}</div>;
};

export default FeedPage;
