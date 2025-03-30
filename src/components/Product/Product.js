import styles from './Product.module.scss';
import PropTypes from 'prop-types'
import {useState, useMemo} from 'react'
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);// console.log( props.sizes[currentSize])
  const getPrice = useMemo(() =>{
    const size = props.sizes.find(size => size.name === currentSize);
    return props.basePrice + size.additionalPrice;
  }, [currentSize]);

  const preparePurchase = (event) =>{
    event.preventDefault();
    const summary= {
      name: props.name,
      price: getPrice,
      size: currentSize,
      color: currentColor,
    };
    console.log(summary);
  }

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductForm sizes={props.sizes}
                     colors={props.colors}
                     currentSize={currentSize}
                     setCurrentSize={setCurrentSize}
                     currentColor={currentColor}
                     setCurrentColor={setCurrentColor}
                     action={preparePurchase}/>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        additionalPrice: PropTypes.number.isRequired,
      })
  ).isRequired,
};

export default Product;