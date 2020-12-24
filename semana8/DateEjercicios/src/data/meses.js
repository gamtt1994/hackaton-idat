import moment from 'moment';
const Meses = moment.months();
const obtenermeses = [];
for (let x in Meses) {
  obtenermeses.push({label: Meses[x], value: Meses[x]});
}
export const obtenermeses;
