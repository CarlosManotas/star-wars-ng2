import { RouterModule} from '@angular/router';
import {ListComponent} from './list/list.component';
import { DetailComponent } from './detail/detail.component';

const rutas = [
  {path: '', component:ListComponent},
  {path:'people/:id', component:DetailComponent}
];

export default RouterModule.forRoot(rutas);
