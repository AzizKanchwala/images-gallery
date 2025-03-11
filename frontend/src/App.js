import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Search from "./components/Search";
import ImageCard from "./components/ImageCard";
import { Container, Row, Col } from "react-bootstrap";

const UNSPLASH_KEY = process.env.REACT_APP_KEY;

const App = () => {
  const [word, setWord] = useState("");
  const [images, setImages] = useState([]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word);
  
    fetch(`https://api.unsplash.com/photos/random/?query=${word}&client_id=${UNSPLASH_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setImages([{ ...data, title:word }, ...images]);
        console.log(images);
      })
      .catch((e) => {
        console.log(e);
      });
    
    setWord('')
  };

  const handleDeleteImage = (id) => {
    setImages(images.filter((image) => image.id !== id))
  };

  return (
    <div className="App">
      <Header title="Gallery"></Header>
      <Search
        word={word}
        setWord={setWord}
        handleSubmit={handleSearchSubmit}
      ></Search>
      <Container className="mt-4">
        <Row xs={1} md={2} lg={3}>
          {images.map((image,i) => (
            <Col key={i} className="pb-3">
            <ImageCard key={image.id || i} image={image} deleteImage={handleDeleteImage}></ImageCard>
            </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default App;
