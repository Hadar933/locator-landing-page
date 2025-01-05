import { useNavigate } from "react-router-dom";
import MobileStoreButton from 'react-mobile-store-button';

export const StoreButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center">
      <MobileStoreButton
        store="ios"
        url="/coming-soon"
        linkProps={{
          onClick: (e) => {
            e.preventDefault();
            navigate("/coming-soon");
          }
        }}
        width={135}
      />
      <MobileStoreButton
        store="android"
        url="https://play.google.com/store/apps/details?id=locator.android"
        width={135}
      />
    </div>
  );
};