import { Component, NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { InicioComponent } from "../components/inicio/inicio.component"
import { AboutComponent } from "../components/about/about.component"
import { ContactoComponent } from "../components/contacto/contacto.component"
import { ListadoUsuariosComponent } from "../components/listado-usuarios/listado-usuarios.component"

const routes : Routes = [
    {
        path:'inicio',
        component: InicioComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: 'listado',
        component: ListadoUsuariosComponent
    },
]

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }