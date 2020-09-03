# Frontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

## Development server
1. Make sure dev dependency is installedm Run `npm install --save-dev @angular-devkit/build-angular`
2. Run `ng serve` 

## Description
- JWT used in localStorage to authorize logged in users on request
- If user has role admin, they can delete any post
- Users can create posts that will be seen by anybody
- Any user can delete their own user
- Only logged in viewer can view thier posts only