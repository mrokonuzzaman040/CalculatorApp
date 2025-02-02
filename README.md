# CalculatorApp

CalculatorApp is a cross-platform calculator application built with React Native and Expo. It features a modern glass (blur) UI, supports basic arithmetic as well as advanced functions (sin, cos, tan, √, exponentiation, and more), and includes a backspace functionality for ease of use.

## Features

- **Arithmetic Operations:** Addition, subtraction, multiplication, and division.
- **Advanced Functions:** Supports trigonometric functions, square roots, exponentiation, and parenthetical grouping.
- **Backspace Support:** Easily remove the last entered character.
- **Modern UI:** Uses Expo's BlurView to achieve a sleek glass (blur) effect.
- **Cross-Platform:** Works on both Android and iOS.
- **Customizable Icon:** Easily update the app icon via the configuration file.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) (the local version is recommended)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mrokonuzzaman040/CalculatorApp.git
   cd CalculatorApp
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or if using Yarn:

   ```bash
   yarn install
   ```

### Running in Development

Start the Expo development server with:

```bash
npx expo start
```

- **For Android:** Use the Expo Go app on your Android device or run an Android emulator.
- **For iOS:** Use the Expo Go app on your iOS device or run the iOS simulator (macOS only).

## Building the App

This project uses [Expo Application Services (EAS Build)](https://docs.expo.dev/build/introduction/) for production builds.

### Setup EAS Build

1. **Install EAS CLI (if not already installed):**

   ```bash
   npm install -g eas-cli
   ```

2. **Configure your project:**

   Run the following command in your project directory:

   ```bash
   npx eas build:configure
   ```

### Building an APK (Android)

The provided `eas.json` is set up to build an APK artifact for both development and production. To build an APK, run:

```bash
npx eas build --platform android --profile production
```

When the build completes, you’ll receive a download link for your APK file.

### Building for iOS

To build an iOS IPA, run:

```bash
npx eas build --platform ios --profile production
```

> **Note:** iOS builds require you to have the necessary certificates and may require a Mac for testing with the simulator.

## EAS Configuration (`eas.json`)

Here's an example of the `eas.json` configuration used for this project:

```json
{
  "cli": {
    "version": ">= 14.7.1",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      }
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true,
      "android": {
        "buildType": "apk"
      }
    }
  },
  "submit": {
    "production": {}
  }
}
```

This configuration ensures that both development and production builds generate APK files for Android.

## Changing the Application Icon

To update the application icon:

1. **Prepare your icon image:**  
   Create a 1024x1024 PNG (or similar) image for your icon.

2. **Place the image in your project:**  
   Save the image (e.g., `new-icon.png`) in an `assets` folder in your project's root directory.

3. **Update the `app.json`:**  
   Open `app.json` and set the `icon` property under the `"expo"` key:

   ```json
   {
     "expo": {
       "name": "CalculatorApp",
       "slug": "calculator-app",
       "icon": "./assets/new-icon.png",
       // ... other configuration options
     }
   }
   ```

4. **Rebuild your app:**  
   Restart your development server or run a new production build to see the updated icon.

## Author

**Rokon**  
Software Engineer with expertise in JavaScript, TypeScript (React and Next), and Python.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [mathjs](https://mathjs.org/)
- [expo-blur](https://docs.expo.dev/versions/latest/sdk/blur-view/)
- Thanks to all contributors and the open-source community for their support!
