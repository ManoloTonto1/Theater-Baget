using Excel = Microsoft.Office.Interop.Excel;
using System.Text;
using System.Runtime.InteropServices;
using System.IO;
public class FileHandler {

    byte[]? readStream(Stream incomingData){
        byte[] bytes = new byte[incomingData.Length + 10];
        for (int i = 0; i < incomingData.Length; i++)
        {
            if (bytes[i] != incomingData.ReadByte())
            {
                Console.WriteLine("Error writing data.");
                return null;
            }
        }
        return bytes;
    }
    void createFile(byte[] data){
        using (FileStream fs = File.Create("/excel"))
        {
            // Add some information to the file.
            fs.Write(data, 0, data.Length);
            fs.Close();
        }
    }
    public void transformExcelToData(Stream incomingData){

        var bytes = readStream(incomingData);
        if (bytes == null)
        {
            return;
        }
        createFile(bytes);
        Excel.Application xlApp = new Excel.Application();
            Excel.Workbook xlWorkbook = xlApp.Workbooks.Open("/excel");
            Excel._Worksheet xlWorksheet = (Excel._Worksheet)xlWorkbook.Sheets[1];
            Excel.Range xlRange = xlWorksheet.UsedRange;

            int rowCount = xlRange.Rows.Count;
            int colCount = xlRange.Columns.Count;

            //iterate over the rows and columns and print to the console as it appears in the file
            for (int i = 1; i <= rowCount; i++)
            {
                for (int j = 1; j <= colCount; j++)
                {
                    //new line
                    if (j == 1)
                        Console.Write("\r\n");

                    //write the value to the console
                    if (xlRange.Cells[i, j] != null && xlRange.Cells[i, j] != null)
                        Console.Write(xlRange.Cells[i, j].ToString() + "\t");
                }
            }

            //cleanup
            GC.Collect();
            GC.WaitForPendingFinalizers();

            //release com objects to fully kill excel process from running in the background
            Marshal.ReleaseComObject(xlRange);
            Marshal.ReleaseComObject(xlWorksheet);

            //close and release
            xlWorkbook.Close();
            Marshal.ReleaseComObject(xlWorkbook);

            //quit and release
            xlApp.Quit();
            Marshal.ReleaseComObject(xlApp);
        
        if(!File.Exists("/excel")){
            return;
        }
        File.Delete("/excel");
    }
}