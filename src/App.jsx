import { useState } from "react";
import { Container, InputGroup, Form, Button } from "react-bootstrap";

export default function App() {
  const [token, setToken] = useState("");

  function handlePayment() {
    console.log("token", token);

    if (token.length === 0) {
      alert("Token tidak boleh kosong");
      return;
    }

    window.snap.pay(token, {
      onSuccess: function (result) {
        console.log("INI SUKSES", result);
      },
      onPending: (result) => {
        console.log("INI PENDING", result);
      },
      onError: function (result) {
        console.log("INI ERROR", result);
      },
      onClose: () => {
        console.log("INI CLOSE");
      },
    });
  }

  return (
    <Container className="py-5">
      <Form.Label htmlFor="snap_token">Masukan snap token anda!</Form.Label>
      <InputGroup>
        <Form.Control
          id="snap_token"
          type="text"
          name="token"
          placeholder="Isi/pastekan disini..."
          value={token}
          onChange={(event) => {
            setToken(event.target.value);
          }}
        />
        <Button variant="primary" onClick={handlePayment}>
          Pay
        </Button>
      </InputGroup>
    </Container>
  );
}
