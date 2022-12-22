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
		if(toUnMix.Contains("??@&B%#A!*G^$!!"))
		{
			string[] pieces = toUnMix.Split("??@&B%#A!*G^$!!");
		}

		if(toUnMix.Contains("!!@&B%#A!*G^$??"))
		{
			string[] pieces = toUnMix.Split("!!@&B%#A!*G^$??");
		}

		if(!toUnMix.Contains("??@&B%#A!*G^$!!") && !toUnMix.Contains("!!@&B%#A!*G^$??"))
		{
			
		}
		return result;
	}

    public bool CheckId(string userId) {

    }

    public string GetKey() {

    }

    public string encryptSHA256() {

    }

    public string encryptSHA512()
    {

    }
}