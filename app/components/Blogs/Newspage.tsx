/** @jsxImportSource @emotion/react */
"use client";

import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getCryptoNews } from "./apiService";
import "react-loading-skeleton/dist/skeleton.css";
import { Icon, Input, Button } from "zebpay-ui";

import SkeletonWrapper from "../SkeletonWrapper";
import {
  Main,
  Container,
  HeaderFrame,
  Header,
  Section,
  News,
  Icons,
  InnerDiv,
  Newsletter,
  NewsChild,
  TradingBanner,
  Innercard,
  NewsHeader,
  Heading,
  MailIcon,
  Qoute,
  Form,
  Email,
  Subscribe,
  Topology,
  Frame,
  AnotherFrame,
  ZebpayImageDiv,
  TextWrapper,
  Title,
  Subtitle,
  ButtonGroup,
} from "../styles/newPage";
import { SkeletonTheme } from "react-loading-skeleton";

interface Article {
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const calculateReadingTime = (content: string) => {
  const wordsPerMinute: number = 200; // Average reading speed
  const noOfWords: number = content.split(/\s/g).length;
  const minutes: number = noOfWords / wordsPerMinute;
  return `${Math.ceil(minutes)} min read`;
};

const getDomain = (url: string) => {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch {
    return "Unknown";
  }
};

const isValidDate = (date: string): boolean => !isNaN(Date.parse(date));

const NewsPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedArticles = await getCryptoNews();
        setArticles(fetchedArticles);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching cryptocurrency news:", err);
        setError("Failed to fetch news.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <Main>
      <Container>
        <HeaderFrame>
          <Header>
            <News>Crypto Blogs</News>
            <Icons>
              <Icon name="add" />

              {/* <Filter />
              <Sorter /> */}
            </Icons>
          </Header>
        </HeaderFrame>
        <Section>
          {error ? (
            <div>{error}</div>
          ) : (
            <div
              css={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                width: "100%",
              }}
            >
              {loading
                ? Array.from({ length: 12 }).map((_, index) => (
                    <ArticleCard
                      key={index}
                      title={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={22}
                          width={205}
                        />
                      }
                      link={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={22}
                          width={205}
                        />
                      }
                      imageUrl={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={110}
                          width={205}
                        />
                      }
                      date={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={18}
                          width={80}
                        />
                      }
                      readingTime={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={18}
                          width={80}
                        />
                      }
                      domain={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={22}
                          width={120}
                        />
                      }
                      description={
                        <SkeletonWrapper
                          isLoading={loading}
                          height={36}
                          width={205}
                        />
                      }
                    />
                  ))
                : articles.map((article, index) => (
                    <ArticleCard
                      key={index}
                      title={article.title}
                      link={article.url}
                      imageUrl={article.urlToImage}
                      date={
                        isValidDate(article.publishedAt)
                          ? new Date(article.publishedAt).toLocaleDateString()
                          : "Unknown Date"
                      }
                      readingTime={calculateReadingTime(article.content)}
                      domain={getDomain(article.url)}
                      description={`dfsefwr dwef aefrf afwef afwef afwefef`}
                    />
                  ))}
            </div>
          )}
        </Section>
      </Container>
      <InnerDiv>
        <Innercard>
          <Newsletter>
            <NewsChild>
              <NewsHeader>
                {loading ? (
                  <SkeletonWrapper isLoading={loading} height={80} width={80} />
                ) : (
                  <MailIcon />
                )}

                {loading ? (
                  <SkeletonWrapper
                    isLoading={loading}
                    height={28}
                    width={220}
                  />
                ) : (
                  <Heading>ZebPay Blog Digest</Heading>
                )}
                {loading ? (
                  <SkeletonWrapper
                    isLoading={loading}
                    height={48}
                    width={255}
                  />
                ) : (
                  <Qoute>
                    Stay ahead with our weekly crypto blogs & updates!
                  </Qoute>
                )}
              </NewsHeader>
              {loading ? (
                <SkeletonWrapper isLoading={loading} height={40} width={255} />
              ) : (
                <Form>
                  <Input
                    label={
                      loading ? (
                        <SkeletonWrapper
                          isLoading={loading}
                          height={20}
                          width={220}
                        />
                      ) : (
                        "Enter Email Address "
                      )
                    }
                    onBlur={function noRefCheck() {}}
                    onChange={function noRefCheck() {}}
                    onFocus={function noRefCheck() {}}
                    onKeyDown={function noRefCheck() {}}
                    onWheel={function noRefCheck() {}}
                    placeholder="Enter Email Address"
                    style={{
                      name: "3s4yqf",
                      styles: "width:100%",
                    }}
                  />
                </Form>
              )}
              {loading ? (
                <SkeletonWrapper isLoading={loading} height={34} width={255} />
              ) : (
                <Button
                  onClick={function noRefCheck() {}}
                  size="full-width"
                  type="primary"
                >
                  Subscribe
                </Button>
              )}
            </NewsChild>
          </Newsletter>
          <TradingBanner>
            {/* <Topology></Topology> */}
            <Frame>
              <AnotherFrame>
                {loading ? (
                  <SkeletonWrapper isLoading={loading} height={60} width={60} />
                ) : (
                  <ZebpayImageDiv></ZebpayImageDiv>
                )}

                <TextWrapper>
                  {loading ? (
                    <SkeletonWrapper
                      isLoading={loading}
                      height={28}
                      width={220}
                    />
                  ) : (
                    <Title>Crypto Knowledge Hub</Title>
                  )}
                  {loading ? (
                    <SkeletonWrapper
                      isLoading={loading}
                      height={48}
                      width={255}
                    />
                  ) : (
                    <Subtitle>
                      Stay updated on the latest trends and insights with
                      ZebPay. Download now
                    </Subtitle>
                  )}
                </TextWrapper>
              </AnotherFrame>
              <ButtonGroup>
                {loading ? (
                  <SkeletonWrapper
                    isLoading={loading}
                    height={32}
                    width={121.5}
                  />
                ) : (
                  <Button
                    onClick={function noRefCheck() {}}
                    size="medium"
                    type="primary"
                  >
                    ...
                  </Button>
                )}

                {loading ? (
                  <SkeletonWrapper
                    isLoading={loading}
                    height={32}
                    width={121.5}
                  />
                ) : (
                  <Button
                    onClick={function noRefCheck() {}}
                    size="medium"
                    type="primary"
                  >
                    ...
                  </Button>
                )}
              </ButtonGroup>
            </Frame>
          </TradingBanner>
        </Innercard>
      </InnerDiv>
    </Main>
  );
};

export default NewsPage;
