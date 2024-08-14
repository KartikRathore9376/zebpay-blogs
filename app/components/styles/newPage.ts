/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { typography, colors } from "zebpay-ui";
export const Main = styled.div`
  display: inline-flex;
  align-items: flex-start;
  gap: 1.25rem; 
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  align-self: stretch;
  background: var(--Zeb_Solid-BG_Blue, #222245);
  box-shadow: 0px 0.4375rem 0.4375rem -0.125rem rgba(97, 79, 79, 0.14); /* 7px */
  @media (max-width: 768px) {
  flex-direction : column;
  flex-wrap : wrap;
  }

`;

export const Container = styled.div`
  display: flex;
  padding : 10px;
  width: 47.5rem; /* 760px */
  height: 39.75rem; /* 636px */2
  padding-bottom: 1.25rem; /* 20px */
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem; /* 8px */
  background: var(--Zeb_Solid-Dark_Blue, #181837);

  /* Scrollbar styles */
  &::-webkit-scrollbar {
    width: 0.25rem;
    height: 1.5rem;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--Zeb_Solid-Dark-Grey, #34345a);
    border-radius: 1.125rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--Zeb_Solid-Dark-Grey, #1b1b3a);
  }
    @media (max-width: 768px) {
    width : 100%;
    height : auto;
  }

  
`;

export const HeaderFrame = styled.div`
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: stretch;
  background: var(--blue-02-dark-blue, #181837);
  @media (max-width: 768px) {
    gap : 0.5rem;
  }
  
`;

export const Header = styled.div`
  display: flex;
  padding: 0 1rem; /* 16px */
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  @media (max-width: 768px) {
    flex-direction : column;
    gap : 0.5rem;
    padding : 0 0.5rem;
  }

  
`;

export const Section = styled.div`
  display: flex;
  flex-wrap: wrap;
  height : 100%;
  width : 100%;
  // width: 45.625rem; /* 730px */
  // height: auto;
  align-items: flex-start;
  gap: 1rem; /* 16px */
  flex: 1 0 0;
  overflow: auto;

  /* Scrollbar styles */
  &::-webkit-scrollbar {
    width: 0.25rem;
    height: 1.5rem;
    position: absolute;
    right: 0.25rem;
    top: 18.625rem;
    border-radius: 1.125rem;
    background: var(--Zeb_Solid-Dark-Grey, #34345a);
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--Zeb_Solid-Dark-Grey, #34345a);
    border-radius: 1.125rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--Zeb_Solid-Dark-Grey, #1b1b3a);
  }
    @media (max-width: 768px) {
    width : 100%;
    height : auto;
  }

  
`;

export const News = styled.div`
  display: flex;
  width: 33.9375rem; /* 543px */
  align-items: center;
  gap: 0.5rem; /* 8px */
  color: var(--Zeb_Solid-White, #fff);
   h6/16_bold 
  // font-family: Lato;
  // font-size: 1rem;
  // font-weight: 700;
  // line-height: 1.75rem; /* 28px */
  // letter-spacing: 0.05rem; /* 0.8px */

  
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem; /* 20px */

  
`;

export const InnerDiv = styled.div`
  display: flex;
  width: auto;
  height: 100%;
  padding: 1rem;
  color: ${colors.Zeb_Solid_White};
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 8px;
  background: ${colors.Zeb_Solid_Dark_Blue};
  @media (max-width: 768px) {
    width: inherit;
    height: auto;
  }
  

  
`;

export const Newsletter = styled.div`
  display: flex;
  width: 279px;
  padding: 0.75rem;
  align-items: center;
  gap: 0.25rem;
  flex: 1 0 0;
  border-radius: 8px;
  background: ${colors.Zeb_Solid_BG_Blue};

  
`;

export const NewsChild = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;

export const TradingBanner = styled.div`
  display: flex;
  width: 279px;
  padding: 0.75rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  flex-shrink: 0;
  border-radius: 8px;
  background: ${colors.Zeb_Gradient_Dark_Blue};
  position: relative;
  @media (max-width: 768px) {
    height: auto;
    padding: 1rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  
`;

export const Innercard = styled.div`
  display: flex;
  width: auto;
  height: auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;

`;

export const NewsHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  align-self: stretch;
  width : auto;
`;

export const Heading = styled.div`
   color: ${colors.Zeb_Solid_White};
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem;
  letter-spacing: 0.05rem;
  
`;

export const MailIcon = styled.div`
  display: flex;
  width: 5rem;
  height: 5rem;
  padding: 1.0625rem 0.234rem;
  justify-content: center;
  align-items: center;

  
`;

export const Qoute = styled.div`
  align-self: stretch;
  color: ${colors.Zeb_Solid_Light_Blue};
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.025rem;
  
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;
`;

export const Email = styled.input`
  flex: 1 0 0;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem;
  letter-spacing: 0.025rem;
`;

export const Subscribe = styled.button`
  display: flex;
  width: 15.9375rem;
  padding: 0.5rem 0.75rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: white;
  border-radius: 8px;
  background: ${colors.Zeb_Gradient_Blue_01};

  
`;

export const Topology = styled.div`  // Topology, Frame, AnotherFrame, ZebpayImageDiv,TextWrapper, Title, Subtitle, ButtonGroup, Button
  width: 16.75513rem;
  height: 16.39394rem;
  transform: rotate(44.59deg);
  position: absolute;
  right: -11.12863rem;
  top: 2.83203rem;
  opacity: 0.4;
  @media (max-width: 480px) {
    display: none;
  }
`;

// Frame Component
export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

// AnotherFrame Component
export const AnotherFrame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  align-self: stretch;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;

// ZebpayImageDiv Component
export const ZebpayImageDiv = styled.div`
  display: flex;
  width: 4rem;
  height: 4rem;
  justify-content: center;
  align-items: center;
  background: url(<path-to-image>) lightgray -29.75px -23.893px / 187.281% 188.029% no-repeat;

  @media (max-width: 768px) {
    width: 3rem;
    height: 3rem;
  }
`;

// TextWrapper Component
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  align-self: stretch;

  @media (max-width: 768px) {
    gap: 0.125rem;
  }
`;

// Title Component
export const Title = styled.h1`
  align-self: stretch;
  color: var(--Zeb_Solid-White, #FFF);
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Lato';
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.75rem; // 175%
  letter-spacing: 0.05rem;


  @media (max-width: 768px) {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`;

// Subtitle Component
export const Subtitle = styled.h2`
  align-self: stretch;
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #C0C0EE));
  font-feature-settings: 'liga' off, 'clig' off;
  font-family: 'Lato';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5rem; // 171.429%
  letter-spacing: 0.025rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
`;

// ButtonGroup Component
export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
  align-self: stretch;
  width : 255px;
  height : 32px;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

// Button Component
export const Button = styled.button`
  height: 2rem;
  flex: 1 0 0;

  @media (max-width: 768px) {
    height: 1.75rem;
  }
`;
