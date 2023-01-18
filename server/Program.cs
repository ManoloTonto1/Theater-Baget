using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;

var policy = "Client";

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policy,
                      policy =>
                      {
                          policy.AllowAnyOrigin()
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                      });
});

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<theaterContext>(options =>
        options.UseSqlite("Data Source=database.db"));
}
else 
{
    builder.Services.AddDbContext<theaterContext>(options =>
        options.UseMySQL("Data Source=manuellopezhernandez.database.windows.net;Integrated Security=false;User ID=cmykttpscpclmwxyqxuwgkqx;Password=exJpmn7E9XsDVEtU4WKGikia;"));
}
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

app.UseCors(policy);

app.UseAuthorization();
app.MapControllers();

JsonSerializerOptions options = new()
{
    ReferenceHandler = ReferenceHandler.IgnoreCycles,
    WriteIndented = true
};

app.Run();