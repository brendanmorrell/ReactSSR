import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from '../client/Routes';

export default (req, store) => {
  // context is a required field for StaticRouter. wont work without it
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>,
  );
  // generate a script tag that tells browser to get/use the public js bundle
  // In the script tag, no need to give a directory etc for bundle.js because when the request for bundle.js is sent back to our Server
  // express already knows to first check public since we set it up in the app.use(express.static call
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
