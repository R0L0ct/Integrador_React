import React from "react";
import {
  FooterContainerStyled,
  RedStyled,
  RedesContainerStyled,
} from "./FooterStyled";
import { BsInstagram, BsWhatsapp, BsCalendar3 } from "react-icons/bs";
import { AiOutlineFacebook } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { GiBurningSkull } from "react-icons/gi";
import { useMediaQuery } from "react-responsive";

export const Footer = () => {
  const isMediumScreenRes = useMediaQuery({ maxWidth: 838 });
  const isMobileRes = useMediaQuery({ maxWidth: 607 });
  const isSecondMobileRes = useMediaQuery({ maxWidth: 349 });
  return (
    <FooterContainerStyled>
      {!isSecondMobileRes ? (
        <RedesContainerStyled>
          <RedStyled>
            <BsInstagram style={{ fontSize: "20px" }} />
            <p>@HardCoreClothes</p>
          </RedStyled>
          <RedStyled>
            <AiOutlineFacebook style={{ fontSize: "20px" }} />
            <p>HardCoreClothes</p>
          </RedStyled>
          <RedStyled>
            <BsWhatsapp style={{ fontSize: "20px" }} />
            <p>34334343434343</p>
          </RedStyled>
        </RedesContainerStyled>
      ) : (
        ""
      )}
      {!isMediumScreenRes || isMobileRes ? (
        <div style={{ display: "flex" }}>
          <GiBurningSkull style={{ fontSize: "40px" }} />
          <GiBurningSkull style={{ fontSize: "40px" }} />
          <GiBurningSkull style={{ fontSize: "40px" }} />
        </div>
      ) : (
        ""
      )}

      {!isMobileRes ? (
        <RedesContainerStyled>
          <RedStyled>
            <SlLocationPin style={{ fontSize: "20px" }} />
            <p>Parana,Entre Rios, Argentina</p>
          </RedStyled>
          <RedStyled>
            <BsCalendar3 style={{ fontSize: "20px" }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <p>Lunes a Viernes</p>
              <p>8hs a 22hs</p>
            </div>
          </RedStyled>
        </RedesContainerStyled>
      ) : (
        ""
      )}
    </FooterContainerStyled>
  );
};
