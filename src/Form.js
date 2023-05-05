import Form from "react-bootstrap/Form"


function Formselect() {
    return (
        <Form.Select aria-label="Default select example">
        <option value="0">Fear</option>
        <option value="1">Failure</option>
        <option value="2">Death</option>
        <option value="3">Hope</option>
        <option value="4">Money</option>
      </Form.Select>
      )
  }
  
  export default Formselect;