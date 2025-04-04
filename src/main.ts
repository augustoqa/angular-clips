import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'

import { environment } from './environments/environments'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

firebase.initializeApp(environment.firebase)

let appInit = false

firebase.auth().onAuthStateChanged(() => {
  if (!appInit) {
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err))
  }

  appInit = true
})
