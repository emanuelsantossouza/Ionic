import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController) { }


  async comprar() {
    const alert = await this.alertController.create({
      header: 'Pedido Realizado.',
      subHeader: 'Obrigador por utilizar os nosso serviços.',
      message: `<p>As suas pizzas estara prontas entre 30 a 50 minutos.</p>`,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
