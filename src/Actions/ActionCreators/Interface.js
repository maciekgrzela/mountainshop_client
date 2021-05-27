import { WELCOME_SKIPPED } from '../ActionTypes/Interface';

export const skipWelcome = () => {
  return {
    type: WELCOME_SKIPPED,
  };
};
