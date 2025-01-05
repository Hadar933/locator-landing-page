import { useNavigate } from "react-router-dom";
import { AppStoreButton, GooglePlayButton, ButtonsContainer } from "react-mobile-app-button";

export const StoreButtons = () => {
  const navigate = useNavigate();

  return (
    <ButtonsContainer gap={16}>
      <AppStoreButton
        url="/coming-soon"
        theme="dark"
        height={48}
        onClick={(e) => {
          e.preventDefault();
          navigate("/coming-soon");
        }}
      />
      <GooglePlayButton
        url="https://play.google.com/store/apps/details?id=locator.android"
        theme="dark"
        height={48}
      />
    </ButtonsContainer>
  );
};