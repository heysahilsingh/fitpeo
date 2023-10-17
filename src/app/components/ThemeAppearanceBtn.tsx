import { useState } from "react";

const ThemeAppearanceBtn = (props: { className?: string }) => {
  const userAppearanceSetting = localStorage.getItem("themeAppearance");
  const currentThemeAppearance = userAppearanceSetting === "dark" ? "dark" : "light";

  const [isDark, setIsDark] = useState(currentThemeAppearance === "dark" ? true : false);

  const toggleThemeAppearance = () => {
    setIsDark(!isDark);

    // Remove both classes and then add the appropriate one
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(!isDark ? "dark" : "light");

    localStorage.setItem("themeAppearance", !isDark ? "dark" : "light");
  };

  return (
    <div className={`${props.className || ""} flex items-center`}>
      <input
        className="cursor-pointer"
        type="checkbox"
        name="themeToggle"
        id="themeToggle"
        checked={isDark}
        onChange={toggleThemeAppearance}
      />
    </div>
  );
};

export default ThemeAppearanceBtn;
