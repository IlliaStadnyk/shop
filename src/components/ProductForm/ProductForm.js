import OptionalSize from "../OptionalSize/OptionalSize";
import OptionalColor from "../OptionalColor/OptionalColor";
import Button from "../Button/Button";
import styles from "./ProductForm.module.scss";
import PropTypes from "prop-types";

const ProductForm = props => {
    return (
        <form>
            <OptionalSize sizes={props.sizes} currentSize={props.currentSize} setCurrentSize={props.setCurrentSize}/>
            <OptionalColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor}/>
            <Button className={styles.button} action={(e) => props.action(e)}>
                <span className="fa fa-shopping-cart"/>
            </Button>
        </form>
    );
}

ProductForm.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.shape({name: PropTypes.string.isRequired})).isRequired,
    currentColor: PropTypes.string.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
}
export default ProductForm;