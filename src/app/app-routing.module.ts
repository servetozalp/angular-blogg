import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent },
  {path: 'home', component: BlogHeaderComponent },
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'contact', component: ContactComponent },
  {path: 'blog-details/:blogID', component: BlogDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
