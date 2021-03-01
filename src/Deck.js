import React, { Component } from "react";
import Card from "./Card";
import axios from "axios";
import "./Deck.css";
const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";
class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let response = await axios.get(`${API_BASE_URL}new/shuffle/`);
    this.setState({ deck: response.data });
  }
  async getCard() {
    let url = `${API_BASE_URL}${this.state.deck.deck_id}/draw/`;
    try {
      let response = await axios.get(url);
      if (!response.data.success) {
        throw new Error("No Cards Left");
      }
      let card = response.data.cards[0];
      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} OF ${card.suit}`
          }
        ]
      }));
    } catch (err) {
      alert(err);
    }
  }
  render() {
    const cards = this.state.drawn.map((c) => {
      return <Card key={c.id} name={c.name} image={c.image} />;
    });

    return (
      <div className="Deck">
        <h1 className="Deck-title">🔷Card Dealer🔷</h1>
        <h1 className="Deck-title subtitle">
          🔷Demo Card Dealer made with React🔷
        </h1>
        <button className="deck-button" onClick={this.getCard}>
          Get A Card!
        </button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}

export default Deck;
