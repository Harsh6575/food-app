import Modal from "../UI/Modal";
import "./Cart.css";

const Cart = (props) => {
  const CartItems = (
    <ul>
      {[{ id: 1, name: "Pizza", price: "$10" }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {CartItems}
      <div className="total">
        <span>
            Total Amount
        </span>
        <span>
            $10
        </span>
      </div>
      <div className="action">
        <button className="button-alt" onClick={props.onClose}>Close</button>
        <button className="button">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
