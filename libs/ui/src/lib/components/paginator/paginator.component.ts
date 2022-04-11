import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

import { UtilService } from '../../util.service';

@Component({
  selector: 'skooltrak-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent implements OnInit, OnChanges {
  @Input() itemsCount!: number;
  @Input() pageSize!: number;
  @Output() paginate = new EventEmitter();

  pager: any = {};
  sizes!: number[];
  private count!: number;
  constructor(private readonly util: UtilService) {}

  ngOnInit(): void {
    this.sizes = [5, 10, 15, 20];
    this.setPage(1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const count: SimpleChange = changes['itemsCount'];
    this.count = count.currentValue;
    this.setPage(1);
  }

  setPage(page: number): void {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    this.pager = this.util.paginate(this.count, page, this.pageSize);

    this.paginate.emit(this.pager);
  }
}
