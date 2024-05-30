import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutUsComponent } from "./pages/about-us/about-us.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

export const routes: Routes = [
	{
		path: "about-us",
		component: AboutUsComponent,
	},
	{
		path: "",
		component: HomeComponent,
	},
	{
		path: "**",
		component: NotFoundComponent,
	},
];
