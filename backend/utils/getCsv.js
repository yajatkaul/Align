import { parse } from "json2csv";
import { parse as parseCsv } from "csv-parse/sync";
import Order from "../models/order.model.js";

export const exportToCSV = async (req, res) => {
  try {
    const data = await Order.find()
      .select("items location phoneNumber email type createdAt")
      .lean()
      .exec();

    const csv = parse(data);

    res.setHeader("Content-Disposition", 'attachment; filename="orders.csv"');
    res.setHeader("Content-Type", "text/csv");

    // Send CSV data in the response
    res.send(transformCsvData(csv));
  } catch (error) {
    console.error("Error exporting data to CSV:", error);
  }
};

const transformCsvData = (csvData) => {
  const records = parseCsv(csvData, {
    columns: true,
    skip_empty_lines: true,
  });

  // Transform records
  const transformedRecords = [];

  records.forEach((record) => {
    const baseData = {
      _id: record._id,
      location: record.location,
      phoneNumber: record.phoneNumber,
      email: record.email,
      type: record.type,
      createdAt: record.createdAt,
    };

    // Parse JSON in the 'items' column
    const items = JSON.parse(record.items);

    // Add base record with each item as a separate row
    items.items.forEach((item) => {
      transformedRecords.push({
        ...baseData,
        itemId: item._id,
        itemColor: item.color,
        itemPic: item.pic,
        itemGlass: item.glass,
        itemName: item.name,
        itemWidth: item.width,
        itemHeight: item.height,
        itemRemarks: item.remarks,
        itemCreatedAt: item.createdAt,
        itemUpdatedAt: item.updatedAt,
      });
    });
  });

  // Convert transformed records to CSV
  const csv = parse(transformedRecords, { header: true });

  return csv;
};
