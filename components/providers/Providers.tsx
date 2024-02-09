import { ReactNode } from 'react';
import AuthKitProvider from './AuthKitProvider';
import ThemeProvider from './ThemeProvider';

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      <AuthKitProvider>{children}</AuthKitProvider>
    </ThemeProvider>
  );
}
