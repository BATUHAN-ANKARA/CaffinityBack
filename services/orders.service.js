const Tables = require("../models/tables.model");
const Items = require("../models/items.model");
const Orders = require("../models/orders.model");
const ordersDal = require("../dal/index");

exports.createOrder = async (req) => {
  try {
    let { tableName, items } = req.body;
    const table = await Tables.find({ name: tableName });
    const tableId = table[0]._id;
    if (!table) {
      throw new Error("Masa bulunamadı.");
    }
    console.log(tableId);
    const orderedItems = await Promise.all(
      items.map(async (item) => {
        if (!item.product || !item.quantity) {
          throw new Error("Eksik ürün veya miktar bilgisi.");
        }
        const itemInfo = await Items.findOne({ product: item.product });
        return {
          product: item.product,
          quantity: item.quantity,
          price: itemInfo.price,
          totalPrice: itemInfo.price * item.quantity
        };
      })
    );
    const totalPrices = orderedItems.reduce(
      (acc, item) => acc + item.totalPrice,
      0
    );
    console.log(totalPrices);
    tablePrice = table[0].totalPrice;
    console.log(tablePrice);
    const order = new Orders({
      table: table[0]._id,
      items: orderedItems,
      price: totalPrices
    });
    const tableToUpdate = await Tables.findById(tableId);

    tableToUpdate.orders.push(order._id);
    tableToUpdate.totalPrice += totalPrices;
    console.log(tableToUpdate.totalPrice);

    await tableToUpdate.save();
    const json = await ordersDal.orders.create(order);
    return order;
  } catch (error) {
    throw new Error(error);
  }
};

exports.endDay = async () => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const orders = await Orders.find({
      createdAt: { $gte: today, $lt: tomorrow }
    });
    let totalSales = 0;
    orders.forEach((order) => {
      order.items.forEach((item) => {
        if (item.product === "Latte") {
          totalSales += item.quantity;
        }
      });
    });
    console.log(`Bugün satılan latte karı: ${totalSales}`);
    return orders;
  } catch (error) {
    throw new Error(error);
  }
};

exports.getOrder = async (req) => {
  try {
    const { orderId } = req.query;
    const order = await Orders.findById(orderId);
    if (!order) {
      throw new Error("Masa bulunamadı.");
    }
    return order;
  } catch (error) {
    throw new Error(error);
  }
};
