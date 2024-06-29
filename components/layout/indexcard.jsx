import { Col } from 'react-bootstrap';
import { React } from 'react';
import Link from 'next/link';

export default function IndexCard({backgroundClass, url, title, subtitle = undefined}) {
  let classname = backgroundClass + ' d-flex col-12 col-lg-5 bg-secondary default-cell-height justify-content-center align-items-center position-relative px-lg-5';
  return (
    <Col className={classname}>
          <div className="text-white">
            <Link href={url}>
              <a className="display-2 stretched-link index-link"><strong>{title}</strong></a>              
            </Link>
            {subtitle && <div className="text-center"><p>{subtitle}</p></div>}
          </div>
    </Col>
  )
}