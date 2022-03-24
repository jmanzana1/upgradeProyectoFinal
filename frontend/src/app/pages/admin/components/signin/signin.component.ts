import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-signin',
	templateUrl: './signin.component.html',
	styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
	
	signinForm: FormGroup;
	public submitted:Boolean = false;
	public error:Boolean = false;
	
	constructor(
		public fb: FormBuilder,
		public authService: AuthService,
		public router: Router,
	) {
		this.signinForm = this.fb.group({
			email: ['' , [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(5)]]
		})
	}

	ngOnInit(): void {
	}

	loginUser() {
		
		this.submitted=true;
		
		if (this.signinForm.valid){

			this.error=false;
			
			this.authService.signIn(this.signinForm.value)
				.subscribe({
					next: (data) => {
						console.log("data",data);
						localStorage.setItem('access_token', data.token)
						this.router.navigate(['/admin'])
					},
					error: (error)=>{
						console.log("error",error);
						this.error=true;
					}
				}
			)
		}
  }

}
