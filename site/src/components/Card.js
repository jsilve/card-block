import React from 'react';
import {flipCard} from '../actions';
import '../styles/Card.scss';

class Card extends React.Component {
    shouldComponentRender(nextState, nextProps){
        return nextProps.data.flipped !== this.props.data.flipped
    }

    render() {
        const {dispatch, data, index} = this.props;
        const {front, back, flipped} = data;
        return (
            <div className={`card-container ${flipped ? "flipped" : ""}`} onClick={() => {dispatch(flipCard(index))}}>
                <CardFront>
                    <div className={`front-content ${front.align ? front.align : ''}`}>
                        <div>{front.text}</div>
                    </div>
                </CardFront>
                <CardBack>
                    <div className={`back-content ${back.align ? back.align : ''}`}>
                        <div className='faded-content'></div>
                        {back.images ? back.images.map((i, index) => {
                                            return <img key={index} role="presentation" src={i} />
                                        }) : []}
                        <div className='back-text'>
                            {back.text}
                        </div>
                    </div>
                </CardBack>
            </div>
        );
    }
}

const CardFront = React.createClass({
  render() {
    return <div className="front">
        {this.props.children}
    </div>;
  }
});

const CardBack = React.createClass({
  render() {
    return <div className="back">
        {this.props.children}
        </div>;
  }
});

export default Card;
