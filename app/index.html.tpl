<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <title>Brand</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- build:css(.tmp) web/assets/css/app.css -->
    <link rel="stylesheet" href="assets/css/app.css">
    <!-- endbuild -->
  </head>
  <body ng-app="angular-seed">
    <div>
      <nav-header></nav-header>
    </div>
    <div class="app-container">
      <div ng-view=""></div>
    </div>
    <hr class="footer-hr">
    <div class="footer">
      <div class="container">
        <p><span class="glyphicon glyphicon-heart"></span> Brand</p>
      </div>
    </div>

    <!-- build:js({.,app}) web/scripts/bootstrap.js -->
    <!-- endbuild -->

    <!-- build:js({.,app}) web/scripts/vendor.js -->
    <!-- bower:js -->
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:js({.tmp,app}) web/scripts/app.js -->
    <script src="scripts/appModule.js"></script>
    <script src="scripts/appRoute.js"></script>
    <script src="scripts/appConfig.js"></script>
    <script src="scripts/controllers/mainController.js"></script>
    <script src="scripts/factory/dataFactory.js"></script>
    <script src="scripts/services/myService.js"></script>
    <script src="scripts/components/navheader/navHeader.js"></script>
    <script src="scripts/components/navheader/navHeaderController.js"></script>
    <script src="templates.js"></script>
    <!-- endbuild -->

    <!-- build:development -->
    <script src="http://localhost:35729/livereload.js"></script>
    <!-- endbuild -->

  </body>
</html>
