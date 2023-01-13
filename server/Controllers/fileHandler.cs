using Excel = Microsoft.Office.Interop.Excel;
using System.Text;
using System.Runtime.InteropServices;
using System.IO;
using CsvHelper;
using System.Globalization;

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

        using (var reader = new StreamReader("/excel"))
        using (var csv = new CsvReader(reader, CultureInfo.InvariantCulture))
        {
        var records = csv.GetRecords<Programmering>();
        }

        
        if(!File.Exists("/excel")){
            return;
        }
        File.Delete("/excel");
    }
}