import react, { Component } from "react";
import axios from "axios";
const API_URL = "https://deckofcardsapi.com/api/deck/new/shuffle/";
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null };
  }
  async componentDidMount() {
    let response = await axios.get(API_URL);
    this.setState({ deck: response.data });
  }

  render() {
    return <div>{this.state.deck ? this.state.deck.deck_id : "hello"}</div>;
  }
}

export default Deck;
