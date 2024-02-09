import ReactDOM from 'react-dom/client';
import './index.scss';

import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store.ts';
import { router } from './router/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
