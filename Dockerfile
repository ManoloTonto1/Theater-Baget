FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build-env
WORKDIR /App

# Copy everything
COPY ./server .
# Restore as distinct layers
RUN dotnet restore
ENV SQL_CONNECTION_STRING=${SQL_CONNECTION_STRING}
# Build and publish a release
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:6.0
WORKDIR /App
COPY --from=build-env /App/out .
COPY ./server/database.db .
VOLUME [ "/database.db" ]
EXPOSE 80
ENTRYPOINT ["dotnet", "server.dll"]
