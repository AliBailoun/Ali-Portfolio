import Card from 'react-bootstrap/Card';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Card(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href={props.depLink}>Deployed Link</Card.Link>
        <Card.Link href={props.repoLink}>Repo Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
