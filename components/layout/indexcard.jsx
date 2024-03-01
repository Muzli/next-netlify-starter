import { Col } from 'react-bootstrap';
import { React } from 'react'

export default function IndexCard({backgroundClass, url, title}) {
  let classname = backgroundClass + ' d-flex col-12 col-lg-5 bg-secondary default-cell-height justify-content-center align-items-center position-relative px-lg-5';
  return (
    <Col className={classname}>
          <div className="display-2 text-white">
            <a className="stretched-link index-link" href={url}><strong>{title}</strong></a>
          </div>
    </Col>
  )
}