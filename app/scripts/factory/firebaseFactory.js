'use strict';

angular.module('cath').factory('firebaseFactory', ['$q',
  function ($q) {
    var firebaseModel = {
    };
    firebaseModel.messageList = document.getElementById('messages');
    firebaseModel.messageForm = document.getElementById('message-form');
    firebaseModel.messageInput = document.getElementById('message');
    firebaseModel.submitButton = document.getElementById('submit');
    firebaseModel.submitImageButton = document.getElementById('submitImage');
    firebaseModel.imageForm = document.getElementById('image-form');
    firebaseModel.mediaCapture = document.getElementById('mediaCapture');
    firebaseModel.userPic = document.getElementById('user-pic');
    firebaseModel.userName = document.getElementById('user-name');
    firebaseModel.signInButton = document.getElementById('sign-in');
    firebaseModel.signOutButton = document.getElementById('sign-out');
    firebaseModel.signInSnackbar = document.getElementById('must-signin-snackbar');

    firebaseModel.initFirebase = function (data) {
      if (!window.firebase || !(firebase.app instanceof Function) || !window.config) {
        window.alert('You have not configured and imported the Firebase SDK. ' +
            'Make sure you go through the codelab setup instructions.');
      } else if (config.storageBucket === '') {
        window.alert('Your Firebase Storage bucket has not been enabled. Sorry about that. This is ' +
            'actually a Firebase bug that occurs rarely. ' +
            'Please go and re-generate the Firebase initialisation snippet (step 4 of the codelab) ' +
            'and make sure the storageBucket attribute is not empty. ' +
            'You may also need to visit the Storage tab and paste the name of your bucket which is ' +
            'displayed there.');
      }

      // Shortcuts to Firebase SDK features.
      firebaseModel.auth = firebase.auth();
      firebaseModel.database = firebase.database();
      firebaseModel.storage = firebase.storage();
      // Initiates Firebase auth and listen to auth state changes.
      firebaseModel.auth.onAuthStateChanged(firebaseModel.onAuthStateChanged.bind(firebaseModel));
    };

    firebaseModel.signInGG = function () {
      // Sign in Firebase using popup auth and Google as the identity provider.
      var provider = new firebase.auth.GoogleAuthProvider();
      firebaseModel.auth.signInWithPopup(provider);
    };

    firebaseModel.signOut = function () {
      // Sign out of Firebase.
      firebaseModel.auth.signOut();
    };

    firebaseModel.onAuthStateChanged = function (user) {
      if (user) { // User is signed in!
        // Get profile pic and user's name from the Firebase user object.
        var profilePicUrl = user.photoURL;
        var userName = user.displayName;

        console.log(userName + 'is signed in');

        // TODO: gather data from signin and process next

        /*
        // Set the user's profile pic and name.
        firebaseModel.userPic.style.backgroundImage = 'url(' + profilePicUrl + ')';
        firebaseModel.userName.textContent = userName;

        // Show user's profile and sign-out button.
        firebaseModel.userName.removeAttribute('hidden');
        firebaseModel.userPic.removeAttribute('hidden');
        firebaseModel.signOutButton.removeAttribute('hidden');

        // Hide sign-in button.
        firebaseModel.signInButton.setAttribute('hidden', 'true');
        */

      } else { // User is signed out!
        console.log('User not signed in');
        // Hide user's profile and sign-out button.
        /*
        firebaseModel.userName.setAttribute('hidden', 'true');
        firebaseModel.userPic.setAttribute('hidden', 'true');
        firebaseModel.signOutButton.setAttribute('hidden', 'true');

        // Show sign-in button.
        firebaseModel.signInButton.removeAttribute('hidden');
        */
      }
    };

    firebaseModel.checkSignedInWithMessage = function () {
      // Return true if the user is signed in Firebase
      if (this.auth.currentUser) {
        return true;
      }

      // Display a message to the user using a Toast.
      var data = {
        message: 'You must sign-in first',
        timeout: 2000,
      };
      firebaseModel.signInSnackbar.MaterialSnackbar.showSnackbar(data);
      return false;
    };

    return firebaseModel;
  },
]);
