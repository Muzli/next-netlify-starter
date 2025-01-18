import { useRouter } from 'next/router';
import { useContext } from 'react';
import SimpleLayout from '../components/layout/simple';
import ImageGalleryTemplate from '../components/imagegallerytemplate/imageGallerytemplate';
import { Container } from 'react-bootstrap';
import LanguageContext from 'utilities/Language/languageContext.js';
import Dictionary from '../utilities/Language/dictionary.js';
import { getFilenames } from 'lib/getFilenames/getFilenames';

export async function getServerSideProps(context) {
  const { producer } = context.query;
  const filenames = getFilenames(`public/photos/${producer}`);
  return {
    props: {
      producer,
      filenames,
    },
  };
}

export default function MyndasafnTemplate({ filenames }) {

  const { language } = useContext(LanguageContext);
  const router = useRouter();
  const { producer } = router.query;
  
  return (
    <SimpleLayout>
      <Container>
        <h1 className="text-center mb-4">{Dictionary()[language]["producers"][producer]}</h1>
        <ImageGalleryTemplate producer={producer} filenames={filenames}/>
      </Container>
    </SimpleLayout>
  );
}