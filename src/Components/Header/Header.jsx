import UpperSection from "../../UI/UpperSection/UpperSection.styled";
import Form from "../Form/Form";

const Header = () => {
  return (
    <UpperSection>
      <img src="..\assert\images\logo.svg" alt="Logo" aria-hidden="true" />
      <div>
        <h3>
          We are launching <span>soon!</span>
        </h3>
        <p>Subscribe and get notified</p>
      </div>
      <Form />
    </UpperSection>
  );
};

export default Header;
