import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Calculator App',
        headerStyle: { backgroundColor: '#fff' },
        headerTintColor: '#000',
      }}
    />
  );
}