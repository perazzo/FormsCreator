using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace FormsCreator.Models.ModelView
{
    public class ListFormsCreator
    {
        public int SelectedFormId { set; get; }
        public List<SelectListItem> Forms { get; set; }
        public bool SaveAllProperties { get; set; }
    }
}