import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { DropdownModule } from "ng2-dropdown";
import { JustificantesService } from "../../services/justificantes.service"

@NgModule({
    imports: [ RouterModule, CommonModule, DropdownModule ],
    declarations: [ SidebarComponent ],
    exports: [ SidebarComponent ],
    providers: [JustificantesService]
})

export class SidebarModule {}
