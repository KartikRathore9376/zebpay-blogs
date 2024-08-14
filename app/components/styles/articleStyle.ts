/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import colors from "zebpay-ui";

export const CardContainer = styled.div`
  display: flex;
  padding: 0.75rem;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  flex: 1 0 0;
  border-radius: 8px;
  background: var(--Zeb_Solid-BG_Blue, #222245);
`;

export const InsideFrame = styled.div`
  display: flex;
  width: 205px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

export const CardImage = styled.div`
  width: 12.813rem;
  height: 6.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border-radius: 0.25rem;
  border: 1px solid var(--grey-02-dark, #34345a);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.25rem;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const CardInfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

export const DomainName = styled.div`
  display: flex;
  padding: 2px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #c0c0ee;
  border-radius: 4px;
  background: var(--Shimmer-Zeb_BG-Light_Blue, rgba(192, 192, 238, 0.2));
 
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  padding: 0.125rem 0.25rem;
  border-radius: 0.25rem;
  color: var(--Zeb_Solid-White, #fff);
  text-decoration: none;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  max-width: 40ch;
  max-height : 24px;
  line-height: 1.5;
`;

export const Description = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  flex: 1 0 0;
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
  font-feature-settings: "clig" off, "liga" off;
`;

export const CardInfoFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  align-self: stretch;
`;

export const ReadingTime = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ReadingTimeIcon = styled.div`
  display: flex;
  width: 12px;
  height: 12px;
`;

export const ReadingTimeText = styled.div`
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DateIcon = styled.div`
  display: flex;
  width: 12px;
  height: 12px;
`;

export const DateText = styled.div`
  color: var(--Zeb_Solid-Light_Blue, var(--blue-04-light-blue, #c0c0ee));
`;