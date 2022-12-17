# Api Reference:
## Encryption:
### Methods:
*	Encrypt(password string)
### Toelichting:
De encryption api is gebruikt alleen om passwords te encrypten voordat ze naar de database gestuurd worden. Dit wordt gedaan bij het aanmaken van de passwords en voor de vergelijking van de passwords. De encryptie methode encrypt de password 50 keer met SHA256, bij elke iteratie wordt de string uit elkaar gehaald en “concatenate” met een hash. Dit has is hardcoded bij de server 

## Zalen:
### Methods:
*	GetZaal(int id) **GET zalen/:id**
*	GetZalen(limit int, offset int, orderBy string, order string, searchTerm string) **GET zalen/**
*	GetCount() **GET zalen/count**
*	PutZaal(id int, data Zaal) **PUT zalen/:id**
*	PostZaal(data Zaal) **POST zalen/**
*	DeleteZaal(id int) **DELETE zalen/**
### Toelichting:
De Zalen api is een REST-API Route om alles voor de zalen te behandelen, zoekfunctie is ook toegestaan via de GetZalen() functie, deze funncties krijgen ook de auth token van de gebruiker via de HEAD van de HTTP request.

## Users:
### Methods:
*	GetUser(int id) **GET user/:id**
*	GetUser (limit int, offset int, orderBy string, order string, searchTerm string) **GET user/**
*	GetCount() GET  **user/count**
*	PutUser(id int, data User) **PUT user/:id**
*	PostUser(data User) **POST user/**
*	DeleteUser(id int) **DELETE user/**
*   LoginUser(data User) **POST user/login**
### Toelichting:
De user api is gebruikt om de gebruikers te beheren, de gebruikers kunnen worden opgehaald, toegevoegd, verwijderd en geupdate. De gebruikers kunnen worden opgehaald met de GetUser() functie, deze functie kan ook worden gebruikt om te zoeken naar gebruikers. De functie krijgt ook de auth token van de gebruiker via de HEAD van de HTTP request. De functie LoginUser() wordt gebruikt om de gebruiker in te loggen, deze functie krijgt de gebruikersnaam en het wachtwoord van de gebruiker en geeft een auth token terug. Deze token moet worden gebruikt voor alle andere functies die de gebruiker nodig heeft.

## Reserveringen:
### Methods:
*	GetReserveringen(int id) GET **reserveringen/:id**
*	GetReserveringen (limit int, offset int, orderBy string, order string, searchTerm string) **GET reserveringen/**
*	GetCount() **GET reserveringen/count**
*	PutReserveringen(id int, data Reserveringen) **PUT reserveringen/:id**
*	PostReserveringen(data Reserveringen) **POST reserveringen/**
*	DeleteReserveringen(id int) **DELETE reserveringen/**
### Toelichting:
De reserveringen api is gebruikt om de reserveringen te beheren, de reserveringen kunnen worden opgehaald, toegevoegd, verwijderd en geupdate. De reserveringen kunnen worden opgehaald met de GetReserveringen() functie, deze functie kan ook worden gebruikt om te zoeken naar reserveringen. De functie krijgt ook de auth token van de gebruiker via de HEAD van de HTTP request.

## Tickets:
### Methods:
*	GetTickets(int id) GET **tickets/:id**
*	GetTickets (limit int, offset int, orderBy string, order string, searchTerm string) **GET tickets/**
*	GetCount() GET  **tickets/count**
*	PutTickets(id int, data Tickets) **PUT tickets/:id**
*	PostTickets(data Tickets) **POST tickets/**
*	DeleteTickets(id int) **DELETE tickets/**
### Toelichting:
De tickets api is gebruikt om de tickets te beheren, de tickets kunnen worden opgehaald, toegevoegd, verwijderd en geupdate. De tickets kunnen worden opgehaald met de GetTickets() functie, deze functie kan ook worden gebruikt om te zoeken naar tickets. De functie krijgt ook de auth token van de gebruiker via de HEAD van de HTTP request.

## Doneren:
### Methods:
*	GetDoneren(int id) GET **doneren/:id**
*	GetDoneren (limit int, offset int, orderBy string, order string, searchTerm string) **GET doneren/**
*	GetCount() **GET doneren/count**
*	PutDoneren(id int, data Doneren) **PUT doneren/:id**
*	PostDoneren(data Doneren) **POST doneren/** 
*	DeleteDoneren(id int) **DELETE doneren/**
### Toelichting:
De doneren api is gebruikt om de donaties te beheren, de donaties kunnen worden opgehaald, toegevoegd, verwijderd en geupdate. De donaties kunnen worden opgehaald met de GetDoneren() functie, deze functie kan ook worden gebruikt om te zoeken naar donaties. De functie krijgt ook de auth token van de gebruiker via de HEAD van de HTTP request.

## Programmering:
### Methods:
*	GetProgrammering(int id) **GET programmering/:id**
*	GetProgrammering (limit int, offset int, orderBy string, order string, searchTerm string) **GET programmering/**
*	GetCount() **GET programmering/count**
*	PutProgrammering(id int, data Programmering) **PUT programmering/:id**
*	PostProgrammering(data Programmering) **POST programmering/**
*	DeleteProgrammering(id int) **DELETE programmering/**
### Toelichting:
De programmering api is gebruikt om de programmering te beheren, de programmering kunnen worden opgehaald, toegevoegd, verwijderd en geupdate. De programmering kunnen worden opgehaald met de GetProgrammering() functie, deze functie kan ook worden gebruikt om te zoeken naar programmering. De functie krijgt ook de auth token van de gebruiker via de HEAD van de HTTP request.

## Auth:
### Methods:
*	GetLoggedInUser(*[Head]* string token) **GET auth/user**
*	GetValidToken(int id) **GET auth/token**
### Functies:
* GenerateToken(id uint)
* ValidateToken(token string) (uint, error)
* ExtractToken() returns string
* ExtractTokenID() returns int
### Toelichting:
De auth api is gebruikt om de gebruiker te authenticeren, de gebruiker kan worden geauthenticeerd met de GetLoggedInUser() functie, deze functie krijgt de auth token van de gebruiker via de HEAD van de HTTP request. De functie GetValidToken() wordt gebruikt om te kijken of de auth token nog geldig is, deze functie krijgt de auth token van de gebruiker via de HEAD van de HTTP request. De functies GenerateToken() en ValidateToken() worden gebruikt om de auth token te genereren en te valideren. De functie ExtractToken() wordt gebruikt om de auth token uit de HEAD van de HTTP request te halen en in een object te zetten. De functie ExtractTokenID() wordt gebruikt om de gebruikers ID uit de auth token te halen. Bij generate token geven we aan de user ID, Permissions en de tijd mee. Bij validate token halen we de user ID, Permissions en de tijd uit de token. Als de tijd van de token groter is dan de tijd van nu, dan is de token nog geldig. Als de tijd van de token kleiner is dan de tijd van nu, dan is de token niet meer geldig. Als de user ID van de token gelijk is aan de user ID van de gebruiker, dan is de token geldig. Als de user ID van de token niet gelijk is aan de user ID van de gebruiker, dan is de token niet geldig. Als de Permissions van de token gelijk is aan de Permissions van de gebruiker, dan is de token geldig. Als de Permissions van de token niet gelijk is aan de Permissions van de gebruiker, dan is de token niet geldig.



