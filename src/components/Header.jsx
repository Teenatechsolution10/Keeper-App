import { useEffect, useState } from "react";
import { themes } from "../utils/themes";

const Header = () => {
  const [theme, setTheme] = useState(0);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(themes[theme]).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    <nav className="header">
      <p>Note Keeper</p>
      <div className="headerTheme">
        {themes.map((_, index) => (
          <div key={index} onClick={() => setTheme(index)}></div>
        ))}
      </div>
    </nav>
  );
};

export default Header;
