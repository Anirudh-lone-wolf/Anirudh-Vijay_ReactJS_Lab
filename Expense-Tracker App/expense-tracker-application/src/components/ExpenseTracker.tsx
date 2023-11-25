import React from "react";
import { pushDataToServer } from "../services/menu";

// Define the types for the props and state
type Props = {
  onTrue: any;
  onClose: any;
};

type State = {
  payeeName: string;
  product: string;
  price: number;
  setDate: string;
};

class ExpenseTracker extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      payeeName: "",
      product: "",
      price: 0,
      setDate: this.setDefaultDate(),
    };
    // Binding methods to the instance
    this.setPayee.bind(this);
    this.setProduct.bind(this);
    this.setPrice.bind(this);
  }

  // Method to set the default date
  setDefaultDate = () => {
    const today = new Date();
    return (
      today.getFullYear() +
      "-" +
      ("0" + (today.getMonth() + 1)).slice(-2) +
      "-" +
      ("0" + today.getDate()).slice(-2)
    );
  };

  // Event handlers for different user inputs while making a new entry
  setPayee = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      payeeName: event.target.value,
    });
  };

  setProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      product: event.target.value,
    });
  };

  setPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Parse the string value to a number using parseFloat or parseInt
    // const priceValue = parseFloat(event.target.value);

    // this.setState({
    //   price: isNaN(priceValue) ? 0 : priceValue,
    // });

    this.setState({
      price: parseInt(event.target.value),
    });
  };

  setNewDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      setDate: event.target.value,
    });
  };

  submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const finalData = {
      ...this.state,
    };

    const data = await pushDataToServer(finalData);
    console.log( data );
    this.props.onTrue();
  };

  el = document.createElement("div");

  render() {

    const element = (
      <>
        <section>
          <header>
            <h1>Add New Item</h1>
            <p>
              Read the below Instructions before proceeding :
              <br />
              Make sure you fill all the fileds where * is provided
            </p>
          </header>

          <form onSubmit={this.submitHandler}>
            <article>
              <p>Name</p>
              <select
                name="Name"
                id="district"
                required
                value={this.state.payeeName}
                onChange={this.setPayee}
              >
                <option value="" defaultChecked>
                  Choose
                </option>
                <option value="Rahul">Rahul</option>
                <option value="Ramesh">Ramesh</option>
              </select>
            </article>

            <article>
              <p>Product Purchased</p>
              <input
                type="text"
                name="Product Purchased"
                id="product"
                required
                value={this.state.product}
                onChange={this.setProduct}
              />
            </article>

            <article>
              <p>Price</p>
              <input
                type="number"
                name="Price"
                id="price"
                required
                value={this.state.price}
                onChange={this.setPrice}
              />
            </article>

            <article>
              <p>Date</p>
              <input
                type="date"
                name="Date"
                id="date"
                required
                value={this.state.setDate}
                onChange={this.setNewDate}
              />
            </article>

            <button className="form-button" onClick={this.props.onClose}>
              Close
            </button>

            <button className="form-button"> Submit </button>
          </form>
        </section>

      </>
    );
    return element;
  }
}

export default ExpenseTracker;

