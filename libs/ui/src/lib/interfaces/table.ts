/* eslint-disable @typescript-eslint/ban-types */
import { Column } from './column';

export interface TableOptions {
  columns: Column[];
  hasId: boolean;
  type: 'single-select' | 'datatable' | 'select';
  style?: string;
  title?: string;
  pageable: boolean;
  deletable?: boolean;
  creatable?: boolean;
  addMethod: 'inline' | 'modal';
  detailsURL?: String[];
  newURL?: String[];
  showID?: boolean;
  lookup?: boolean;
  exportToCSV?: boolean;
  exportToPDF?: boolean;
  reportsOnly?: boolean;
  showTitle?: boolean;
  sortColumn?: string;
  sortDesc?: boolean;
  pageSize: number;
  searchable: boolean;
  modalSize?: 'lg' | 'sm';
  accessCode: string;
  permissions: {
    read: boolean;
    details: boolean;
    create: boolean;
    edit: boolean;
    delete: boolean;
  };
}

export class TableOptions {
  constructor(
    public type: 'datatable' | 'select' | 'single-select' = 'datatable',
    public permissions = {
      read: true,
      details: true,
      create: true,
      edit: true,
      delete: true,
    },
    public pageable = true,
    public addMethod: 'inline' | 'modal' = 'modal',
    public searchable = true,
    public hasId = true,
    public pageSize = 10
  ) {}
}
