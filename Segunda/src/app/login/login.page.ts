import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin =  this.formBuilder.group({
    email:['', Validators.compose([Validators.required, Validators.email])],
    senha:['', Validators.compose([Validators.required, Validators.minLength(6)])],
  });

  mensagensErro ={
email: [{tipo: 'required', aviso: 'Preenche essa merda!!'}, 
{tipo: 'email', aviso: 'Tem que ser um email valido fdp'}],
senha: [
{tipo: 'required', aviso: 'Sem senha voce quer entrar seu idiota'}, 
{tipo: 'minLength', aviso: 'mais um pouquinho...'}],
  }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
  }

}
