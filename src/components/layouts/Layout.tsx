import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default RootLayout; 