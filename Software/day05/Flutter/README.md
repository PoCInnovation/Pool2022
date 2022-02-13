# PoC Software Pool 2022 - Day05 - Flutter

**Day purposes**

✔ Create your own User Interface (UI) with Flutter.

✔ Structure your UI.

✔ Test your UI.

✔ Make your UI responsive.

## Setup

The objective of this day is to create a music application like spotify with [Flutter](https://flutter.dev)

You will first install [Flutter](https://docs.flutter.dev/get-started/install) and [Android Studio](https://developer.android.com/studio).

To use Flutter on Android Studio you need to install the plugins for `Flutter` and `Dart`.

To use Flutter on Visual Studio Code you will need to use the [Flutter extension](https://marketplace.visualstudio.com/items?itemName=Dart-Code.flutter).

If you want to use another IDE that does not have a plugin for Flutter you can always use the [flutter commands](https://docs.flutter.dev/reference/flutter-cli)

Even if you use other IDE than Android Studio, you need to install Android Studio.

To launch your application you will need a smartphone emulator, in other words a virtual smartphone in your PC, which you can create and launch from Android Studio.

Once the installation is complete you can create and launch your first mobile application with the following commands:

```shell
# At the root of your pool repository, create today's folder
mkdir -p day05

# Move in this folder
cd day05

# Create a Flutter project
flutter create myapp

# Enter the folder
cd myapp

# Launch the application
flutter run
```

If all went well you should have the basic flutter application running in your emulator.

## Step 0 - Dart

Flutter is a framework based on the dart language.

***Do not start without knowing anything about it, here is an [introduction](https://dart.dev/samples) to this language.***

## Step 1 - Getting started

You can open the `main.dart` file located in the `lib` folder and delete everything in it.

Once the file is empty in the `lib` folder, reproduce the same architecture as the diagram below:

```
lib/
├── models/
├── providers/
├── screens/
├── utilities/
├── main.dart
```

We are going to make our first `screen` which we will call `home.dart` (to put in the screen folder obviously 🙂 ), it will serve as our home page.
You will put the following code in it, which will be present on each screen you create:

```dart
import "package:flutter/material.dart";

class Home extends StatefulWidget {
  @override
  State<Home> createState() => _Home();
}

class _Home extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold();
  }
}
```
We can now use this blank homepage in our application by calling it in our `main.dart` with the following code:
```dart
import "package:flutter/material.dart";
import "screens/home.dart";

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false, // <--- remove the debug banner
      home: Home(),
    );
  }
}
```

## Step 2 - Our first page

To begin with, the first thing the user will be taken to when the application starts up for the first time will be a page that will offer him to either register if he doesn't have an account yet, or to log in if he already has one. We will call this page `AuthHomePage`.

For this exercise you are asked to create a `Button` component, which you will use in this page. You are free to make it as you wish but it must take the following attributes as parameters:

- String `buttonText` which will be the text displayed in the button.
- GestureTapCallback `onPressed` which will be the function to launch once the button is pressed.
- double `width` which will be the width of the button.
- double `height` which will be the height of the button

Once this button is created we can use it in the page. The only constraint for this part is the presence of two buttons, `Login` and `Register` and a `title` of type `Text`.

Now that our first page is done we can create the pages that will be displayed on the screen after the user presses one of the two buttons, for this you will need two screens, `login` and `register` which should contain the following characteristics:

- Login:
  - A `TextField` for the email.
  - A `TextField` for the password, which should hide the text written inside.
  - A `Button` `login` which does nothing at the moment.
- Register:
  - A `TextField` for the email.
  - A TextField for the password, which should hide the text written inside.
  - A `TextField` to confirm the password, which should also hide the text written inside.
  - A `Button` `register` which does nothing for the moment.

Consider creating new components to keep your code as clear as possible.

## Step 3 - What if you change the screen size ?

To create a `responsive` application, that is to say an application that adapts to the size of the display in real time for that I let you do your research to keep your application responsive through the development of your application.

To guide you in your research here is a first [link](https://docs.flutter.dev/development/ui/layout/adaptive-responsive) to help you.

## Step 4 - Testing time

To make sure your application works well without having to test everything by hand Google has created a very powerful test library on Flutter.

To use it, you should have a `test/` folder generated by default at the creation of the Flutter project, this folder contains a `widget test dart` file that you will open and empty of its content to paste the following code:

```dart
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

import '../lib/main.dart';

void main() {
  testWidgets('Required widgets in authentication choice page', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());

    final Finder loginButton = find.byKey(const ValueKey("loginButton"));
    final Finder registerButton = find.byKey(const ValueKey("registerButton"));
    final Finder title = find.text("My Spotify"); // Replace "My Spotify" with the title you put in your application.

    expect(title, findsOneWidget);
    expect(loginButton, findsOneWidget);
    expect(registerButton, findsOneWidget);
  });
}
```
If you analyze the above code a bit you will understand that we are looking for the `Widgets` in our app with the `find.byKey` function, this means that we will need to assign `Keys` to our `Widgets`, you may have noticed that the default constructor of the components you created was:
```dart
const myComponent({Key? key}) : super(key: key);
```
In this exercise you will need to find a way to add values to the `Keys` of your two buttons that are in your `Home` so that the tests seen earlier are validated.


## Step 5 - Navigation

Now that you have created your pages that will allow the user to authenticate, you will create the user's path.

That is to say, take the user from the `AuthHomePage` to the appropriate page after they have pressed one of the two buttons, so the `Register` button should bring up the `Register` page with the registration form and the `Login` button should bring up the `Login` page.

For this you will need to use the [Navigator](https://docs.flutter.dev/cookbook/navigation/navigation-basics) class.

Now you should be able to navigate between the `choice of authentication` page, the `login` page and the `register` page without being able to go any further.

Now it's time to see how to create the two main pages of our application:

- `Artist List`: a list of all artists created by the user.

- Artist creation`: a form to fill in each field needed to create an artist.

The first thing we ask you to do here is to create a [bottomNavigationBar](https://api.flutter.dev/flutter/material/BottomNavigationBar-class.html) that will allow us to navigate between these two pages.

Now that you can navigate between your two pages, it's time to populate these pages with the following requirements:

- Artist List`
  - A [tile](https://api.flutter.dev/flutter/material/ListTile-class.html) for each artist. All displayed as a list

- Artist creation`:
  - A `TextField` for the artist's name.
  - A scoring system that goes from 0 to 5 to rate the artist.
  - A TextField for the nationality of the artist.
  - A `TextField` for the genre of the music.
  - A `TextField` for the url of the artist's picture.
  - A `Button` to confirm the creation of the artist.

## Step 6 - Models and stores

To prepare for the next exercise you will create a model for the `user`, the `artist` and the `music` with the following attributes:

- User
  - `id` of type `String`.
  - email` of type `String`.
  - password` of type `String`.
  - artists` of type `List<Artist>`.

- Artist
  - name` of type `String`.
  - rating` of type `int`.
  - nationality` of type `String`.
  - `musicGender` of type `String`.
  - `photoUrl` of type `String`.
  - musics` of type `List<Music>`.
  - user` of type `User`.
  - userId` of type `String`.

- Music
  - name` of type `String`.
  - `rating` of type `int`.
  - `url` of type `String`.
  - `artist` of type `Artist`.
  - `artistId` of type `String`.

The goal now is to use these models. You are going to create a `User` after the user has logged in and an `Artist` after filling in the artist creation form, all stored in stores.

To do this you will create a `store` folder and then a `store.dart` file under the `lib` folder, which you will use to store your data so that it can be accessed throughout your code with only the import of the `store.dart` file to access it.

## Step 7 - Authentication with an API

It is now time to connect your application to an API to store your data.

For this you will use the Flutter package [http](https://pub.dev/packages/http).

Normally the models you created in the previous exercise should make it easier for you to send the data to the API.

For this exercise you have to be able to authenticate to the api with your application.

To manage the api calls you will create a `api.dart` file in the `providers` folder.

To get you started here is the code base to put in the `api.dart` file:

```dart
import 'package:http/http.dart' as http;

class Api {
  final String _url = "http://10.0.2.2:8080";

  Future<bool> health() async {
    final response = await http.get(Uri.parse("$_url/health"));
    return response.statusCode == 200;
  }
}
```

In the above code `10.0.2.2` is used to reach the `127.0.0.1` of the machine emulating the smartphone.

The `health` function in the code base allows you to check that the connection is well established between the api and the application. Thought to use it 😉.

Create a `login` and `register` function that will allow you to authenticate to the API.

Once the `JWT` token is received, store it in a `store` so that it is accessible.

***Note that this is a bad idea. Please refer to the Security Bonus to understand why. We ask you to do it this way because it's important to be aware of this.***

## Step 8 - Managing artists with the api

For this exercise you will have to manage the artist creation and the recovery of all the artists created with the api from the application.

You have to make sure that once the artist creation form is filled and the confirmation button is pressed, a request is sent to the api to create an artist with the given characteristics.

You will have to retrieve all the artists created at the launch of the application to be able to display them in the list of artists.

In this exercise you will need to create the `createArtist` and `getArtist` function in your `Api` class.

## Step 9 - Managing music with the api

In this exercise you will have to manage the creation of music and the retrieval of music from an artist when the user presses on one of the artists in the artist list page.

In this exercise you have to create the function `createMusic` and `getMusic` in your `Api` class.

## Bonus

### Animations

Add [annimations](https://docs.flutter.dev/development/ui/animations) to enhance your user experience.

### Security Issue

Storing a JWT inside a store is a bad idea. Here is [how to solve this problem](https://flutteragency.com/save-jwt-tokens-in-flutter-apps/).

Your turn !
