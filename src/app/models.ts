export type FieldType = 'text' | 'textarea' | 'number' | 'select' | 'radio' | 'checkbox' | 'date' | 'email' | 'password';


export interface ValidatorDef {
  name: string; // 'required' | 'min' | 'max' | 'minLength' | 'maxLength' | 'pattern' | 'custom'
  value?: any;
  message?: string;
}


export interface VisibilityRule {
  fieldId: string;
  operator: '==' | '!=' | '>' | '<' | '>=' | '<=' | 'in' | 'notin';
  value: any;
}


export interface FieldGridPosition {
  colStart?: number;
  colSpan?: number;
  rowStart?: number;
  rowSpan?: number;
}


export interface FieldSchema {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  options?: Array<{ label: string, value: any }>;
  validators?: ValidatorDef[];
  defaultValue?: any;
  grid?: FieldGridPosition;
  visibility?: { rules: VisibilityRule[]; mode?: 'AND' | 'OR' };
}


export interface FormLayout {
  columns: number;
  gutter?: number;
}


export interface FormTemplate {
  id: string;
  name: string;
  layout: FormLayout;
  fields: FieldSchema[];
}