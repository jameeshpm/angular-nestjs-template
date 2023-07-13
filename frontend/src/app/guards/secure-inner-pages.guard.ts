import { CanActivateFn } from '@angular/router';

export const secureInnerPagesGuard: CanActivateFn = (route, state) => {
  return true;
};
