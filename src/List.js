'use strict';

import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
  generateCards() {
    // const cardElems = [];
    
    // for (let i = 0; i < this.props.cards.length; i++) {
    //   cardElems.push(<Card 
    //     title={this.props.cards[i].title}
    //     content={this.props.cards[i].title} />)
    // }

    const cardElems = this.props.cards.map(card => <Card title={card.title} content={card.content}/>);

    return cardElems;
  }
  
  render() {
    return (
      <section class="List">
        <header class="List-header">
          <h2>{this.props.header}</h2>
        </header>
        <div class="List-cards">
          {this.generateCards()}
        <button type="button" class="List-add-button">
          + Add Random Card
        </button>
        </div>
      </section>
    );
  }
}

export default List;