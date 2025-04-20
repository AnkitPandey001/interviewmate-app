import firebase from "../assets/img/logo/firebase.png";
import meet from "../assets/img/logo/meet.png";
import microsoft from "../assets/img/logo/microsoft.png";
import react from "../assets/img/logo/react.png";
import taild from "../assets/img/logo/tailwindcss.png";
import zoom from "../assets/img/logo/zoom.png";

export const MarqueeImage = () => {
  const logos = [firebase, meet, microsoft, react, taild, zoom];

  return (
    <div className="flex items-center gap-4 px-4 py-6 mt-4 md:mt-8">
      {logos.map((logo, idx) => (
        <img
          key={idx}
          src={logo}
          alt={`logo-${idx}`}
          className="h-6 sm:h-7 md:h-8 object-contain opacity-70 hover:opacity-100 transition duration-300"
        />
      ))}
    </div>
  );
};
