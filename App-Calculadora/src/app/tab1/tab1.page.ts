import { Component, Input, NgModule } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  valor1 = '';
  valor2 = '';
  conta='';
  opera='';

  constructor(private alertController: AlertController) {}
  
  async soma() {

    this.conta = (parseFloat(this.valor1)+parseFloat(this.valor2)).toString();
    // eslint-disable-next-line @typescript-eslint/quotes
    this.opera = "soma";
    const alert = await this.alertController.create({
      header: `Resultado`,
      message: `${this.valor1} + ${this.valor2} = ${this.conta}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async sub() {
    this.conta = (parseFloat(this.valor1)-parseFloat(this.valor2)).toString();
    // eslint-disable-next-line @typescript-eslint/quotes
    this.opera = "subtração";
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `${this.valor1} - ${this.valor2} = ${this.conta}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async div() {
    this.conta = (parseFloat(this.valor1)/parseFloat(this.valor2)).toString();
    // eslint-disable-next-line @typescript-eslint/quotes
    this.opera = "Divisão";
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `${this.valor1} / ${this.valor2} = ${this.conta}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async mult() {
    this.conta= (parseFloat(this.valor1)*parseFloat(this.valor2)).toString();
    // eslint-disable-next-line @typescript-eslint/quotes
    this.opera = "multiplicação";
    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `${this.valor1} X ${this.valor2} = ${this.conta}`,
      buttons: ['OK'],
    });

    await alert.present();
  }



// Calculo dos valores maior e menor
  async maior() {
    if (this.valor1 < this.valor2){
      const alert = await this.alertController.create({
        header: 'Valores',
        subHeader: 'O maior valor é:',
        message: `${this.valor2}`,
        buttons: ['OK'],
      });

      await alert.present();
    }else {

  const alert = await this.alertController.create({
    header: 'Valores',
    subHeader: 'O maior valor é:',
    message: `${this.valor1}`,
    buttons: ['OK'],
  });

    await alert.present();
}
}

      // Calculo do menor valor
async menor() {
  if (this.valor1 < this.valor2){
    const alert = await this.alertController.create({
      header: 'Valores',
      subHeader: 'O menor valor é:',
      message: `${this.valor1}`,
      buttons: ['OK'],
    });

    await alert.present();
  }else {

const alert = await this.alertController.create({
  header: 'Valores',
  subHeader: 'O menor valor é:',
  message: `${this.valor2}`,
  buttons: ['OK'],
});

  await alert.present();
}
}

limpar() {
  this.valor1='';
  this.valor2='';
  this.conta='';
  this.opera='';
}

}

