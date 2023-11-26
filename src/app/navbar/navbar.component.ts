import { Component, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BlogService } from '../blog.service';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  username: string;
  password: string;
  // isAdmin: boolean = false;
  // isLogin: boolean = false;
  newBlogTitle: string = '';
  newBlogBody: string = '';

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private blogservice: BlogService,
    public authService: AuthServiceService
  ) {
    this.authService.isLogin = localStorage.getItem('isLogin') === 'true';
    this.authService.isAdmin = localStorage.getItem('isAdmin') === 'true';
  }

  openVerticallyCentered(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  login() {
    if (this.username === 'user' && this.password === 'password') {
      this.authService.isLogin = true;
      this.authService.isAdmin = false; // isAdmin sadece admin için kontrol ediliyor, diğer kullanıcılar için false yapalım
      localStorage.setItem('isLogin', this.authService.isLogin.toString());
      localStorage.setItem('isAdmin', this.authService.isAdmin.toString());
      this.modalService.dismissAll();
    } else if (this.username === 'admin' && this.password === 'adminpassword') {
      this.authService.isAdmin = true;
      this.authService.isLogin = true;
      localStorage.setItem('isAdmin', this.authService.isAdmin.toString());
      localStorage.setItem('isLogin', this.authService.isLogin.toString());
      this.modalService.dismissAll();
    } else {
      alert('Invalid username or password');
    }
  }

  logOut() {
    if (confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('isLogin');
      localStorage.removeItem('isAdmin');
      this.authService.isAdmin = false;
      this.authService.isLogin = false;
      alert('Logout successful.');
    }
  }

  // Modal reference
  @ViewChild('content') modalContent: any;

  // Method to open the modal
  openModal() {
    this.modalService.open(this.modalContent, { centered: true });
  }
}
