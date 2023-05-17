

// Helper function to convert array of objects to CSV format
export function convertToCSV(data: any[]) {
    const headers = Object.keys(data[0]).join(",") + "\n";
  
    const rows = data.map((obj) => {
      const values = Object.values(obj);
      return values.join(",");
    });
  
    return headers + rows.join("\n");
  }