import { useState, useEffect } from "react";

const DownloadLink = ({ handleDownload }) => {
  const [isDefaultText, setIsDefaultText] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDefaultText(window.innerWidth > 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <a href="#" className="check-email-copy">
      {isDefaultText ? (
        <>
          Check your email for a copy or you can{" "}
          <span style={{ fontWeight: "bold", cursor: "pointer" }} onClick={handleDownload}>
            download
          </span>
        </>
      ) : (
        "You can download or Check your email for a copy"
      )}
    </a>
  );
};

export default DownloadLink;
