// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyDenxQBZenfGmbyHGibAzARF8ySnPo7tvI",
  authDomain: "prueba-tecnoturis.firebaseapp.com",
  projectId: "prueba-tecnoturis",
  storageBucket: "prueba-tecnoturis.appspot.com",
  messagingSenderId: "296825118512",
  appId: "1:296825118512:web:271b88a4ca6996e2b032f5",
  measurementId: "G-P363H0ZDG9",
};

export const environment = {
  production: false,
  firebaseConfig,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
