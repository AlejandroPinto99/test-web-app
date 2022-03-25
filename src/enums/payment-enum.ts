export enum PaymentTypeEnum {
  OneTime = "onetime",
  Subscription = "subscription",
}

export enum PaymentStatusEnum {
  Open = "open",
  Succeeded = "succeeded",
  Disputed = "disputed",
  Refunded = "refunded",
  PastDue = "past_due",
  Void = "void",
  Paid = "paid",
}
