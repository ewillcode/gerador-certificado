import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
}
