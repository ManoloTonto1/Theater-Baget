using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace server;
public class JWT
{
    public JWT(){} 
    private string SecureKey = "de_dikste_boktor";
    private string issuer = "TheaterBaget";
    private string audience = "TheaterBaget Chad";
    public string CreateUserToken(Gebruiker user, bool persistentLogin)
    {
        var claims = new List<Claim>
        {
            new Claim("id", Convert.ToString(user.id)),
            new Claim("naam", user.naam),
            new Claim("email", user.loginGegevens.email),
            new Claim(ClaimTypes.Role, Convert.ToString(user.level)),

        };

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
            SecureKey));

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

        var token = new JwtSecurityToken(
            issuer: issuer,
            claims: claims,
            audience: audience,
            expires: persistentLogin ? DateTime.Now.AddYears(1) : DateTime.Now.AddDays(1),
            signingCredentials: creds
        );

        var jwt = new JwtSecurityTokenHandler().WriteToken(token);

        return jwt;
    }

    public (bool, JwtSecurityToken?) validateToken(string token)
    {
        if (token == null)
        {
            return (false, null);
        }

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.UTF8.GetBytes(SecureKey);
        var cleanToken = extractToken(token);
        try
        {
            tokenHandler.ValidateToken(cleanToken,new TokenValidationParameters
            {
                ValidateIssuerSigningKey = true,
                ValidateIssuer = true,
                ValidateAudience = true,
                ValidIssuer = issuer,
                IssuerSigningKey = new SymmetricSecurityKey(key),
                ValidAudience = audience
            }, out SecurityToken validatedToken);
            var jwtToken = (JwtSecurityToken)validatedToken;

            return (true, jwtToken);
        }
        catch
        {
            return (false, null);
        }
    }
    public string extractToken(string token)
    {
        var tokenSplit = token.Split(" ");

        if (token == null)
        {
            return "";
        }
        if (tokenSplit[0] != "Bearer")
        {
            return "";
        }
        return tokenSplit[1];
    }
    public level? getRoleFromToken(string token)
    {
        var _token = extractToken(token);
        var (isValid, jwtToken) = validateToken(_token);
        if (!isValid || jwtToken == null)
        {
            return null;
        }

        var role = jwtToken.Claims.First(x => x.Type.Contains(ClaimTypes.Role)).Value;
        var parsedRole = Convert.ToInt16(role);
        return (level)parsedRole;
    }
    public bool validateUserFromToken(string token, int id)
    {
        var _token = extractToken(token);
        var (isValid, jwtToken) = validateToken(_token);
        if (!isValid || jwtToken == null)
        {
            return false;
        }

        var userId = jwtToken.Claims.First(x => x.Type.Contains("id")).Value;
        return Convert.ToInt16(userId) == id;
    }
    public int getUserFromToken(string token)
    {
        var _token = extractToken(token);
        var (isValid, jwtToken) = validateToken(_token);
        if (!isValid || jwtToken == null)
        {
            return -1;
        }

        var userId = jwtToken.Claims.First(x => x.Type.Contains("id")).Value;
        return Convert.ToInt16(userId);
    }
}