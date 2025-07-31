import { useState } from "react";
import "./ExpandableTabs.css";
import { Home, Notebook, ShoppingBag, User } from "lucide-react";
import { useNavigate } from "react-router";

const tabs = [
  { title: "Home", icon: Home , link:"/" },
  { title: "Shop", icon: ShoppingBag , link:"/shop"},
  { title: "About", icon: Notebook, link:"/aboutUs"},
  { title: "Profile", icon: User, link:"/auth" }
]

export default function ExpandableTabs() {
  const navigate = useNavigate();
  const [active, setActive] = useState("Home");

  const clickHandler = (tab) => {
    setActive(tab.title)
    navigate(tab.link);
  }

  return (
    <div className="bottom_nav">
      {tabs.map((tab) => {
        const isActive = active === tab.title

        return (
          <div
            key={tab.title}
            className={`tab ${isActive ? "active" : ""}`}
            onClick={() => clickHandler(tab)}
          >
            <tab.icon style={{ marginRight: 8 }} />
            {active == tab.title ? tab.title : ""}
          </div>
        )
      })}
    </div>
  )
}
