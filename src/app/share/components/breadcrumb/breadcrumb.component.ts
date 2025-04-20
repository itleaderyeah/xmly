import { Component, OnInit, TemplateRef, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'xm-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class BreadcrumbComponent implements OnInit {
  @Input() xmSeparatorTpl: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
  }

}
