import {Helmet} from 'react-helmet';

import MainLayout from "./components/layouts/MainLayout";
import Header from './components/Header';
import ProductList from './components/ProducList';
import SearchStickers from './components/SearchStickers';

const App = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>فروشگاه استیکر برنامه نویسی</title>
      </Helmet>
      <div className="container mx-auto w-full">
        <Header />
        <SearchStickers />
        <ProductList />
      </div>
    </MainLayout>
  );
};

export default App;
