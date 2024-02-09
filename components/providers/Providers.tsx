import { ReactNode } from 'react';
import AuthKitProvider from './AuthKitProvider';
import ThemeProvider from './ThemeProvider';
import SmoothScrollProvider from './SmoothScrollProvider';

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
      <SmoothScrollProvider>
        <AuthKitProvider>{children}</AuthKitProvider>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
