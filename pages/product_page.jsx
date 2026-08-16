import { useRouter } from 'next/router';
import { useContext } from 'react';
import CustomNavbar from 'components/navbar/customnavbar'
import Footer from 'components/footer/footer'
import { Row, Col } from 'react-bootstrap';
import LanguageContext from '../utilities/Language/languageContext.js';
import Dictionary from '../utilities/Language/dictionary.js';
import BrandCarousel from '@components/carousel/brandCarousel';
import { getProductName } from '../lib/product/product.ts';
import { getProductBySlug } from '../lib/product/products/index.ts';

/*export async function getServerSideProps(context) {
  const { product: productSlug } = context.query;
  const product = getProductBySlug(productSlug);
  return {
    props: {
      product,
    },
  };
}*/

export default function ProductPage() {

  const { language } = useContext(LanguageContext);
  const router = useRouter();

  const { product: productSlug } = router.query;

  if (!router.isReady) {
    return null;
  }

  const product = getProductBySlug(productSlug);

  if (!product) {
    return <div>Product not found</div>;
  }

  const images = product.images || [];

  const imagePath = 'product_photos/' + product.makerId + '/' + product.modelId;
  
  return (
    <>
      <CustomNavbar />
      <main>
        <h1 className="mt-3 mb-5">{getProductName(product, language)}</h1>
        <Row className="product-gallery mx-auto">
          
              {images.slice(0).map((image, index) => (
                <Col xs={12} md={6} className="d-flex justify-content-center" key={image.src}>
                  <a href={imagePath + '/' + image.src} target='_blank'>
                    <img src={imagePath + '/' + image.src}
                        className="product-image shadow-1-strong rounded mb-4"/>
                  </a>
                </Col>
              ))}
        </Row>
      </main>            
      <Row className="align-items-start me-0">
        <Footer/>
      </Row>
    </>
  )
}