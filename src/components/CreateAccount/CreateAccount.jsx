import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/css/style.css';
import validateValues from './validateValues';

const CreateAccount = () => {
  let navigate = useNavigate();
  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phoneNumber: '',
    isGoing: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAccount = (e) => {
    e.preventDefault();
    setErrors(validateValues(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(errors.length);
    console.log(isSubmit);
    if (Object.keys(errors).length === 0 && isSubmit) {
      navigate('/chart');
    }
  }, [errors]);

  return (
    <div className="row ">
      <div className=" col ">
        <div className="selectDate">
          <div className="selectDate__details">
            <h5 className="selectDate__details__title">Choose a date range</h5>
            <p className="selectDate__details__para">
              Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit.
              Voluptatem, ullam.
            </p>
          </div>
        </div>
      </div>

      <div className="col">
        <form className="form" onSubmit={handleAccount}>
          <h3>Create an account</h3>
          <label className="form__label">Your email address</label>
          <br />
          <input
            className="form__input"
            type="text"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <h6 className="form__error">{errors.email}</h6>
          <br />
          <label className="form__label">Your password</label>
          <br />
          <input
            className="form__input"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <h6 className="form__error">{errors.password}</h6>
          <br />
          <label className="form__label">Confirm your password</label>
          <br />
          <input
            className="form__input"
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          <h6 className="form__error">{errors.confirmPassword}</h6>
          <br />
          <label className="form__label">Your full name</label>
          <br />
          <input
            className="form__input"
            type="text"
            name="fullName"
            value={formValues.fullName}
            onChange={handleChange}
          />
          <h6 className="form__error">{errors.name}</h6>
          <br />
          <label className="form__label">Your phone number</label>
          <br />
          <input
            className="form__input"
            type="text"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
          />
          <h6 className="form__error">{errors.phoneNumber}</h6>

          <label className="form__checkbox">
            <input
              className="form__heckbox__input"
              type="checkbox"
              name="isGoing"
              checked={formValues.isGoing}
              onChange={handleChange}
            />
            <p className="form__checkbox__para">
              {' '}
              I read and agree terms and conditions
            </p>
          </label>
          <h6 className="form__error">{errors.agreement}</h6>
          <br />
          <button type="submit" value="create account">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateAccount;
