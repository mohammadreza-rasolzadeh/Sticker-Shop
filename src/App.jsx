import {Helmet} from 'react-helmet';

import MainLayout from "./components/layouts/MainLayout";
import Header from './components/Header';
import ProductList from './components/ProducList';

const App = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>فروشگاه استیکر برنامه نویسی</title>
      </Helmet>
      <div className="mx-auto max-w-xl">
        <Header />
        <ProductList />
      </div>
    </MainLayout>
  );
};

export default App;
