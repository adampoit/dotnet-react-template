using System;
using Microsoft.AspNetCore.Mvc;

namespace DotnetReactTemplate.Controllers
{
	public class HomeController : Controller
	{
		public IActionResult Index()
		{
			return View();
		}
	}
}
