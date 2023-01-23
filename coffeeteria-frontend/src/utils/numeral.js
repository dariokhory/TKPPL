// pkgs: numeral
import numeral from 'numeral';
import 'numeral/locales'

export const numFormatter = (num) => {
  numeral.locale('es')
  const result = numeral(num).format('0,0')
  return result
}