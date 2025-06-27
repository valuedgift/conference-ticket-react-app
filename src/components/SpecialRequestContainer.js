import { useState, useEffect } from "react";

const SpecialRequestContainer = () => {
  const [labelText, setLabelText] = useState("Special Request");

  useEffect(() => {
    const handleResize = () => {
      setLabelText(window.innerWidth >= 640 ? "Special Request?" : "About the Project");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="input-container">
      <label className="label">{labelText}</label>
      <textarea className="textarea"></textarea>
    </div>
  );
};

export default SpecialRequestContainer;
