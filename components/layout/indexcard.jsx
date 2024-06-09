import { Col } from 'react-bootstrap';
import { React } from 'react';
import Link from 'next/link';

export default function IndexCard({backgroundClass, url, title}) {
  let classname = backgroundClass + ' d-flex col-12 col-lg-5 bg-secondary default-cell-height justify-content-center align-items-center position-relative px-lg-5';
  return (
    <Col className={classname}>
          <div className="display-2 text-white">
            <Link href={url}>
              <a className="stretched-link index-link"><strong>{title}</strong></a>
            </Link>
          </div>
    </Col>
  )
}