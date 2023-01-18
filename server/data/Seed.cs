class Seed
{

    // default add voor de zalen
    public Seed(theaterContext context)
    {
        seedZaal(context);
        seedGebruiker(context);
        seedProgramma(context);
        seedGroep(context);

    }
    private void seedZaal(theaterContext context)
    {
        if (context.Zaal.Count() != 0)
        {
            return;
        }
        context.Add(new Zaal
        {
            eersterangsAantal = 20,
            tweederangsAantal = 100,
            derderangsAantal = 120
        });
        context.Add(new Zaal
        {
            eersterangsAantal = 20,
            tweederangsAantal = 1160,
        });
        context.Add(new Zaal
        {
            eersterangsAantal = 10,
            tweederangsAantal = 80,
        });
        context.Add(new Zaal
        {
            eersterangsAantal = 40,
            tweederangsAantal = 200,
            derderangsAantal = 200
        });

        for (int i = 0; i < 10; i++)
        {
            context.Add(new Zaal
            {
                eersterangsAantal = 15,
                tweederangsAantal = 15,
            });
        }
        context.SaveChanges();
    }
    private void seedGebruiker(theaterContext context)
    {
        if (context.Gebruiker.Count() != 0)
        {
            return;
        }
        context.Add(new Gebruiker
        {
            naam = "Chad Ekelschot",
            leeftijdsGroep = LeeftijdsGroep.Volwassenen,
            level = level.admin,
            loginGegevens = new LoginGegevens
            {
                wachtwoord = "password",
                email = "chad@e.com",
                twoFactor = false
            }
        });
        context.Add(new Gebruiker
        {
            naam = "Manolo Petroleum",
            leeftijdsGroep = LeeftijdsGroep.Senior,
            level = level.donateur,
            loginGegevens = new LoginGegevens
            {
                wachtwoord = "password",
                email = "m@pet.com",
                twoFactor = false
            }
        });
        context.Add(new Gebruiker
        {
            naam = "Akasi Uzumaki",
            leeftijdsGroep = LeeftijdsGroep.Volwassenen,
            level = level.medewerker,
            loginGegevens = new LoginGegevens
            {
                wachtwoord = "password",
                email = "aka@mail.com",
                twoFactor = false
            }
        });
        context.Add(new Gebruiker
        {
            naam = "Xiao China",
            leeftijdsGroep = LeeftijdsGroep.Senior,
            level = level.acteur,
            loginGegevens = new LoginGegevens
            {
                wachtwoord = "password",
                email = "xiao@mail.com",
                twoFactor = false
            }
        });
        context.Add(new Gebruiker
        {
            naam = "Martijn Gelatin",
            leeftijdsGroep = LeeftijdsGroep.Senior,
            level = level.bezoeker,
            loginGegevens = new LoginGegevens
            {
                wachtwoord = "password",
                email = "M@mail.com",
                twoFactor = false
            }
        });
        context.SaveChanges();
    }

    private void seedProgramma(theaterContext context)
    {
        if (context.Programmering.Count() != 0)
        {
            return;
        }
        context.Programmering.Add(new Programmering
        {
            datum = new DateTime(2023, 06, 26),
            titel = "The immigration of Xiao",
            zaal = context.Zaal.Find(1),
            omschrijving = "Tempor nulla ex sit reprehenderit ipsum do deserunt nisi esse do aute amet. Laborum labore non fugiat enim. Quis exercitation aliqua proident fugiat in cupidatat cillum esse cillum velit duis exercitation. Minim duis consectetur officia voluptate sunt quis duis qui adipisicing.",
            afbeelding = "data:application/octet-stream;base64,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",
        });
        context.Programmering.Add(new Programmering
        {
            datum = new DateTime(2023, 04, 27),
            titel = "Turko we Made it",
            zaal = context.Zaal.Find(2),
            omschrijving = "Tempor nulla ex sit reprehenderit ipsum do deserunt nisi esse do aute amet. Laborum labore non fugiat enim. Quis exercitation aliqua proident fugiat in cupidatat cillum esse cillum velit duis exercitation. Minim duis consectetur officia voluptate sunt quis duis qui adipisicing.",
            afbeelding = "https://www.hiphopinjesmoel.com/wp-content/uploads/2019/05/MURDABABACOVER2.jpg"
        });
        context.Programmering.Add(new Programmering
        {
            datum = new DateTime(2023, 08, 27),
            titel = "We no speak Americano",
            zaal = context.Zaal.Find(3),
            omschrijving = "Tempor nulla ex sit reprehenderit ipsum do deserunt nisi esse do aute amet. Laborum labore non fugiat enim. Quis exercitation aliqua proident fugiat in cupidatat cillum esse cillum velit duis exercitation. Minim duis consectetur officia voluptate sunt quis duis qui adipisicing.",
            afbeelding = "https://thumbs.dreamstime.com/b/confused-asian-person-142560915.jpg"
        });
        context.Programmering.Add(new Programmering
        {
            datum = new DateTime(2023, 02, 27),
            titel = "Road to the Riches",
            zaal = context.Zaal.Find(4),
            omschrijving = "Tempor nulla ex sit reprehenderit ipsum do deserunt nisi esse do aute amet. Laborum labore non fugiat enim. Quis exercitation aliqua proident fugiat in cupidatat cillum esse cillum velit duis exercitation. Minim duis consectetur officia voluptate sunt quis duis qui adipisicing.",
            afbeelding = "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_47/3115076/191122-venezuela-al-1118.jpg"
        });
        context.SaveChanges();
    }
    private void seedGroep(theaterContext context)
    {
        System.Console.WriteLine(context.Groep.Count());
        if (context.Groep.Count() != 0)
        {
            return;
        }
        context.Groep.Add(new Groep
        {
            naam = "Blink 182",
            websiteUrl = "https://www.blink182.com/",
            omschrijving = "Sit velit do ex excepteur ullamco dolor consequat enim. Sint ex nisi sunt ullamco ipsum commodo minim quis anim. Fugiat sunt consequat ea officia cillum laboris ut id culpa. Eu pariatur aute commodo et do consectetur do velit do deserunt pariatur velit voluptate. Deserunt anim laboris aliquip velit nulla incididunt et id. Veniam sint est proident qui mollit.",
            afbeelding = "https://media.pitchfork.com/photos/63455c20ad52edf6c61b433c/1:1/w_2000,h_2000,c_limit/Blink-182.jpg",
            betrokkenen = new List<Betrokkene>{
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "jason Derulo",
                    level = level.bandlid,

                },
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "таф",
                    level = level.bandlid,

                },
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "blaquito",
                    level = level.bandlid,

                },
            },
            programmeringen = new List<Programmering>{
                context.Programmering.First()
            }
        });
        context.Groep.Add(new Groep
        {
            naam = "alt-J",
            websiteUrl = "https://www.altjband.com/",
            omschrijving = "Sit velit do ex excepteur ullamco dolor consequat enim. Sint ex nisi sunt ullamco ipsum commodo minim quis anim. Fugiat sunt consequat ea officia cillum laboris ut id culpa. Eu pariatur aute commodo et do consectetur do velit do deserunt pariatur velit voluptate. Deserunt anim laboris aliquip velit nulla incididunt et id. Veniam sint est proident qui mollit.",
            afbeelding = "https://dynamicmedia.livenationinternational.com/Media/u/j/v/f997f3e4-07fa-43c6-8c00-a3853a02aa82.jpg",
            betrokkenen = new List<Betrokkene>{
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "fat bastard",
                    level = level.bandlid,

                },
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "Harry pothead",
                    level = level.bandlid,

                },
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "skinny piet",
                    level = level.bandlid,

                },
            }
        });
        context.Groep.Add(new Groep
        {
            naam = "Electric callboy",
            websiteUrl = "https://www.electriccallboy.com/",
            omschrijving = "Sit velit do ex excepteur ullamco dolor consequat enim. Sint ex nisi sunt ullamco ipsum commodo minim quis anim. Fugiat sunt consequat ea officia cillum laboris ut id culpa. Eu pariatur aute commodo et do consectetur do velit do deserunt pariatur velit voluptate. Deserunt anim laboris aliquip velit nulla incididunt et id. Veniam sint est proident qui mollit.",
            afbeelding = "https://electriccallboy.com/wp-content/uploads/2020/06/eskimocallboy-hypahypa-foto_wide-1-scaled.jpg",
            betrokkenen = new List<Betrokkene>{
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "lieve niebba",
                    level = level.bandlid,

                },
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "jan kees",
                    level = level.bandlid,

                },
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "pieter pan",
                    level = level.bandlid,

                },
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "milf maniac",
                    level = level.bandlid,

                },
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "aladin panstealer",
                    level = level.bandlid,

                },
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "chadilicious marvelous",
                    level = level.bandlid,

                },
            }
        });
                context.Groep.Add(new Groep
        {
            naam = "Vieze asbak",
            websiteUrl = "https://www.instagram.com/viezeasbak/",
            omschrijving = "Sit velit do ex excepteur ullamco dolor consequat enim. Sint ex nisi sunt ullamco ipsum commodo minim quis anim. Fugiat sunt consequat ea officia cillum laboris ut id culpa. Eu pariatur aute commodo et do consectetur do velit do deserunt pariatur velit voluptate. Deserunt anim laboris aliquip velit nulla incididunt et id. Veniam sint est proident qui mollit.",
            afbeelding = "https://lastfm.freetls.fastly.net/i/u/ar0/5016d207639858cdc0359c1abe74109a.jpg",
            betrokkenen = new List<Betrokkene>{
                new Betrokkene{
                    leeftijdsGroep = LeeftijdsGroep.Volwassenen,
                    naam= "je moeders cigarette",
                    level = level.bandlid,

                },
            }
        });

        context.SaveChanges();

    }
}