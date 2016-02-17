using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JIS_Cost_Savings.Startup))]
namespace JIS_Cost_Savings
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
