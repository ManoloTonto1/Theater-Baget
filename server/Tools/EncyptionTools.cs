using System.Security.Cryptography;
using System.Text;
using Microsoft.AspNetCore.Cryptography.KeyDerivation;

public class EncryptionTools {

    public static string GenerateKey(int userId) {
		Random random = new Random();
		return Mix(encryptSHA256(userId.ToString()), encryptSHA256(random.Next(100000, 69696969).ToString()));
    }

	// mixes the 2 strings for encryption
    public static string Mix(string userId, string key) {
		// the size difference between the two entered strings
        int diff = 0;
		string result = "";
		char[] userIdSplit = userId.ToCharArray();
		char[] keySplit = key.ToCharArray();

		if(userIdSplit.Length > keySplit.Length) {
			diff = userIdSplit.Length - keySplit.Length;

			result+= diff + "??@&B%#A!*G^$!!" + formatSplitStrings(userIdSplit, keySplit);
		} 
		
		if(userIdSplit.Length < keySplit.Length) {
			diff = keySplit.Length - userIdSplit.Length;

			result+= formatSplitStrings(keySplit, userIdSplit) + "!!@&B%#A!*G^$??" + diff;
		}

		if(userIdSplit.Length == keySplit.Length) {
			for(int i = 0; i < userIdSplit.Length; i++) {
				result+= userIdSplit[i].ToString() + keySplit[i].ToString();
			}
		}

        return result;
    }

	public static string formatSplitStrings(char[] bigger, char[] smaller) {
		string result = "";

		for(int i = 0; i < smaller.Length; i++) {
			result += bigger[i].ToString() + smaller[i].ToString();
			
			if(i == smaller.Length - 1) {
				for(int j = smaller.Length; j < bigger.Length; j++) {
					result += bigger[j].ToString();
				}
			}
		}

		return result;
	}

	public static string UnMix(string toUnMix, bool getUserId) {
		string result = "";
		List<string> dencryptedResults = new List<string>();

		if(toUnMix.Contains("??@&B%#A!*G^$!!")) {
			string[] pieces = toUnMix.Split("??@&B%#A!*G^$!!");
			dencryptedResults = DeconstructSplitStrings(pieces[1], Int32.Parse(pieces[0]), 0);
		}

		if(toUnMix.Contains("!!@&B%#A!*G^$??")) {
			string[] pieces = toUnMix.Split("!!@&B%#A!*G^$??");
			dencryptedResults = DeconstructSplitStrings(pieces[0], Int32.Parse(pieces[1]), 1);
		}

		if(!toUnMix.Contains("??@&B%#A!*G^$!!") && !toUnMix.Contains("!!@&B%#A!*G^$??"))
			dencryptedResults = DeconstructSplitStrings(toUnMix, 0, 2);

		if(getUserId)
			result = dencryptedResults[0];
		
		if(!getUserId)
			result = dencryptedResults[1];
		
		return result;
	}

	public static List<string> DeconstructSplitStrings(string encrypted, int difference, int bigger) {
		List<string> result = new List<string>(){"", ""};
		char[] encryptedSplit = encrypted.ToCharArray();


		for(int i = 0; i < encrypted.Length - difference; i++) {
			if(i%2 == 0 || i == 0)
				result[0] += encryptedSplit[i].ToString();

			if(i%2 != 0)
				result[1] += encryptedSplit[i].ToString();

			if(i == encrypted.Length - difference && difference != 0) {
				for(int j = encrypted.Length - difference; j < encrypted.Length; j++) {
					result[bigger] += encryptedSplit[j].ToString();
				}
			}
		}

		return result;
	}

    public static bool CheckId(string userId, string encrypted) {
		string dencryptedUserId = GetId(encrypted);
		return userId.Equals(dencryptedUserId);
    }

    public static string GetKey(string encrypted) {
		return UnMix(encrypted, false);
    }

	public static string GetId(string encrypted) {
		return UnMix(encrypted, true);
	}
		

	//reference source: https://www.c-sharpcorner.com/article/compute-sha256-hash-in-c-sharp/
    public static string encryptSHA256(string dataToEncrypt) {
		// Create a SHA256   
		using (SHA256 sha256Hash = SHA256.Create()) {  
			// ComputeHash - returns byte array  
			byte[] bytes = sha256Hash.ComputeHash(Encoding.UTF8.GetBytes(dataToEncrypt));  

			// Convert byte array to a string   
			StringBuilder builder = new StringBuilder();  
			for (int i = 0; i < bytes.Length; i++) {  
				builder.Append(bytes[i].ToString("x2"));  
			}  
			return builder.ToString();  
		}  
    }
    public static string hashPassword(string password)
    {
	    byte[] salt = Encoding.ASCII.GetBytes("dikke_boktor");
		
        // derive a 256-bit subkey (use HMACSHA256 with 100,000 iterations)
        string hashed = Convert.ToBase64String(KeyDerivation.Pbkdf2(
            password: password!,
            salt: salt,
            prf: KeyDerivationPrf.HMACSHA256,
            iterationCount: 100000,
            numBytesRequested: 256 / 8));

        return hashed;
    }
}