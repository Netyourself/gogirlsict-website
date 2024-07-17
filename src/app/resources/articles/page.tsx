"use client";
import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  Link,
  useColorModeValue,
  Button,
  Center,
} from "@chakra-ui/react";
import { FixedSizeList as List, ListChildComponentProps } from "react-window";
import { articles } from "@/app/data/resourcesPageData";
import branding from "@/app/theme";

const ARTICLES_PER_LOAD = 4;
const defaultImage =
  "/images/projects/Beyond-Conflict-Final-Poster-1-0-400x250.jpg";

const ArticlesPage: React.FC = () => {
  const [displayedArticles, setDisplayedArticles] = useState(
    articles.slice(0, ARTICLES_PER_LOAD)
  );
  const [hasMore, setHasMore] = useState(articles.length > ARTICLES_PER_LOAD);
  const containerRef = useRef<HTMLDivElement>(null);
  const [listHeight, setListHeight] = useState<number>(0);
  const cardBg = useColorModeValue("white", "gray.800");

  // Update list height when window resizes
  useEffect(() => {
    const handleResize = () => {
      setListHeight(window.innerHeight - 200);
    };

    // Set initial height
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const loadMoreArticles = () => {
    const nextArticles = articles.slice(
      displayedArticles.length,
      displayedArticles.length + ARTICLES_PER_LOAD
    );
    setDisplayedArticles((prev) => [...prev, ...nextArticles]);
    setHasMore(
      displayedArticles.length + nextArticles.length < articles.length
    );

    // Scroll into view the last newly added article
    setTimeout(() => {
      const lastArticleIndex =
        displayedArticles.length + nextArticles.length - 1;
      const articleElement = containerRef.current?.querySelector(
        `[data-index="${lastArticleIndex}"]`
      );
      articleElement?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  const RenderArticle = ({ index, style }: ListChildComponentProps) => {
    const article = displayedArticles[index];
    return (
      <Box
        style={style}
        key={article.id}
        bg={cardBg}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="lg"
        transition="transform 0.3s"
        _hover={{ transform: "scale(1.05)" }}
        mb={4}
        data-index={index}
        display="flex"
      >
        {article.image && (
          <Image
            src={article.image || defaultImage} // TODO Fix default image
            alt={article.title}
            objectFit="cover"
            width="100px"
            height="100px"
            borderRadius="full"
            alignSelf="flex-start"
            flexShrink={0}
          />
        )}
        <Box p={6} flex="1">
          <Heading as="h3" size="md" mb={2}>
            <Link
              href={article.link}
              _hover={{
                textDecoration: "none",
                color: branding.colors.gray600,
              }}
            >
              {article.title}
            </Link>
          </Heading>
          <Text fontSize="sm" color="gray.500">
            By {article.author} on {article.date}
          </Text>
          <Text color={branding.colors.gray600} mt={2}>
            {article.description}
          </Text>
        </Box>
      </Box>
    );
  };

  return (
    <Container maxW="container.lg" p={8}>
      <Heading as="h1" size="xl" mb={8} color={branding.colors.secondary}>
        Articles
      </Heading>
      <div ref={containerRef}>
        {listHeight > 0 && (
          <List
            height={listHeight}
            itemCount={displayedArticles.length}
            itemSize={200}
            width="100%"
          >
            {RenderArticle}
          </List>
        )}
      </div>
      {hasMore && (
        <Center mt={8}>
          <Button onClick={loadMoreArticles} colorScheme="blue">
            Load More
          </Button>
        </Center>
      )}
    </Container>
  );
};

export default ArticlesPage;
