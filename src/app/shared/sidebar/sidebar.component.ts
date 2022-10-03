import { Component, OnInit } from '@angular/core';

interface MenuItem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent implements OnInit {
  sidebarMenu: MenuItem[] = [
    {
      texto: 'Prueba Falopa',
      ruta: '../pages/prueba-falopa',
    },
    {
      texto: 'Prueba 2',
      ruta: '../pages/prueba2',
    },
    {
      texto: 'Prueba 3',
      ruta: '../pages/prueba3',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.sidebarMenu.forEach((item) => console.log(item));
  }
}
