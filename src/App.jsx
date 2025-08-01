import { useLocation } from "react-router";
import ExpandableTabs from "./components/ExpandTabs/ExpandableTabs"
import Nav from "./components/Navbar/Nav";
import Mainroutes from "./routes/Mainroutes"

const App = () => {
  const location = useLocation();
  const hideTabsOn = ["/auth"];
  return (
    <main className="main">
      {!hideTabsOn.includes(location.pathname) && <Nav /> }
      <Mainroutes />
      <ExpandableTabs />
    </main>
  )
}


export default App