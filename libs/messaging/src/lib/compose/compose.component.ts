import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Quill from 'quill';
import ImageResize from 'quill-image-resize-module';
import { MessagesFacade } from '../+state/messages.facade';

Quill.register('modules/imageResize', ImageResize);
@Component({
  selector: 'skooltrak-project-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComposeComponent implements OnInit {
  modules = {};
  contacts$ = this.facade.contacts$;
  form!: FormGroup;
  constructor(
    public modal: NgbActiveModal,
    private readonly facade: MessagesFacade,
    private readonly fb: FormBuilder
  ) {
    this.modules = {
      imageResize: {},
    };
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      subject: ['', [Validators.required]],
      content: ['', [Validators.required]],
      receivers: [[], [Validators.minLength(1)]],
    });
  }

  save() {
    const { value } = this.form;
    this.facade.sendMessage(value);
  }
}
