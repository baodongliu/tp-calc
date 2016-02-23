An Angular2 and express project with
Typescript
=================

An exercise project with angular2 and express. Copied from
https://github.com/TeamTobb/MEAN-Typescript-Angular2-Skeleton.

### Features
* Express
* Angular 2
* Node.js

### Dependencies

* Node
* Typescript

## Running

1. From this directory, install the app's node dependencies, tsd, and typings with the following commands:
    ```shell
    npm install
    npm install -g tsd
    tsd install
    ```

2. Before compiling the app you may have to change permissions (default is 744 after tsd install) to the typings directory.
    ```shell
    chmod -R 774 typings
    ```

3. Compile the app with the following command:
    ```shell
    tsc
    cd public
    tsc
    ```

4. Launch the Node process to serve the app using the following command from the root folder:
    ```shell
    node server.js
    ```

5. Open your favorite browser and navigating to `http://localhost:3000/` to access the app.
