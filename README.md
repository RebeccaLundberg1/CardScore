# CardScore

A mobile app for tracking scores in card games.

## Tech Stack

- [Expo](https://expo.dev) (SDK 54)
- React Native
- TypeScript
- NativeWind (Tailwind CSS for React Native)

## Getting Started

**1. Enter the dev environment**
```
nix develop
```

**2. Install dependencies**
```
npm install
```

**3. Start the app**
```
npx expo start
```

Then scan the QR code with Expo Go, or press `w` to open in the browser.

## Code Quality

Run locally before pushing:

```
npx tsc --noEmit
npx eslint . --ext .ts,.tsx
```

Both checks also run automatically on every pull request via GitHub Actions.
