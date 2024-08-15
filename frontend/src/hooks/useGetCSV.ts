export const downloadCSV = async () => {
  try {
    const response = await fetch("/api/utils/getCsv");

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const csv = await response.text(); // Get CSV data as text

    // Create a Blob from the CSV data
    const blob = new Blob([csv], { type: "text/csv" });

    // Create a link element and click it to download the CSV
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "orders.csv";
    document.body.appendChild(link);
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error("Error downloading the file:", error);
  }
};
