const shipments = [];

async function getAll() {
  return shipments;
}

async function addShipment(shipment) {
  shipments.push(shipment);
  return shipment;
}
export const shipmentRepository = {
  getAll,
  addShipment,
};
