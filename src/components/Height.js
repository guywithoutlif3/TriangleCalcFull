import { useState, useEffect } from "react";
import {
  Form,
  Container,
  Row,
  Col,
  Alert,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { If, Then, Else, When, Unless, Switch, Case, Default } from "react-if";

export default function Height() {
  const [calcType1, setCalcType1] = useState(0.0);
  const [area, setArea] = useState(0.0);
  const [sideC, setSideC] = useState(0.0);
  const [solution, setSolution] = useState(0.0);
  const [error1, setError1] = useState("");
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("storage")));
  useEffect(() => {
    localStorage.setItem("storage", JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    solutionInsertLocalStorage();
  }, [solution]);
  
  const solutionInsertLocalStorage = () => {
    setItems([
      ...items,
      {
        solution: solution,
        calcType: "Höhe",
        sideA: null,
        sideB: null,
        sideC: null,
        angleA: null,
        angleB: null,
        angleC: null,
      },
    ]);
  };

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={5}>
            <InputGroup className="mb-3">
              <FormControl
                onChange={(e) => {
                  setArea(parseFloat(e.target.value));
                }}
                placeholder="Fläche"
              />
              <InputGroup.Text className="input" placeholder="Fläche">
                cm²
              </InputGroup.Text>
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                onChange={(e) => setSideC(parseFloat(e.target.value))}
                placeholder="Seite γ"
              />
              <InputGroup.Text className="input" placeholder="Seite γ">
                cm
              </InputGroup.Text>
            </InputGroup>

            <Row className="justify-content-md-center">
              <Button
                onClick={() => {
                  setSolution((2 * area) / sideC);
                }}
                variant="primary"
              >
                Berechnen!
              </Button>
              <h1
                style={{ textAlign: "center" }}
                className="justify-content-md-center"
              >
                {solution}
              </h1>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
