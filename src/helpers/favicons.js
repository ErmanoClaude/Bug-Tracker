import webConfig from '../../webConfig.json'
const browserconfig = webConfig.siteURL + '/assets/browserconfig.xml';

 const favicons = `<link rel="shortcut icon" href=${ webConfig.faviconico } />
<link rel="icon" sizes="16x16 32x32 64x64" href=${ webConfig.faviconico } />
<link rel="icon" type="image/png" sizes="196x196" href=${webConfig.favicon192} />
<link rel="icon" type="image/png" sizes="160x160" href=${ webConfig.favicon160 } />
<link rel="icon" type="image/png" sizes="96x96" href=${ webConfig.favicon96 } />
<link rel="icon" type="image/png" sizes="64x64" href=${ webConfig.favicon64 } />
<link rel="icon" type="image/png" sizes="32x32" href=${ webConfig.favicon32 } />
<link rel="icon" type="image/png" sizes="16x16" href=${ webConfig.favicon16 } />
<link rel="apple-touch-icon" href=${ webConfig.favicon57 } />
<link rel="apple-touch-icon" sizes="114x114" href=${ webConfig.favicon114 } />
<link rel="apple-touch-icon" sizes="72x72" href=${ webConfig.favicon72 } />
<link rel="apple-touch-icon" sizes="144x144" href=${ webConfig.favicon144 }/>
<link rel="apple-touch-icon" sizes="60x60" href=${ webConfig.favicon60 } />
<link rel="apple-touch-icon" sizes="120x120" href=${ webConfig.favicon120 } />
<link rel="apple-touch-icon" sizes="76x76" href=${ webConfig.favicon76 }/>
<link rel="apple-touch-icon" sizes="152x152" href=${ webConfig.favicon152 } />
<link rel="apple-touch-icon" sizes="180x180" href=${ webConfig.favicon180 } />
<meta name="msapplication-TileColor" content="#FFFFFF" />
<meta name="msapplication-TileImage" content=${ webConfig.favicon144 } />
<meta name="msapplication-config" content=${ browserconfig } />`

module.exports = favicons;