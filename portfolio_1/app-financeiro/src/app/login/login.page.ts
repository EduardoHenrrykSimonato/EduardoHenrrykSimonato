import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Login{
  usuario:string;
  senha:string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
    standalone: false
})
export class LoginPage implements OnInit {

login = {
    usuario: '',
    senha: '',
  }

  usuariosCadastrados: Login[]=[];

  avancar(){
    this.router.navigate(['/home'])
  }

  excluirUsuario(index:number){
    this.usuariosCadastrados.splice(index, 1)
  }

  limparFormulario(){
    this.login ={
      usuario:'',
      senha:'',
    };
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}