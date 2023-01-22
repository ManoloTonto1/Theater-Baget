using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace server;
public class JWT
{
    public JWT() { }
    private string SecureKey = "de_dikste_boktor";
    private string issuer = "TheaterBaget";
    private string audience = "TheaterBaget Chad";
    public async Task<string> CreateUserToken(Gebruiker user, bool persistentLogin)
    {
        return await Task.Run(() =>
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
        });

    }

    public async Task<(bool, JwtSecurityToken?)> validateToken(string token)
    {
        return await Task.Run<(bool, JwtSecurityToken?)>(async () =>
        {
            if (token == null)
            {
                return (false, null);
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(SecureKey);
            var cleanToken = await extractToken(token);
            try
            {
                tokenHandler.ValidateToken(cleanToken, new TokenValidationParameters
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
        });

    }
    public async Task<string> extractToken(string token)
    {
        return await Task.Run(() =>
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

        });
    }
    public async Task<level?> getRoleFromToken(string token)
    {
        return await Task.Run<level?>(async () =>
        {
            var (isValid, jwtToken) = await validateToken(token);
            if (!isValid || jwtToken == null)
            {
                return null;
            }

            var role = jwtToken.Claims.First(x => x.Type.Contains(ClaimTypes.Role)).Value;
            level parsedRole;
            var success = Enum.TryParse<level>(role, true, out parsedRole);
            return parsedRole;
        });

    }
    public async Task<bool> validateUserFromToken(string token, int id)
    {
        return await Task.Run(async () =>
        {
            var _token = await extractToken(token);
            var (isValid, jwtToken) = await validateToken(_token);
            if (!isValid || jwtToken == null)
            {
                return false;
            }

            var userId = jwtToken.Claims.First(x => x.Type.Contains("id")).Value;
            return Convert.ToInt16(userId) == id;
        });

    }
    public async Task<int> getUserFromToken(string token)
    {
        return await Task.Run(async () =>
        {
            var _token = await extractToken(token);
            var (isValid, jwtToken) = await validateToken(_token);
            if (!isValid || jwtToken == null)
            {
                return -1;
            }

            var userId = jwtToken.Claims.First(x => x.Type.Contains("id")).Value;
            return Convert.ToInt16(userId);
        });

    }

    public async Task<string> GenerateQRCode(string gebruikersNaam, List<string> stoelen, Programmering programma, string factuurNr)
    {
        return await Task.Run(() =>
        {
            var claims = new List<Claim>
            {
            new Claim("naam", gebruikersNaam),
            new Claim("factuur", factuurNr),
            new Claim("zaal", programma.zaal.zaalNr.ToString()),
            new Claim("stoelen", JsonConvert.SerializeObject(stoelen)),
            new Claim("programma", programma.titel)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(
                SecureKey));

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                issuer: issuer,
                claims: claims,
                audience: audience,
                expires: programma.datum.AddDays(1),
                signingCredentials: creds
            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return jwt;
        });

    }

}