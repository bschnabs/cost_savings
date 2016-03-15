using Nancy;

namespace JIS_Cost_Savings
{
    public class Nancy : NancyModule
    {
        public Nancy()
        {
            Get["/"] = _ => View["home/index"];

            Get["/home"] = _ => "Test Hello...";
        }
    }
}