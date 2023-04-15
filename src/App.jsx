import {Helmet} from 'react-helmet';

import MainLayout from "./components/layouts/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <Helmet>
        <title>فروشگاه استیکر برنامه نویسی</title>
      </Helmet>
    </MainLayout>
  );
};

export default App;
