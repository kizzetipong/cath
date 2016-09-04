<!doctype html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <base href="/">
    <title>Brand</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    <!-- build:css(.tmp) web/assets/css/app.css -->
    <link rel="stylesheet" href="assets/css/app.css">
    <!-- endbuild -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
  </head>
  <body ng-app="cath">
    <div>
      <nav-header></nav-header>
    </div>
    <div class="app-container">
      <div ng-view="" autoscroll></div>
    </div>
    <hr class="footer-hr">
    <div class="footer">
      <div class="container">
        <site-map></site-map>
        <p>© 2016 Class Actions Thailand. All right reserved.  |  <a href="/legal-notice">Legal Notice</a>  |  <a href="/contactus">Contact Us</a></p>
      </div>
    </div>

    <!-- build:js({.,app}) web/scripts/vendor.js -->
    <!-- bower:js -->
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:js({.tmp,app}) web/scripts/libs.js -->
    <script src="scripts/libs/jquery.mobile.custom.min.js"></script>
    <!-- endbuild -->

    <!-- build:js({.tmp,app}) web/scripts/app.js -->
    <script src="scripts/appModule.js"></script>
    <script src="scripts/appRoute.js"></script>
    <script src="scripts/appConfig.js"></script>
    <script src="scripts/controllers/mainController.js"></script>
    <script src="scripts/controllers/casesController.js"></script>
    <script src="scripts/controllers/newsCatalogController.js"></script>
    <script src="scripts/controllers/newsController.js"></script>
    <script src="scripts/factory/firebaseFactory.js"></script>
    <script src="scripts/factory/dataFactory.js"></script>
    <script src="scripts/services/myService.js"></script>
    <script src="scripts/services/newscatalogService.js"></script>
    <script src="scripts/components/navheader/navHeader.js"></script>
    <script src="scripts/components/navheader/navHeaderController.js"></script>
    <script src="scripts/components/articledisplay/articleDisplay.js"></script>
    <script src="scripts/components/articledisplay/articleDisplayController.js"></script>
    <script src="scripts/components/catalogslider/catalogSlider.js"></script>
    <script src="scripts/components/catalogslider/catalogSliderController.js"></script>
    <script src="scripts/components/catalogfloatlist/catalogFloatlist.js"></script>
    <script src="scripts/components/catalogfloatlist/catalogFloatlistController.js"></script>
    <script src="scripts/components/caseslist/casesList.js"></script>
    <script src="scripts/components/caseslist/casesListController.js"></script>
    <script src="scripts/components/introslider/introSlider.js"></script>
    <script src="scripts/components/introslider/introSliderController.js"></script>
    <script src="scripts/components/registerbox/registerBox.js"></script>
    <script src="scripts/components/registerbox/registerBoxController.js"></script>
    <script src="scripts/components/steplist/stepList.js"></script>
    <script src="scripts/components/steplist/stepListController.js"></script>
    <script src="scripts/components/subscriber/subscriber.js"></script>
    <script src="scripts/components/subscriber/subscriberController.js"></script>
    <script src="templates.js"></script>
    <!-- endbuild -->

    <!-- build:development -->
    <script src="http://localhost:35729/livereload.js"></script>
    <!-- endbuild -->

    <script src="https://www.gstatic.com/firebasejs/3.2.1/firebase.js"></script>
    <script>
      // Initialize Firebase
      var config = {
        apiKey: 'AIzaSyAmR8JqrtECxddqGS4CAkwTjKChjDOf5Kw',
        authDomain: 'cath-ce838.firebaseapp.com',
        databaseURL: 'https://cath-ce838.firebaseio.com',
        storageBucket: 'cath-ce838.appspot.com',
      };
      firebase.initializeApp(config);
    </script>

  </body>
</html>
