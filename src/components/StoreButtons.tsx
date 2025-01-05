import { useNavigate } from "react-router-dom";

export const StoreButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <a
        href="https://play.google.com/store/apps/details?id=locator.android"
        target="_blank"
        rel="noopener noreferrer"
        className="relative inline-block"
      >
        <img
          className="w-[170px] h-[50px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
          alt="Get it on Google Play"
        />
      </a>
      <button
        onClick={() => navigate("/coming-soon")}
        className="relative inline-block w-[160px] h-[53px] rounded-xl overflow-hidden bg-black hover:opacity-90 transition-opacity"
      >
        <img
          src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83"
          alt="Download on the App Store"
          className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </button>
    </div>
  );
};