import _ from 'lodash';

const initialState = {
    cards: [{flipped: false,
             front: {text: "What did the ocean say to the shore?", align: "center"},
             back:  {text: "Nothing. It just waved",
                    images: ['https://media.giphy.com/media/3o6ZtnIkZgYN172BVu/giphy.gif']
                    }
            },
            {flipped: false,
             front: {text: "What did the beaver say to the tree?", align: "center"},
             back:  {text: "It's been nice gnawing you.",
                    images: ["https://i.ytimg.com/vi/EDHRiicoUz0/maxresdefault.jpg"]}
            },
            {flipped: false,
                front: {text: "How does the moon cut its hair?", align: "center"},
                back: {text: ". . . Eclipse it",
                       images: [ 'https://cdn.shopify.com/s/files/1/1061/1924/files/Woman_Getting_Haircut_Emoji.png?9898922749706957214']
                      },
            }]
};

const cardViewReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FLIP_CARD':
            let cards = _.cloneDeep(state.cards);
            cards[action.index].flipped = !cards[action.index].flipped
            return Object.assign({}, state, { cards })
        default:
          return state
    }
}

export default cardViewReducer