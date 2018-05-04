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
  const { background = 'white', color, label } = type;
  console.log(`${addSpacer(label, 9)} ${text}`, `background: ${background}; color: ${color}`)
}

const Logger = () => {
  const logger = R.mergeAll(
    Object.keys(types).map(type => {
      return {
         [type]: (text) => {
          makeLog(text, types[type])
        }
      }
    })
  )
  return logger
}
export default Logger()

