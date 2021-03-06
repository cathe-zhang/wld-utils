import toUpper, { transFirstLetterToUpper } from './string/toUpper'
import formatPrice from './numbers/formatPrice'
import showShareHints from './share/showShareHints'
import isAfterNow from './time/isAfterNow'
import sliceStrUntilDivider from './string/sliceStrUntilDivider'
import getOS from './device/getOS'
import {
  pumpFieldFromList,
  verifyEleInArr
} from './array/array'
import { transParams } from './string/transParam'

console.log('toUpper', toUpper)
console.log('formatPrice', formatPrice)

export default {
  toUpper,
  formatPrice,
  showShareHints,
  isAfterNow,
  sliceStrUntilDivider,
  getOS,
  pumpFieldFromList,
  verifyEleInArr,
  transParams,
  transFirstLetterToUpper
}