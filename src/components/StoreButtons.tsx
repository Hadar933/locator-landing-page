import { useNavigate } from "react-router-dom";

export const StoreButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <style>
        {`
          .storeLink {
            position: relative;
            display: inline-block;
            width: 180px;
            height: 60px;
            border-radius: 12px;
            overflow: hidden;
            background-color: black;
          }
          .storeLink > img {
            --width: 100%;
            position: absolute;
            width: var(--width);
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        `}
      </style>
      <a
        href="/coming-soon"
        className="storeLink"
        onClick={(e) => {
          e.preventDefault();
          navigate("/coming-soon");
        }}
      >
        <img 
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
          alt="Download on the App Store"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=locator.android"
        target="_blank"
        rel="noopener noreferrer"
        className="storeLink"
      >
        <img 
          alt="Get it on Google Play"
          src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"
          style={{ "--width": "128%" } as React.CSSProperties}
        />
      </a>
    </div>
  );
};