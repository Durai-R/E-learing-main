import "./InputComp.css";

const InputComponent = () => {
  return (
    <>
      <label>Enter Your Email</label>
      <div className="InptCont flex">
          <input type='text' placeholder='Enter the ...'/>
      </div>
    </>
  )
}

export default InputComponent;