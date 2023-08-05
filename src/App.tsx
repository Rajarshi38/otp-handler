import { useState } from "react";

function App() {
  const [values, setValues] = useState(new Array(4).fill(""));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => {
      const newArr = [...prev];
      newArr[e.target.tabIndex - 1] = e.target.value;
      return newArr;
    });

    if (e.target.value === "") {
      focusToPreviousInput(e.target);
      return;
    }
    focusToNextInput(e.target);
  };

  const focusToNextInput = (element: HTMLElement) => {
    const nextElement = element.nextElementSibling as HTMLInputElement | null;
    if (nextElement) nextElement.focus();
  };

  const focusToPreviousInput = (element: HTMLElement) => {
    const prevElement = element.previousElementSibling as HTMLInputElement;
    if (prevElement) prevElement.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    switch (e.key) {
      case "ArrowLeft":
        e.preventDefault();
        focusToPreviousInput(target);
        break;
      case "ArrowRight":
        e.preventDefault();
        focusToNextInput(target);
        break;

      default:
        return;
    }
  };

  const onInputFocus = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    const { target } = e;
    target.setSelectionRange(0, target.value.length);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let otpValue = "";
    values.forEach((otp) => (otpValue += otp));
    console.log("Your otp value is: " + otpValue);
  };

  return (
    <div className="container">
      {/* form */}
      <form className="form" id="form-one" onSubmit={handleSubmit}>
        {/* otp inputs container */}
        <div className="otp-inputs">
          <input
            className="otp-input input-1"
            maxLength={1}
            onChange={onChange}
            tabIndex={1}
            onKeyDown={onKeyDown}
            onFocus={onInputFocus}
          />
          <input
            className="otp-input input-2"
            maxLength={1}
            tabIndex={2}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onFocus={onInputFocus}
          />
          <input
            className="otp-input input-3"
            maxLength={1}
            tabIndex={3}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onFocus={onInputFocus}
          />
          <input
            className="otp-input input-4"
            maxLength={1}
            tabIndex={4}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onFocus={onInputFocus}
          />
        </div>
        {/* form submit button */}
        <button type="submit" className="form-btn" tabIndex={5}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
