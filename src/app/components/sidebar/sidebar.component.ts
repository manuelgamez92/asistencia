import { Component, OnInit } from '@angular/core';
import { JustificantesService } from "../../services/justificantes.service"

declare var $:any;

export interface RouteInfo {
    path: string;
    title: string;
    mensaje: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Inicio', mensaje: 'SISTEMA DE CONTROL DE ASISTENCIAS', icon: 'ti-layout-grid3-alt', class: '' },
    { path: 'justificantes', title: 'Justificantes', mensaje: 'PANEL DE BÚSQUEDA PARA JUSTIFICACIONES', icon:'ti-clipboard', class: '' },
    { path: 'typography', title: 'Consultas', mensaje: 'CONSULTA DE EMPLEADOS',  icon:'ti-search', class: '' },
    { path: 'maps', title: 'Reportes',mensaje: 'REPORTES OPTIMIZADOS', icon:'ti-map', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    providers: [JustificantesService]
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu(){
        if($(window).width() > 991){
            return false;
        }
        return true;
    }
}
