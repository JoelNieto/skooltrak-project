import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthFacade } from '@skooltrak-project/auth/store';

@Component({
  selector: 'skooltrak-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {
  form!: FormGroup;
  logging$ = this.auth.logging$;
  constructor(private auth: AuthFacade, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  signIn() {
    const { username, password } = this.form.value;
    this.auth.login({ username, password });
  }
}
