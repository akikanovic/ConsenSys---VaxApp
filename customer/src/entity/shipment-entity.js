export class ShipmentEntity {
  constructor(
    id,
    vaccineName,
    quantity,
    manufacturingDate,
    manufacturerId,
    authorityId,
    customerId,
    customerVerified,
    authorityVerified
  ) {
    this.id = id;
    this.vaccineName = vaccineName;
    this.quantity = quantity;
    this.manufacturingDate = manufacturingDate;
    this.manufacturerI = manufacturerId;
    this.authorityId = authorityId;
    this.customerId = customerId;
    this.customerVerified = customerVerified;
    this.authorityVerified = authorityVerified;
  }
}
