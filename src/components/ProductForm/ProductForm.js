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
    colors: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
}
export default ProductForm;