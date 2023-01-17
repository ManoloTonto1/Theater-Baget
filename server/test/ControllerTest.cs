using Microsoft.AspNetCore.Mvc;
using server.Controllers;
using Xunit;

public class ControllerTest
{

    [Theory]
    [InlineData("token",1)]
    [InlineData("tokenBad",1)]
    [InlineData("",1)]
    [InlineData("token",-1)]
    public void Delete( string token, int id)
    {
        Assert.False(token != "token");
        Assert.True(id > 0);
    }

    public bool Exists(int id)
    {
        throw new NotImplementedException();
    }

    public void Get( string token, int id)
    {
        throw new NotImplementedException();
    }

    public void GetAll( string token)
    {
        throw new NotImplementedException();
    }

    public void GetCount()
    {
        throw new NotImplementedException();
    }

    public void Post( string token,  Gebruiker data)
    {
        throw new NotImplementedException();
    }

    public void Put( string token, int id,  Gebruiker data)
    {
        throw new NotImplementedException();
    }
}