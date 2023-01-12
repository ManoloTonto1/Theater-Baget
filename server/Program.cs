using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Data.SQLite;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<theaterContext>(options =>
    options.UseSqlite("Data Source=database.db"));
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// enable if you want t use HTTPS, remember to change the Proxy in the client.
// app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

Database db = new Database();
Jwt jwt = new Jwt();

app.MapPost("signin", ([FromBody] validate_data data) => {
    
    var request = db.authenticate(data.email, data.password);
 
    if(request) {
        var token = jwt.CreateToken(data.email);
        return Results.Json(token);
    }
    return Results.BadRequest("Invalid Credentials");
});

app.MapGet("validate", (string token) => {
    bool result = jwt.ValidateToken(token);

    if(result) {
        return Results.Json(result);
    }
    return Results.BadRequest("Invalid Token");
});

app.Run();

public class validate_data {
    public string email {get; set;}
    public string password {get; set;}
    public bool persistentLogin {get; set;}
}