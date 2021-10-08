import { useState } from "react";
import Div from "../../UI/Form/Form.style";

const Form = () => {
  const [isValid, setIsValid] = useState(false);
  const [isEmpty, setisEmpty] = useState(false);
  const [email, setEmail] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    if (email === "") {
      setisEmpty(true);
      setIsValid(false);
    }
    if (!isValid) {
      setEmail("");
      console.log(email);
    }
  };
  const sendEmail = event => {
    if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
    ) {
      setisEmpty(false);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setEmail(event.target.value);
  };

  return (
    <Div>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            placeholder="Your email address"
            onChange={sendEmail}
            value={email}
            className={(isValid && "error") || (isEmpty && "error")}
          />
          {isValid && <em>Please provide a valid email address</em>}
          {isEmpty && (
            <em>Whoops! It looks like you forgot to add your email</em>
          )}
        </div>
        <button type="submit">Notify Me</button>
      </form>
    </Div>
  );
};

export default Form;
