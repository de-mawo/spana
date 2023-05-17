import { AiOutlineCloudDownload } from "react-icons/ai";

type Props = {
  csvContent: any;
  filename: string;
  uniqueFileExt: string;
};

function DownloadCSV({ csvContent, filename, uniqueFileExt }: Props) {
  const handleClick = () => {
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8" });
    const objUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", objUrl);
    link.setAttribute("download", `${filename}_${uniqueFileExt}.csv`);
    link.textContent = "Click to Download";

    document.body.appendChild(link);

    // Simulate a click on the link to trigger the download
    link.click();

    // Clean up by removing the link element
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center primary-btn"
    >
      <span>Download</span>
      <AiOutlineCloudDownload className="ml-2 w-6 h-6" />
    </button>
  );
}

export default DownloadCSV;
