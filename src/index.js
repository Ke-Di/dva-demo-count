import dva from 'dva';
import './index.css';
import count from './models/count';
import router from './router';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(count);

// 4. Router
// app.router(require('./router').default);
app.router(router);

// 5. Start
app.start('#root');
