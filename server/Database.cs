using System.Data.SQLite;

public class Database
{

    private string db;
    public SQLiteConnection conn;

    public Database()
    {
        this.conn = CreateConnection();
    }

    private SQLiteConnection CreateConnection()
    {

        SQLiteConnection conn = new SQLiteConnection("Data Source=database.db");

        try
        {
            conn.Open();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
        }
        return conn;
    }

    public void query(string query)
    {

    }

    //   static void insert(SQLiteConnection conn)
    //   {
    //      SQLiteCommand sqlite_cmd;
    //      sqlite_cmd = conn.CreateCommand();
    //      sqlite_cmd.CommandText = "INSERT INTO SampleTable
    //         (Col1, Col2) VALUES ('Test Text ', 1);";
    //      sqlite_cmd.ExecuteNonQuery();
    //      sqlite_cmd.CommandText = "INSERT INTO SampleTable
    //         (Col1, Col2) VALUES ('Test1 Text1 ', 2);";
    //      sqlite_cmd.ExecuteNonQuery();
    //      sqlite_cmd.CommandText = "INSERT INTO SampleTable
    //         (Col1, Col2) VALUES ('Test2 Text2 ', 3);";
    //      sqlite_cmd.ExecuteNonQuery();


    //      sqlite_cmd.CommandText = "INSERT INTO SampleTable1
    //         (Col1, Col2) VALUES ('Test3 Text3 ', 3);";
    //      sqlite_cmd.ExecuteNonQuery();

    //   }

    public bool authenticate(string email, string password)
    {
        using (SQLiteCommand cmd = this.conn.CreateCommand())
        {
            cmd.CommandText = @"SELECT * FROM LoginGegeven WHERE email='" + email + "' AND wachtwoord='" + password + "'";
            SQLiteDataReader row = cmd.ExecuteReader();

            while (row.Read())
            {

                string storedEmail = (string)row["email"];
                string storedPassword = (string)row["wachtwoord"];

                if (storedEmail == email && storedPassword == password)
                {
                    return true;
                }
            }
            return false;
        }
    }
}