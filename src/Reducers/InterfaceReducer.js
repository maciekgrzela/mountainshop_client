import { WELCOME_SKIPPED } from '../Actions/ActionTypes/Interface';
import { initialInterfaceState } from '../State/state';

export const interfaceReducer = (state = initialInterfaceState, action) => {
  switch (action.type) {
    case WELCOME_SKIPPED:
      return {
        welcomeSkipped: !state.welcomeSkipped,
      };
    default:
      return state;
  }
};
