import AboutComponent from '../about/AboutComponent';
import BlogComponent from '../blog/BlogComponent';
import BlogComponentTwo from '../blog/BlogComponentTwo';
import HeaderComponent from '../header/HeaderComponent';
import HeaderSponsor from '../header/HeaderSponsor';
import NavbarComponent from '../navbar/NavbarComponent';
import FormReview from '../review/FormReview';
import ReviewComponent from '../review/ReviewComponent';
import ServicesComponent from '../services/ServicesComponent';
import FooterComponent from '../footer/FooterComponent';

const Homepage = () => {
  return (
    <>
      <NavbarComponent />
      <HeaderComponent />
      <HeaderSponsor />
      <ServicesComponent />
      <AboutComponent />
      <ReviewComponent />
      <BlogComponent />
      <BlogComponentTwo />
      <FormReview />
      <FooterComponent />
    </>
  );
};

export default Homepage;
