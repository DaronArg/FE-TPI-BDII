import { bootstrapApplication } from "@angular/platform-browser"
import { provideRouter } from "@angular/router"
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async"
import { AppComponent } from "./app/app.component"
import { routes } from "./app/app.routes"
import {provideHttpClient} from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient()],
}).catch((err) => console.error(err))
