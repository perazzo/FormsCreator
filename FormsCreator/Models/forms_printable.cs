//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace FormsCreator.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class forms_printable
    {
        public int Forms_PrintableID { get; set; }
        public string Form_Name { get; set; }
        public string Form { get; set; }
        public int PropertyID { get; set; }
        public Nullable<int> FormCreatorID { get; set; }
    }
}
