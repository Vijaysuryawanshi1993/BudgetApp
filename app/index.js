import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
    $primaryTextWhite: 'white',
    $primaryBlack: 'black',
    $boxBorder: '#505050'
});
// global.ulm_bgImage = require('ucl-live-manager/app/images/Background.png');
// global.ulm_removeIcon = require('./images/Remove_Icon.png');
// global.ulm_recoverPlayer = require('./images/Recover_Player.png');
// global.ulm_defaultPlyrImg = require('./images/add-player-default.jpg');

console.disableYellowBox = true;

import RootNavigator from './config/routes';

// XMLHttpRequest = GLOBAL.originalXMLHttpRequest ?
//     GLOBAL.originalXMLHttpRequest : GLOBAL.XMLHttpRequest;

export default RootNavigator;