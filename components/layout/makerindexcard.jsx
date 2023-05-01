import { Col } from 'react-bootstrap';
import { React } from 'react'

export default function MakerIndexCard({backgroundClass, url, title}) {
  let classname = backgroundClass + ' d-flex col-4 col-lg-2 bg-secondary justify-content-center align-items-center position-relative';
  return (
    <Col className={classname}>
          <div className="text-white">
            <a className="stretched-link index-link" href={url}><strong>{title}</strong></a>
          </div>
    </Col>
  )
}