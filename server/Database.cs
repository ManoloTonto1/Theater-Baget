using System.Data;
using System.Data.SQLite;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

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

    public string CreateToken(string email)
    {

        var claims = new List<Claim>
        {
            new Claim("email", email),
        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
            "de_dikste_boktor"));

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.Now.AddSeconds(10),
            // expires: DateTime.Now.AddMinutes(15),
            signingCredentials: creds
        );

        var jwt = new JwtSecurityTokenHandler().WriteToken(token);

        return jwt;
    }

    public bool ValidateToken(string token)
    {
        if (token == null)
            return false;

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.UTF8.GetBytes("de_dikste_boktor");
        try
        {
            tokenHandler.ValidateToken(token, new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidateIssuer = false,
                ValidateAudience = false,
                // set clockskew to zero so tokens expire exactly at token expiration time (instead of 5 minutes later)
                ClockSkew = TimeSpan.Zero
            }, out SecurityToken validatedToken);

            var jwtToken = (JwtSecurityToken)validatedToken;
            var userEmail = jwtToken.Claims.First(x => x.Type == "email").Value;

            // return user id from JWT token if validation successful
            return true;
        }
        catch
        {
            // return null if validation fails
            return false;
        }
    }
}