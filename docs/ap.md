# Users:
## METHODS:
-	Geïmplementeerde methodes van de interface.
## TOELICHTING:
De user api is gebruikt om de gebruikers te beheren, de gebruikers kunnen worden opgehaald, toegevoegd, verwijderd en geupdate. De gebruikers kunnen worden opgehaald met de Get() functie, deze functie kan ook worden gebruikt om te zoeken naar gebruikers. De functie krijgt ook de auth token van de gebruiker via de HEAD van de HTTP request. De functie LoginUser() wordt gebruikt om de gebruiker in te loggen, deze functie krijgt de gebruikersnaam en het wachtwoord van de gebruiker en geeft een auth token terug. Deze token moet worden gebruikt voor alle andere functies die de gebruiker nodig heeft.

# Groepen:
## METHODS:
-	Geïmplementeerde methodes van de interface.
## TOELICHTING:
De groepen api is gebruikt om de groepen te beheren, de groepen kunnen worden opgehaald, toegevoegd, verwijderd en geupdate. De groepen kunnen worden opgehaald met de Get() functie, deze functie kan ook worden gebruikt om te zoeken naar groepen. De functie krijgt ook de auth token van de gebruiker via de HEAD van de HTTP request. De functie AddUserToGroup() wordt gebruikt om een gebruiker toe te voegen aan een groep, deze functie krijgt de gebruikersnaam en de groepsnaam van de gebruiker en geeft een auth token terug. Deze token moet worden gebruikt voor alle andere functies die de gebruiker nodig heeft.

# Bestellingen:
## METHODS:
-	Geïmplementeerde methodes van de interface.
## TOELICHTING:
De bestellingen api is gebruikt om de bestellingen te beheren, de bestellingen kunnen worden opgehaald, toegevoegd, verwijderd en geupdate. De bestellingen kunnen worden opgehaald met de Get() functie, deze functie kan ook worden gebruikt om te zoeken naar bestellingen. De functie krijgt ook de auth token van de gebruiker via de HEAD van de HTTP request. De functie AddOrder() wordt gebruikt om een bestelling toe te voegen, deze functie krijgt de gebruikersnaam en de groepsnaam van de gebruiker en geeft een auth token terug. Deze token moet worden gebruikt voor alle andere functies die de gebruiker nodig heeft.

# Betrokkenen:
## METHODS:
-	Geïmplementeerde methodes van de interface.
## TOELICHTING:
De betrokkenen api is gebruikt om de betrokkenen te beheren, de betrokkenen kunnen worden opgehaald, toegevoegd, verwijderd en geupdate. De betrokkenen kunnen worden opgehaald met de Get() functie, deze functie kan ook worden gebruikt om te zoeken naar betrokkenen. De functie krijgt ook de auth token van de gebruiker via de HEAD van de HTTP request. De functie AddBetrokken() wordt gebruikt om een betrokken toe te voegen, deze functie krijgt de gebruikersnaam en de groepsnaam van de gebruiker en geeft een auth token terug. Deze token moet worden gebruikt voor alle andere functies die de gebruiker nodig heeft.