import { HEROES } from '../mock-heroes';

import { addMessage } from './messages';

/* -----------  ACTION TYPES ----------- */

const LOAD_HEROES = 'LOAD_HEROES';
const SET_SELECTED = 'SET_SELECTED';
const EDIT_HERO = 'EDIT_HERO';

/* -----------  ACTION CREATORS ----------- */

const loadHeroes = (heroesList) => ({ type: LOAD_HEROES, heroesList });
export const setSelected = (selectedIdx) => ({ type: SET_SELECTED, selectedIdx });
const editHero = (selectedIdx, newHeroProps ) => ({ type: EDIT_HERO, selectedIdx, newHeroProps });

/* -----------  REDUCER ----------- */

export default function reducer(state = { selectedIdx: null, list: [] }, action) {
  switch (action.type) {
    case LOAD_HEROES:
      return Object.assign({}, state, {list: action.heroesList});
    case SET_SELECTED:
      return Object.assign({}, state, {selectedIdx: action.selectedIdx});
    case EDIT_HERO:
      return Object.assign({}, state, {list:
        state.list.map((hero, idx) => {
          return action.selectedIdx === idx ?
            Object.assign({}, hero, action.newHeroProps ) :
            hero
        })
      });
    default:
      return state;
  }
}

/* -----------  THUNK CREATORS ----------- */

export const getAndLoadHeroes = () =>
  dispatch =>
    Promise.resolve(HEROES)
      .then(heroes => {
        dispatch(loadHeroes(heroes));
        dispatch(addMessage('HeroService: fetched heroes'));
      });

export const updateHero = (selectedIdx, newHeroProps) =>
  dispatch =>
    new Promise(resolve => {
      resolve(Object.assign(HEROES[selectedIdx], newHeroProps));
    })
    .then(updatedHero => dispatch(editHero(selectedIdx, updatedHero)));