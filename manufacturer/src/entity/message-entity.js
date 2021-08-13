export class MessageEntity {
  constructor(id, timestamp, content, shipment) {
    this.id = id;
    this.timestamp = timestamp;
    this.content = content;
    this.shipment = shipment;
  }
}
