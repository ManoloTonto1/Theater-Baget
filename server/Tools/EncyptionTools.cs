public class EncryptionTools {

    public string GenerateKey(int id) {

    }

    public string Mix(string a, string b) {
        int diff = 0;
		string c = "";
		int aBigger = 2;
		
		char[] aSplit = a.ToCharArray();
		Console.WriteLine(aSplit.Length);
		char[] bSplit = b.ToCharArray();
		Console.WriteLine(bSplit.Length);

		if(aSplit.Length > bSplit.Length)
		{
			Console.WriteLine(aSplit.Length - bSplit.Length);
			aBigger = 1;
			diff = aSplit.Length - bSplit.Length;
		} 
		else if(aSplit.Length < bSplit.Length)
		{
			Console.WriteLine(bSplit.Length - aSplit.Length);
			aBigger = 0;
			diff = bSplit.Length - aSplit.Length;
		}
		
		if(aBigger == 1)
		{
			c+= diff + "??@&B%#A!*G^$!!";
			for(int i = 0; i < bSplit.Length; i++)
			{
				c += aSplit[i].ToString() + bSplit[i].ToString();
				
				if(i == bSplit.Length - 1)
				{
					for(int j = bSplit.Length; j < aSplit.Length; j++)
					{
						c += aSplit[j].ToString();
					}
				}
			}
		} 
		else if(aBigger == 0)
		{
			for(int i = 0; i < aSplit.Length; i++)
			{
				c+= aSplit[i].ToString() + bSplit[i].ToString();
				
				if(i == aSplit.Length - 1)
				{
					for(int j = aSplit.Length; j < bSplit.Length; j++)
					{
						c += bSplit[j].ToString();
					}
				}
			}
			c+= "!!@&B%#A!*G^$??" + diff;
		}
		else
		{
			for(int i = 0; i < aSplit.Length; i++)
			{
				c+= aSplit[i].ToString() + bSplit[i].ToString();
			}
		}
        return c;
    }

    public List<string> Split(string a) {

    }

    public bool CheckId(string id) {

    }

    public string GetKey() {

    }

    public string encryptSHA256() {

    }

    public string encryptSHA512()
    {

    }
}