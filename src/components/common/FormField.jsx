import { Field } from "formik";
import { PropTypes } from "prop-types";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const FormField = ({
  label,
  name,
  placeholder,
  errors,
  touched,
  isOptional,
}) => {
  return (
    <div className={`form-elem ${(touched[name] && errors[name]) ? "has-error" : ""}`}>
      <label htmlFor="" className="form-lbl">
        {label} {isOptional && <span className="form-opt">(optional)</span>}
      </label>
      <div className="form-ctrl-wrap">
        <Field
          type="text"
          className="form-ctrl"
          placeholder={placeholder}
          name={name}
        />
        {touched[name] && (
          <span className="form-symbol">
            {errors[name] ? (
              <span className="form-symbol-invalid">
                <FaExclamationCircle />
              </span>
            ) : (
              <span className="form-symbol-valid">
                <FaCheckCircle />
              </span>
            )}
          </span>
        )}
        {errors[name] && touched[name] && (
          <p className="error-text">{errors[name]}</p>
        )}
      </div>
    </div>
  );
};

export default FormField;

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  errors: PropTypes.object.isRequired,
  touched: PropTypes.object.isRequired,
  isOptional: PropTypes.bool,
};
