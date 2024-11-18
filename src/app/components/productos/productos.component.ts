import { Component } from '@angular/core';

declare var bootstrap: any; // Declarar bootstrap

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  productos = [
    { nombre: 'DISCO DE EMBRAGUE', imagen: 'assets/img/producto/valeo/DISCO-DE-EMBRAGUE-768x551.png', categoria: 'filter-app' },
    { nombre: 'PIÑON Y CORONA', imagen: 'assets/img/producto/HANSANG/14-HANSANG-PINON-Y-CORONA-768x512.jpg', categoria: 'filter-web' },
    { nombre: 'PLATO DE EMBRAGUE', imagen: 'assets/img/producto/valeo/PLATO-DE-EMBRAGUE-768x515.png', categoria: 'filter-app' },
    { nombre: 'PASTILLA DE FRENO HI-Q', imagen: 'assets/img/producto/SANGSIN/pastilla-hiq.1-2-768x469.png', categoria: 'filter-card' },
    { nombre: 'PROPULSOR Y DESLIZANTE', imagen: 'assets/img/producto/HANSANG/PROPULSOR-Y-DESLIZANTE-3-768x636.png', categoria: 'filter-web' },
    { nombre: 'VOLANTE DE MOTOR BIMASA Y BOMBA', imagen: 'assets/img/producto/valeo/IPEX080internet-768x512.jpg', categoria: 'filter-app' },
    { nombre: 'PASTILLA DE FRENO HI-Q SEVERE DUTY', imagen: 'assets/img/producto/SANGSIN/pastilla-severe-duty.1-1-768x523.png', categoria: 'filter-card' },
    { nombre: 'PASTILLA DE FRENO HAGEN', imagen: 'assets/img/producto/SANGSIN/pastilla-hagen.1-3-768x492.png', categoria: 'filter-card' },
    { nombre: 'TRENFIJO', imagen: 'assets/img/producto/HANSANG/TRENFIJO2-768x690.jpg', categoria: 'filter-web' },
  ];

  productoSeleccionado: string = '';
  activeFilter: string = '*';  // Variable para gestionar el filtro activo

  // Filtrar los productos según la categoría seleccionada
  filtrarProductos(categoria: string) {
    this.activeFilter = categoria;  // Actualizar la categoría activa
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => {
      if (categoria === '*' || item.classList.contains(categoria)) {
        item.classList.remove('d-none');
      } else {
        item.classList.add('d-none');
      }
    });
  }

  mostrarProducto(event: Event, imagen: string) {
    event.preventDefault(); // Evita el desplazamiento
    this.productoSeleccionado = imagen;
    const modal = new bootstrap.Modal(document.getElementById('productoModal'));
    modal.show();
  }
}
