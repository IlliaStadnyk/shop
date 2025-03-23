import styles from "./OptionalColor.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const OptionalColors = props => {
    return (
        <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {props.colors.map(color =>
                <li
                    key={color}>
                    <button
                        type="button"
                        className={clsx(styles[`color${color.charAt(0).toUpperCase() + color.slice(1)}`],
                            props.currentColor === color && styles.active)}
                        onClick={() => props.setCurrentColor(color)}
                    />
                </li>)}
            </ul>
        </div>

    );
}

OptionalColors.propTypes = {
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
}
export default OptionalColors;