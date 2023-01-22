// using System.Collections.Generic;
// using System.Linq;
// using Microsoft.AspNetCore.Mvc;
// using Moq;
// using server.Controllers;
// using Xunit;

// public class ControllerTest : ControllerBase
// {

//     public ControllerTest( ){}

//     [Theory]
//     [InlineData("tokenBad", 1)]
//     [InlineData("", 1)]
//     [InlineData("token", -1)]
//     public void Delete_Unauthorized(string token, int id)
//     {
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.Delete(token, id)).ReturnsAsync(Unauthorized());
//         var obj = mock.Object;
//         var result = obj.Delete(token, id).ToString();
//         Assert.Equal(Unauthorized().ToString(), result);
//     }
//     [Theory]
//     [InlineData("token", 1)]
//     public void Delete_authorized(string token, int id)
//     {
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.Delete(token, id)).ReturnsAsync(Ok());
//         var obj = mock.Object;
//         var result = obj.Delete(token, id).ToString();
//         Assert.Equal(Ok().ToString(), result);
//     }

//     [Theory]
//     [InlineData(1)]
//     public void Exists(int id)
//     {
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.Exists(id)).Returns(true);
//         var obj = mock.Object;
//         var result = obj.Exists(id);
//         Assert.True(result);
//     }
//     [Theory]
//     [InlineData(-1)]
//     public void DoesNotExists(int id)
//     {
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.Exists(id)).Returns(false);
//         var obj = mock.Object;
//         var result = obj.Exists(id);
//         Assert.True(result);
//     }
//     [Theory]
//     [InlineData("tokenBad", 1)]
//     [InlineData("", 1)]
//     [InlineData("token", -1)]
//     public void GetUnauthorized(string token, int id)
//     {
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.Get(token, id)).ReturnsAsync(Unauthorized());
//         var obj = mock.Object;
//         var result = obj.Get(token, id).ToString();
//         Assert.Equal(Unauthorized().ToString(), result);
//     }
//     [Theory]
//     [InlineData("tokenBad", 1)]
//     [InlineData("", 1)]
//     [InlineData("token", -1)]
//     public void Get(string token, int id)
//     {
//         var gebruiker = new Gebruiker
//         {
//             id = 1,
//             naam = "testing "
//         };
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.Get(token, id)).ReturnsAsync(Ok(gebruiker));
//         var obj = mock.Object;
//         var result = obj.Get(token, id).Result;
//         Assert.Equal(id, result.Value.id);
//     }

//     [Theory]
//     [InlineData("token", 1)]
//     public void GetEmpty(string token, int id)
//     {
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.Get(token, id)).ReturnsAsync(NotFound(null));
//         var obj = mock.Object;
//         var result = obj.Get(token, id).Result;
//         Assert.Equal(id, result.Value.id);
//     }
//     [Theory]
//     [InlineData("token")]
//     public void GetAll(string token)
//     {
//         var list = new List<Gebruiker>{
//             new Gebruiker
//         {
//             id = 1,
//             naam = "testing "
//         },
//             new Gebruiker
//         {
//             id = 2,
//             naam = "testing2 "
//         },
//         };
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.GetAll(token)).ReturnsAsync(Ok(list));
//         var obj = mock.Object;
//         var result = obj.GetAll(token).Result.Value;
//         Assert.Equal(list.Count, result.Count());
//     }
//     [Theory]
//     [InlineData("token")]
//     public void GetAllEmpty(string token)
//     {
//         var list = new List<Gebruiker>();
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.GetAll(token)).ReturnsAsync(Ok(list));
//         var obj = mock.Object;
//         var result = obj.GetAll(token).Result.Value;
//         Assert.Equal(list.Count, result.Count());
//     }
//     [Theory]
//     [InlineData("token")]
//     public void GetAllUnauthorized(string token)
//     {
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.GetAll(token)).ReturnsAsync(Unauthorized());
//         var obj = mock.Object;
//         var result = obj.GetAll(token).ToString();
//         Assert.Equal(Unauthorized().ToString(), result);
//     }
//     [Fact]
//     public void GetCount()
//     {
//         var list = new List<Gebruiker>{
//             new Gebruiker
//         {
//             id = 1,
//             naam = "testing "
//         },
//             new Gebruiker
//         {
//             id = 2,
//             naam = "testing2 "
//         },
//         };
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.GetCount()).ReturnsAsync(list.Count());
//         var obj = mock.Object;
//         var result = obj.GetCount().Result.Value;
//         Assert.Equal(2, result);

