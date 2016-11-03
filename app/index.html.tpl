<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <base href="/">
    <title>FongDi ฟ้องดิ ฟ้องได้ | www.fongdi.com | เราช่วยคุณดำเนินคดีแบบกลุ่ม</title>
    <meta name="description" content="Fongdi | ฟ้องดิ ฟ้องได้ | การดําเนินคดีแบบกลุ่ม | Class Action | รวมกลุ่มฟ้อง | กฎหมายน่ารู้" />
    <meta name="keywords" content= "fongdi, ฟ้องดิ, ฟ้องได้, class action, การดําเนินคดีแบบกลุ่ม, รวมกลุ่มฟ้อง, กฎหมายน่ารู้" />
    <meta name="COPYRIGHT" content="สงวนลิขสิทธิ์โดย FongDi ฟ้องดิ ฟ้องได้" />
    <meta name="author" content="Fongdi" />
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta http-equiv='content-language' content='th' />
    <meta name='revisit-after' content='7 days' />
    <meta name='Distribution' content='Global' />
    <meta property="fb:pages" content="1199108503443090" />
    <meta name="fragment" content="!">
    <meta property="og:site_name" content="http://www.fongdi.com" />
    <meta property="og:url" content="http://www.fongdi.com" />
    <meta property="og:title" content="FongDi ฟ้องดิ ฟ้องได้ | www.fongdi.com | เราช่วยคุณดำเนินคดีแบบกลุ่ม" />
    <meta property="og:description" content="Fongdi | ฟ้องดิ ฟ้องได้ | การดําเนินคดีแบบกลุ่ม | Class Action | รวมกลุ่มฟ้อง | กฎหมายน่ารู้" />
    <meta itemprop="description" content="Fongdi | ฟ้องดิ ฟ้องได้ | การดําเนินคดีแบบกลุ่ม | Class Action | รวมกลุ่มฟ้อง | กฎหมายน่ารู้">
    <!-- build:css(.tmp) web/assets/css/app.css -->
    <link rel="stylesheet" href="assets/css/app.css">
    <!-- endbuild -->
    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">
  </head>
  <body ng-app="cath">
    <simple-header bg-red="{{mainBg}}">
      <div class="app-container">
        <div ng-view="" autoscroll></div>
      </div>
      <section id="sitemap">
        <div class="sitemap-container">
          <sitemap></sitemap>
        </div>
      </section>
    </simple-header>

    <!-- build:js({.,app}) web/scripts/vendor.js -->
    <!-- bower:js -->
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:js({.tmp,app}) web/scripts/libs.js -->
    <script src="scripts/libs/jquery.mobile.custom.min.js"></script>
    <script src="scripts/libs/redactor/redactor.js"></script>
    <!-- endbuild -->

    <!-- build:js({.tmp,app}) web/scripts/app.js -->
    <script src="scripts/appModule.js"></script>
    <script src="scripts/appRoute.js"></script>
    <script src="scripts/appConfig.js"></script>
    <script src="scripts/controllers/mainController.js"></script>
    <script src="scripts/controllers/caseController.js"></script>
    <script src="scripts/controllers/caseViewController.js"></script>
    <script src="scripts/controllers/newsCatalogController.js"></script>
    <script src="scripts/controllers/newsController.js"></script>
    <script src="scripts/controllers/adminNewsController.js"></script>
    <script src="scripts/factory/firebaseFactory.js"></script>
    <script src="scripts/factory/dataFactory.js"></script>
    <script src="scripts/services/myService.js"></script>
    <script src="scripts/services/caseService.js"></script>
    <script src="scripts/services/newscatalogService.js"></script>
    <script src="scripts/components/navheader/navHeader.js"></script>
    <script src="scripts/components/navheader/navHeaderController.js"></script>
    <script src="scripts/components/articledisplay/articleDisplay.js"></script>
    <script src="scripts/components/articledisplay/articleDisplayController.js"></script>
    <script src="scripts/components/articleslist/articlesList.js"></script>
    <script src="scripts/components/articleslist/articlesListController.js"></script>
    <script src="scripts/components/catalogslider/catalogSlider.js"></script>
    <script src="scripts/components/catalogslider/catalogSliderController.js"></script>
    <script src="scripts/components/catalogfloatlist/catalogFloatlist.js"></script>
    <script src="scripts/components/catalogfloatlist/catalogFloatlistController.js"></script>
    <script src="scripts/components/caseslist/casesList.js"></script>
    <script src="scripts/components/caseslist/casesListController.js"></script>
    <script src="scripts/components/casesdisplay/casesDisplay.js"></script>
    <script src="scripts/components/casesdisplay/casesDisplayController.js"></script>
    <script src="scripts/components/introslider/introSlider.js"></script>
    <script src="scripts/components/introslider/introSliderController.js"></script>
    <script src="scripts/components/registerbox/registerBox.js"></script>
    <script src="scripts/components/registerbox/registerBoxController.js"></script>
    <script src="scripts/components/simpleheader/simpleHeader.js"></script>
    <script src="scripts/components/simpleheader/simpleHeaderController.js"></script>
    <script src="scripts/components/steplist/stepList.js"></script>
    <script src="scripts/components/steplist/stepListController.js"></script>
    <script src="scripts/components/searchbox/searchBox.js"></script>
    <script src="scripts/components/searchbox/searchBoxController.js"></script>
    <script src="scripts/components/sitemap/sitemap.js"></script>
    <script src="scripts/components/sitemap/sitemapController.js"></script>
    <script src="scripts/components/subscriber/subscriber.js"></script>
    <script src="scripts/components/subscriber/subscriberController.js"></script>
    <script src="templates.js"></script>
    <!-- endbuild -->

    <!-- build:development -->
    <script src="http://localhost:35729/livereload.js"></script>
    <!-- endbuild -->

    <div id="fb-root"></div>
    <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v2.8&appId=687329278084857";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>
    <!-- <script src="https://www.gstatic.com/firebasejs/3.2.1/firebase.js"></script>
    <script>
      var config = {
        apiKey: 'AIzaSyAmR8JqrtECxddqGS4CAkwTjKChjDOf5Kw',
        authDomain: 'cath-ce838.firebaseapp.com',
        databaseURL: 'https://cath-ce838.firebaseio.com',
        storageBucket: 'cath-ce838.appspot.com',
      };
      firebase.initializeApp(config);
    </script>-->

  </body>
</html>
