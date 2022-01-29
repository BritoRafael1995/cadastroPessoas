#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["cadastro-pessoas.API/cadastro-pessoas.API.csproj", "cadastro-pessoas.API/"]
RUN dotnet restore "cadastro-pessoas.API/cadastro-pessoas.API.csproj"
COPY . .
WORKDIR "/src/cadastro-pessoas.API"
RUN dotnet build "cadastro-pessoas.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "cadastro-pessoas.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "cadastro-pessoas.API.dll"]