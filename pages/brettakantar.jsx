import { useContext } from 'react';
import LanguageProvider from 'utilities/Language/languageProvider';
import SimpleLayout from '../components/layout/simple'
import MakerIndexCard from '../components/layout/makerindexcard'
import { Container, Row, Col, SSRProvider } from 'react-bootstrap';
import LanguageContext from 'utilities/Language/languageContext.js';
import Dictionary from 'utilities/Language/dictionary';

// Vera með grid fyrir bílaframleiðendur
// 5 cols 3 rows á desktop
// 3 cols 5 rows á mobile

// Hver reitur er takki sem loadar vörulistasíðu
// með vörum frá viðkomandi framleiðanda

// Vörulistasíðan er með filter fyrir
// ->Tegund
// ->Árgerð
// ->Dekkjastærð
// ->Felgubreidd
// Og cards fyrir vörur

export default function Brettakantar() {

  const { language } = useContext(LanguageContext);

  console.log(language);

  return (    
    <SimpleLayout>
      <Container>
        <Row>
          <MakerIndexCard url='/catalog_dodge' title='Dodge' />
          <MakerIndexCard url='/catalog_chevrolet' title='Chevrolet' />
          <MakerIndexCard url='/catalog_jeep' title='Jeep' />
          <MakerIndexCard url='/catalog_ford' title='Ford' />
          <MakerIndexCard url='/catalog_grenadier' title='Grenadier' />
          <MakerIndexCard url='/catalog_musso' title='Musso' />
          <MakerIndexCard url='/catalog_isuzu' title='Isuzu' />
          <MakerIndexCard url='/catalog_iveco' title='Iveco' />
          <MakerIndexCard url='/catalog_toyota' title='Toyota' />
          <MakerIndexCard url='/catalog_nissan' title='Nissan' />
          <MakerIndexCard url='/catalog_mitsubishi' title='Mitsubishi' />
          <MakerIndexCard url='/catalog_benz' title='Mercedes Benz' />
          <MakerIndexCard url='/catalog_suzuki' title='Suzuki' />
          <MakerIndexCard url='/catalog_volkswagen' title='Volkswagen' />
          <MakerIndexCard url='/catalog_scaut' title='Scaut' />
        </Row>
      </Container>
    </SimpleLayout>
  )
}