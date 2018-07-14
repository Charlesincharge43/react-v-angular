

/* -----------  ACTION TYPES ----------- */

const GET_HEROES = 'GET_HEROES';
const SET_SELECTED = 'SET_SELECTED';
const EDIT_HERO = 'EDIT_HERO';

/* -----------  ACTION CREATORS ----------- */

const getHeroes = (heroesList) => ({ type: GET_HEROES, heroesList });
const setSelected = (selectedIdx) => ({ type: SET_SELECTED, selectedIdx });
const editHero = (selectedIdx, newHeroProperties ) => ({ type: EDIT_HERO, selectedIdx, newHeroProperties });

/* -----------  REDUCER ----------- */

export default function reducer(state = { selectedIdx: null, list: [] }, action) {
  switch (action.type) {
    case GET_HEROES:
      return Object.assign({}, state, {list: action.heroesList});
    case SET_SELECTED:
      return Object.assign({}, state, {selectedIdx: action.selectedIdx});
    case EDIT_HERO:
      return Object.assign({}, state, {list:
        action.heroesList.map((hero, idx) => {
          return selectedIdx === idx ?
            Object.assign({}, hero, action.newHeroProperties ) :
            hero
        })
      });
    default:
      return state;
  }
}

/* -----------  THUNK CREATORS ----------- */

export const thunkedGetHeroes = () => dispatch => dispatch(clearPlacesOfInterest());

export const 