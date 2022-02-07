import { FC } from 'react';
import { ChartsComponent } from './Charts/Charts.component';
import { PageStackRouter } from './PageStackRouter/PageStackRouter.component';

const App: FC = () => {
  return (
    <div className="App">
      <PageStackRouter>
        <ChartsComponent />
      </PageStackRouter>
    </div>
  );
};

export default App;
