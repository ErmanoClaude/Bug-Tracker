import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";
import { Helmet } from "react-helmet";
import serialize from 'serialize-javascript';
import App from "../app.js";
import webConfig from '../../webConfig.json'
import favicons from './favicons.js'

module.exports = (req, Context) => {
  const helmet = Helmet.renderStatic();
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={ Context }>
      <App context={Context}/>
    </StaticRouter>
  );
  
  let cssPage       = "";
  let bootStrap     = webConfig.siteURL + '/assets/css/bootstrap.min.css';
  let globalStyles  = webConfig.siteURL + '/assets/css/globalStyles.min.css';
  let homePageCSS   = webConfig.siteURL + '/assets/css/homePage.min.css';
  let loginPage     = webConfig.siteURL + '/assets/css/loginPage.min.css';
  let clientBundle  = webConfig.siteURL + '/client_bundle.js';
  
  var page = /^\/login/i.test(req.url);
  if(page){
    cssPage = `<link rel='stylesheet' type='text/css' href=${ loginPage } />`
  }
  const html = `<html>
  <head>
    ${ favicons }
    <link rel='stylesheet' type='text/css' href=${ bootStrap } />
    <link rel='stylesheet' type='text/css' href=${ globalStyles } />
    <link rel='stylesheet' type='text/css' href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css" />
    ${helmet.meta.toString()}
    ${helmet.title.toString()}
    ${helmet.link.toString()}
    ${helmet.script.toString()}
    ${ cssPage }
  </head>
  <body>
    <div id="root" class='container'>
      ${content}
    </div>
    <script>
      window.__INITIAL_STATE__ = ${serialize(Context)};
    </script>
    <script src=${ clientBundle }></script>
  </body>
</html>`;
  return html;
};
