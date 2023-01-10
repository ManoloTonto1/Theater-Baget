using Microsoft.AspNetCore.Builder;
using Microsoft.EntityFrameworkCore;
using server.Controllers;

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

app.Run();
