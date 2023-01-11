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

app.MapPost("signin", (string email, string password) => {
    
    var request = db.authenticate(email, password);
 
    if(request) {
        var token = db.CreateToken(email);
        return Results.Json(token);
    }
    return Results.BadRequest("Invalid Credentials");
});

app.MapPost("validate", (string token) => {
    bool result = db.ValidateToken(token);

    if(result) {
        return Results.Json(result);
    }
    return Results.BadRequest("Invalid Token");
});

app.Run();