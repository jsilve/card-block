import React from 'react';
import {connect} from 'react-redux';
import {default as Card} from '../components/Card';
import '../styles/CardBlockView.scss';

class CardBlockView extends React.Component {
    render() {
        const {dispatch, cards} = this.props;
        return (
            <div className='card-block-view'>
                {cards.map((c, i) =>
                   <Card key={i} data={c} index={i} dispatch={dispatch}/>
                )}
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
    cards: state.cardViewReducer.cards,
  };
}

export default connect(mapStateToProps)(CardBlockView);