import { AbstractControl, ValidationErrors } from '@angular/forms';

export const oneCheckboxShouldBeCheckedValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  for (const el of control.value) {
    if (el) {
      return null;
    }
  }
  return { checkbox: { value: 'Should be true' } };
};
