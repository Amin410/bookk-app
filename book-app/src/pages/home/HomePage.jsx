import React from "react";
import BookSlider from "../../components/book-slider/BookSlider";
import Slider from "../../components/slider/Slider";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import Services from "../../components/services/Services";
import { books } from "../../data/books";
const HomePage = () => {
  return (
    <div className="home">
      <Slider />
      <Services />
      <HeadingTitle title="Most gifted" />
      <BookSlider data={books} />
      <HeadingTitle title="Most seller" />
      <BookSlider data={books} />
      <HeadingTitle title="Most wished for" />
      <BookSlider data={books} />
    </div>
  );
};

export default HomePage;
