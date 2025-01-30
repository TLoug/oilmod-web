import { MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MatCheckboxDefaultOptions } from '@angular/material/checkbox';

export const formFieldConfig: MatFormFieldDefaultOptions = {
  floatLabel: 'always',
  color: 'primary',
  appearance: 'outline',
};

export const checkboxConfig: MatCheckboxDefaultOptions = {
  color: 'primary',
  clickAction: 'check-indeterminate'
};
