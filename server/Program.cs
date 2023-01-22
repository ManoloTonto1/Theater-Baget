using System.Text.Json.Serialization;
using Microsoft.EntityFrameworkCore;
using server.Controllers;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
                      {
                          policy.WithOrigins("http://localhost:5173","https://manolotonto1.github.io")
                          .AllowAnyHeader()
                          .AllowAnyMethod()
                          .AllowCredentials();
                          
                      });
});


builder.Services.AddMvc().AddJsonOptions(options =>
{
    options.JsonSerializerOptions.PropertyNamingPolicy = null;
    options.JsonSerializerOptions.MaxDepth = 64;
    options.JsonSerializerOptions.IncludeFields = true;
    options.JsonSerializerOptions.WriteIndented = true;
    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
});

if (builder.Environment.IsDevelopment())
{
    builder.Services.AddDbContext<theaterContext>(options =>
        options.UseSqlite("Data Source=database.db"));
}
else
{
    builder.Services.AddDbContext<theaterContext>(options =>
        options.UseSqlServer(Environment.GetEnvironmentVariable("SQL_CONNECTION_STRING")));
}
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors();
app.UseRouting();
app.UseAuthorization();
app.UseEndpoints(builder =>
{
    builder.MapHub<StoelenController>("/api/stoelen");
    builder.MapControllers();
});
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.Run();