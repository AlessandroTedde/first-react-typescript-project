import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      let resp = await fetch("https://api.spaceflightnewsapi.net/v4/articles");
      if (resp.ok) {
        let fetchedArticles = await resp.json();

        setArticles(fetchedArticles);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row xs={3} md={5}>
        <Col></Col>
      </Row>
    </Container>
  );
};
