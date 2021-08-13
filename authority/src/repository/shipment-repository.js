const shipments = [];

async function getOne(id) {
  if (shipments.length) {
    const shipment = shipments.find((item) => item.id === id);
    return shipment;
  }
  return null;
}

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
  getOne,
};
