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
          className="w-[160px] h-[47px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
          alt="Get it on Google Play"
        />
      </a>
      <a
        href="/coming-soon"
        tabIndex={0}
        onClick={(e) => {
          e.preventDefault();
          navigate("/coming-soon");
        }}
        className="relative inline-block"
      >
        <img
          className="w-[160px] h-[80px]"
          src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
          alt="Download on the App Store"
        />
      </a>
    </div>
  );
};