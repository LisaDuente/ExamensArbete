import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/esm/Table";
import { Columns } from "../types/Columns";
import { Link } from "react-router-dom";
import ModalColumnComponent from "./modalColumnComponent";
import { useState } from "react";
import { Card } from "react-bootstrap";

export type columnProps = {
  columns: Columns[];
  tableName: string;
};

export default function ColumnComponent(props: columnProps) {
  const { columns, tableName } = props;
  const [showModal, setShowModal] = useState(false);
  const [newColumns, addColumns] = useState([...columns]);
  const clickHandler = () => {
    setShowModal(true);
    console.log(showModal);
  };

  //useEffect here

  return (
    <Card style = {{width: '70%', margin: 'auto'}}>
      <Card.Header>
        <h1 style = {{margin: 'auto'}}>{tableName}</h1>
        <Link to="/tables">
          <Button variant = 'danger' className="backButton">Back</Button>
        </Link>
        <Button variant = 'success' className="createButton" onClick={clickHandler}>
          Create column
        </Button>
        <Link to="/">
          <Button variant = 'warning' className="backToMain">Back to main</Button>
        </Link>
      </Card.Header>
      <Card.Body>
        <Table striped bordered hover>
          <tbody>
            <tr>
              {columns.map((data) => {
                return <th>{data.columnName}</th>;
              })}
            </tr>
          </tbody>
        </Table>
        <ModalColumnComponent
          showModal={showModal}
          setShowModal={(showModal) => setShowModal(showModal)}
          columns={newColumns}
          addColumn={(newColumns) => addColumns(newColumns)}
        />
      </Card.Body>
    </Card>
  );
}
