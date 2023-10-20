import PropTypes from "prop-types";
import styles from "./Field.module.css";

const Field = ({ label, name, onChange, type, placeholder }) => {
    return (
        <div className="text-center">
            <div className={`${styles.formControl}`}>
                <label className={styles.label}>{label}</label>
                <input
                    name={name}
                    type={type}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="form-control"
                    style={{ backgroundColor: "#F4F4F4", color: "#333", fontWeight: "bold" }}
                />
            </div>
        </div>
    );
};

Field.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Field;