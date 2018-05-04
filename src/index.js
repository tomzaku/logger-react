import types from './types';
import R from 'ramda';

const addSpacer = (text ='', length) => {
  let multiSpacer = '';
  for (var index = 0; index < length - text.length; index += 1) {
    multiSpacer += ' '
  }
  return text + multiSpacer
}
const makeLog = (text, type) => {
  const { background = 'black', color= 'white', label, icon= ' ' } = type;
  const labelIcon = `${icon} ${label}`;
  return function(...text) {
    console.log(`%c ${addSpacer(labelIcon, 10)}`, `background: ${background}; color: ${color}; font-size: small`, ...text)
  }
}

const Logger = () => {
  const logger = R.mergeAll(
    Object.keys(types).map(type => {
      return {
         [type]: (text) => {
          makeLog(types[type])(text)
        }
      }
    })
  )
  return logger
}
export default Logger()