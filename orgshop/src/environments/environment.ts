// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBrj7j0fBmfYFB1CZTxihOwYVtx791q48c",
    authDomain: "orgshop-b0d5a.firebaseapp.com",
    projectId: "orgshop-b0d5a",
    storageBucket: "orgshop-b0d5a.appspot.com",
    messagingSenderId: "247533823120",
    appId: "1:247533823120:web:bc052151eb5f964e75e415",
    measurementId: "${config.measurementId}"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
