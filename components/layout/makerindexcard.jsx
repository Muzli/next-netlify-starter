import { Col } from 'react-bootstrap';
import { React } from 'react';
import Link from 'next/link';

export default function MakerIndexCard({url, title}) {
  let classname = 'd-flex col-4 col-lg-2 justify-content-center align-items-center position-relative mb-3 text-center';
  return (
    <Col className={classname}>
        <div>
          <Link href={url}>
            <a className="stretched-link index-link"><strong>{title}</strong></a>
          </Link>
        </div>
    </Col>
  )
}