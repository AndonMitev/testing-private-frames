import { ReactNode } from 'react';
import AuthKitProvider from './AuthKitProvider';
import ThemeProvider from './ThemeProvider';
import SmoothScrollProvider from './SmoothScrollProvider';
import ReactQueryProvider from './ReactQueryProvider';

type ProvidersProps = {
  children: ReactNode;
};

export default async function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='dark'
      enableSystem
      disableTransitionOnChange
    >
      <SmoothScrollProvider>
        <ReactQueryProvider>
          <AuthKitProvider>{children}</AuthKitProvider>
        </ReactQueryProvider>
      </SmoothScrollProvider>
    </ThemeProvider>
  );
}
