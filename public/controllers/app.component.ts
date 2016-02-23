import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { TpCalcComponent } from './tp-calc.component'
import { TpComponent } from './tp.component'

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Tp']">主页</a>
      <a [routerLink]="['TpCalc']">Thinkpad 代购费用计算</a>
      
    </nav>
    <router-outlet></router-outlet>
  `,
  //styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS
  ]
})
@RouteConfig([
  {
    path: '/',
    name: 'Tp',
    component: TpComponent,
    useAsDefault: true
  },
  {
    path: '/tp-calc',
    name: 'TpCalc',
    component: TpCalcComponent
  }
])
export class AppComponent {
  title = 'Thinkpad 笔记本电脑代购价格计算';
}


