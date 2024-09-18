import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleformComponent } from './components/simpleform/simpleform.component';
import { UserageComponent } from './components/userage/userage.component';
import { UsergreetingComponent } from './components/usergreeting/usergreeting.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TextlengthComponent } from './components/textlength/textlength.component';
import { CurrencyconverterComponent } from './components/currencyconverter/currencyconverter.component';

const routes: Routes = [
  { path: 'display-hello-world', component: DisplayhelloworldComponent },
  { path: 'show-hello-button', component: ShowhellobuttonComponent },
  { path: 'display-name', component: DisplaynameComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'simple-form', component: SimpleformComponent },
  { path: 'user-age', component: UserageComponent },
  { path: 'user-greeting', component: UsergreetingComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'text-length', component: TextlengthComponent },
  { path: 'currency-converter', component: CurrencyconverterComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
