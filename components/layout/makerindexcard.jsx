import { Col } from 'react-bootstrap';
import { React } from 'react'

export default function MakerIndexCard({url, title}) {
  let classname = 'd-flex col-4 col-lg-2 justify-content-center align-items-center position-relative mb-3 text-center';
  return (
    <Col className={classname}>
        <div>
          <a className="stretched-link index-link" href={url}><strong>{title}</strong></a>
        </div>
    </Col>
  )
}