import { DateHelper } from './dateHelper'

import {PaymentStatusEnum} from '../enums/payment-enum'

import {formatSnakeCaseToWords, formatCapitalizeFirstLetter} from './formatters'
import moment, { unitOfTime } from 'moment';
import { colors } from '@material-ui/core';

function getPaymentStatus(type: string, status: string, created: number, refunded: boolean, disputed: boolean) {
    const pastDue = dateShouldBePastDue(moment.unix(created), "days", status);
    let prefix = formatSnakeCaseToWords(status);
    if (status === "void") return "Invoice Canceled";
    if (
      status === PaymentStatusEnum.Succeeded &&
      ((disputed && refunded) || (!disputed && refunded))
    )
      prefix = "Refunded";
  
    if (status === PaymentStatusEnum.Paid) prefix = "Paid";
    if (pastDue) prefix = "Past Due";
    else if (status === PaymentStatusEnum.Open) prefix = "Due";
    return ` ${prefix} ${moment.unix(created).format("MMM Do")}`;
  }
  
  const dateShouldBePastDue = (date: moment.Moment, precision: unitOfTime.StartOf, paymentStatus: string) => {
    return (
      DateHelper.getIfCurrentDateIsAfter(date.toDate(), precision) &&
      paymentStatus === PaymentStatusEnum.Open
    );
  };
  
  function getPaymentStatusColor(status: string, created: number) {
    const pastDue = dateShouldBePastDue(moment.unix(created), "days", status);
    if (pastDue || status === "void" || status === "failed") return colors.red;
    else return colors.grey;
  }

  export {getPaymentStatus, getPaymentStatusColor}