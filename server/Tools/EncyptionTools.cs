public class EncryptionTools {

    public string GenerateKey(int userId) {

    }

	// mixes the 2 strings for encryption
    public static string Mix(string userId, string key) {
		// the size difference between the two entered strings
        int diff = 0;
		string result = "";
		char[] userIdSplit = userId.ToCharArray();
		char[] keySplit = key.ToCharArray();

		if(userIdSplit.Length > keySplit.Length)
		{
			diff = userIdSplit.Length - keySplit.Length;

			result+= diff + "??@&B%#A!*G^$!!" + formatSplitStrings(userIdSplit, keySplit);
		} 
		
		if(userIdSplit.Length < keySplit.Length)
		{
			diff = keySplit.Length - userIdSplit.Length;

			result+= formatSplitStrings(keySplit, userIdSplit) + "!!@&B%#A!*G^$??" + diff;
		}

		if(userIdSplit.Length == keySplit.Length) 
		{
			for(int i = 0; i < userIdSplit.Length; i++)
			{
				result+= userIdSplit[i].ToString() + keySplit[i].ToString();
			}
		}

        return result;
    }

	public static string formatSplitStrings(char[] bigger, char[] smaller) {
		string result = "";

		for(int i = 0; i < smaller.Length; i++)
		{
			result += bigger[i].ToString() + smaller[i].ToString();
			
			if(i == smaller.Length - 1)
			{
				for(int j = smaller.Length; j < bigger.Length; j++)
				{
					result += bigger[j].ToString();
				}
			}
		}

		return result;
	}

	public static string UnMix(string toUnMix, bool getUserId) {
		string result = "";
		List<string> dencryptedResults = new List<string>();

		if(toUnMix.Contains("??@&B%#A!*G^$!!"))
		{
			string[] pieces = toUnMix.Split("??@&B%#A!*G^$!!");
			dencryptedResults = DeconstructSplitStrings(pieces[1], Int32.Parse(pieces[0]), 0);
		}

		if(toUnMix.Contains("!!@&B%#A!*G^$??"))
		{
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


		for(int i = 0; i < encrypted.Length - difference; i++)
		{
			if(i%2 == 0 || i == 0)
				result[0] += encryptedSplit[i].ToString();

			if(i%2 != 0)
				result[1] += encryptedSplit[i].ToString();

			if(i == encrypted.Length - difference && difference != 0)
				for(int j = encrypted.Length - difference; j < encrypted.Length; j++)
				{
					result[bigger] += encryptedSplit[j].ToString();
				}
		}

		return result;
	}

    public bool CheckId(string userId, string encrypted) {
		string dencryptedUserId = GetId(encrypted);
		return userId.Equals(dencryptedUserId);
    }

    public string GetKey(string encrypted) {
		return UnMix(encrypted, false);
    }

	public string GetId(string encrypted) {
		return UnMix(encrypted, true);
	}
		

    public string encryptSHA256() {

    }

    public string encryptSHA512()
    {

    }
}