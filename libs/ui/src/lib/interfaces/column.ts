import { Observable } from 'rxjs';

export interface Column {
  name: string;
  title: string;
  type?:
    | 'date'
    | 'datetime'
    | 'decimal'
    | 'email'
    | 'number'
    | 'percent'
    | 'money'
    | 'boolean'
    | 'mobile-phone'
    | 'home-phone'
    | 'checkbox'
    | 'object'
    | 'text'
    | 'file'
    | 'array'
    | 'count';
  sortable?: boolean;
  filterable?: boolean;
  pipe?: string;
  hidden?: boolean;
  style?: string;
  readonly?: boolean;
  list?: any[];
  asyncList?: Observable<any[]>;
  listID?: any;
  listDisplay?: any;
  objectColumn?: string;
  objectID?: string;
  objectText?: string;
  lookup?: boolean;
  lookupValues?: any[];
  customClasses?: string;
  rateField?: boolean;
  fileURL?: string;
  fileID?: string;
  fileName?: string;
  required?: boolean;
  filterField?: string;
  filterColumn?: string;
  model?: Column[];
  removeSelf?: boolean;
}