//     }
//     [Fact]
//     public void GetCount_empty()
//     {
//         var list = new List<Gebruiker>();
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.GetCount()).ReturnsAsync(list.Count());
//         var obj = mock.Object;
//         var result = obj.GetCount().Result.Value;
//         Assert.Equal(0, result);

//     }

//     public static IEnumerable<object[]> GetUserDataForTestingPost()
//     {
//         var user = new Gebruiker
//         {
//             id = 1,
//             naam = "testing",
//             level = level.bezoeker
//         };
//         yield return new object[] { "token", user };
//     }

//     [Theory]
//     [MemberData(nameof(GetUserDataForTestingPost))]
//     public void Post(string token, Gebruiker data)
//     {
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.Post(token, data)).ReturnsAsync(Ok());
//         var obj = mock.Object;
//         var result = obj.Post(token, data).ToString();
//         Assert.Equal(Ok().ToString(), result);
//     }
//     public static IEnumerable<object[]> GetBadUserDataForTestingPost()
//     {
//         var user = new Gebruiker
//         {
//             id = 1,
//             naam = "testing",
//             level = level.bezoeker
//         };
//         var user2 = new Gebruiker
//         {
//             naam = "testing",
//             level = level.bezoeker
//         };
//         yield return new object[] { "tokenbad", user };
//         yield return new object[] { "tokenbad", user2 };
//     }

//     [Theory]
//     [MemberData(nameof(GetBadUserDataForTestingPost))]
//     public void Post_Unauthorized(string token, Gebruiker data)
//     {
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.Post(token, data)).ReturnsAsync(Unauthorized());
//         var obj = mock.Object;
//         var result = obj.Post(token, data).ToString();
//         Assert.Equal(Unauthorized().ToString(), result);
//     }
//     public static IEnumerable<object[]> GetUserDataForTestingPut()
//     {
//         var user = new Gebruiker
//         {
//             id = 1,
//             naam = "testing",
//             level = level.bezoeker
//         };
//         var user2 = new Gebruiker
//         {
//             id = 2,
//             naam = "testing",
//             level = level.bezoeker
//         };
//         yield return new object[] { "token", 1, user };
//         yield return new object[] { "token", 2, user2 };
//     }

//     [Theory]
//     [MemberData(nameof(GetUserDataForTestingPut))]
//     public void Put(string token, int id, Gebruiker data)
//     {
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.Put(token, id, data)).ReturnsAsync(Ok());
//         var obj = mock.Object;
//         var result = obj.Put(token, id, data).ToString();
//         Assert.Equal(Ok().ToString(), result);
//     }

//     public static IEnumerable<object[]> GetBadUserDataForTestingPut()
//     {
//         var user = new Gebruiker
//         {
//             id = 1,
//             naam = "testing",
//             level = level.bezoeker
//         };
//         var user2 = new Gebruiker
//         {
//             id = 2,
//             naam = "testing",
//             level = level.bezoeker
//         };
//         yield return new object[] { "token", 12, user };
//         yield return new object[] { "token", -1, user2 };
//     }

//     [Theory]
//     [MemberData(nameof(GetBadUserDataForTestingPut))]
//     public void PutUnauthorized(string token, int id, Gebruiker data)
//     {
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.Put(token, id, data)).ReturnsAsync(Unauthorized());
//         var obj = mock.Object;
//         var result = obj.Put(token, id, data).ToString();
//         Assert.Equal(Unauthorized().ToString(), result);
//     }
//     [Theory]
//     [MemberData(nameof(GetBadUserDataForTestingPut))]
//     public void PutBadRequest(string token, int id, Gebruiker data)
//     {
//         var mock = new Mock<IController<Gebruiker, Gebruiker>>();
//         mock.Setup(lib => lib.Put(token, id, data)).ReturnsAsync(BadRequest());
//         var obj = mock.Object;
//         var result = obj.Put(token, id, data).ToString();
//         Assert.Equal(BadRequest().ToString(), result);
//     }
// }