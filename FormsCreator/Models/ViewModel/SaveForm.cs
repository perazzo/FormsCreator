using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FormsCreator.Models.ViewModel
{
    public class SaveForm
    {
        public string Form { get; set; }
        public int PropertyID { get; set; }
        public Nullable<int> FormCreatorID { get; set; }
        public int SaveAllProperties { get; set; }
    }
}