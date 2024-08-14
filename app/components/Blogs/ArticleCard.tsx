/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import SkeletonWrapper from "../SkeletonWrapper";
import {
  CardContainer,
  InsideFrame,
  CardImage,
  CardInfo,
  CardInfoHeader,
  DomainName,
  Title,
  Description,
  CardInfoFooter,
  ReadingTime,
  ReadingTimeIcon,
  ReadingTimeText,
  Date,
  DateIcon,
  DateText,
} from "../styles/articleStyle"; // Import the styled components

interface ArticleCardProps {
  title: string | JSX.Element;
  link: string | JSX.Element;
  imageUrl: string | JSX.Element;
  date: string | JSX.Element;
  readingTime: string | JSX.Element;
  domain: string | JSX.Element;
  description?: string | JSX.Element;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  link,
  imageUrl,
  date,
  readingTime,
  domain,
  description,
}) => {
  const [loading, setLoading] = useState(true);
  let shortDomain;
  if (typeof domain === "string") {
    shortDomain = domain.startsWith("www.") ? domain.slice(4) : domain;
  } else {
    shortDomain = (
      <SkeletonWrapper isLoading={loading} height={22} width={120} />
    );
  }

  return (
    <CardContainer>
      <InsideFrame>
        {typeof imageUrl === "string" ? (
          <CardImage>
            <img
              src={imageUrl}
              alt={typeof title === "string" ? title : "Image"}
            />
          </CardImage>
        ) : (
          imageUrl
        )}

        <CardInfo>
          <CardInfoHeader>
            {typeof shortDomain === "string" ? (
              <DomainName>{shortDomain}</DomainName>
            ) : (
              shortDomain
            )}

            {typeof title === "string" ? (
              <Title href={link} target="_blank" rel="noopener noreferrer">
                {title}
              </Title>
            ) : (
              title
            )}
            {typeof description === "string" ? (
              <Description>{description}</Description>
            ) : (
              description
            )}
          </CardInfoHeader>
          <CardInfoFooter>
            <ReadingTime>
              {typeof readingTime === "string" ? (
                <ReadingTimeText>{readingTime}</ReadingTimeText>
              ) : (
                readingTime
              )}
            </ReadingTime>

            <Date>
              {typeof date === "string" ? <DateText>{date}</DateText> : date}
            </Date>
          </CardInfoFooter>
        </CardInfo>
      </InsideFrame>
    </CardContainer>
  );
};

export default ArticleCard;
