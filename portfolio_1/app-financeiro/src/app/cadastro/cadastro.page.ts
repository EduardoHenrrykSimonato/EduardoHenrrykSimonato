import { Component, OnInit } from '@angular/core';

interface Login{
  usuario:string;
  senha:string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false
})
export class CadastroPage implements OnInit {

login = {
    usuario: '',
    senha: '',
  }

  usuariosCadastrados: Login[]=[];

  cadastrarUsuario(){
    const usuario = this.login.usuario.trim();
    const senha = this.login.senha;

    if(!usuario || senha === null ){
      return;
    }

    this.usuariosCadastrados.unshift({usuario, senha});
    this.limparFormulario();
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

  constructor() { }

  ngOnInit() {
  }

}
