using FormsCreator.Models;
using FormsCreator.Models.ModelView;
using FormsCreator.Models.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace FormsCreator.Controllers
{
    public class FormsCreatorController : Controller
    {
        private MyiRentEntities db = new MyiRentEntities();

        // GET: FormsCreator
        public ActionResult Index(int? id, int? uID)
        {
            if (id == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            if(uID == null)
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);

            ViewData["PropertyID"] = id;
            ViewData["UserID"] = uID;
            //var forms = db.formscreators.Where(fp => fp.PropertyID == id || fp.PropertyID == 0)
            //    .OrderByDescending(x => x.PropertyID).GroupBy(x => x.FormName).Select(x => x.FirstOrDefault()).ToList();

            
            var forms = (from fc in db.formscreators
                         where fc.PropertyID == id || fc.PropertyID == 0
                         orderby fc.FormName ascending
                         select fc).ToList();
            // RHAWA = 993
            if (id == 993)
            {
                forms = (from fc in db.formscreators
                         where fc.PropertyID == id
                         orderby fc.FormName ascending
                         select fc).ToList();
            }

            var viewModel = new ListFormsCreator();
            viewModel.Forms = forms.Select(a => new SelectListItem
            {
                Value = a.FormsCreatorID.ToString(),
                Text = a.FormName
            }).ToList();

            var getUserPrivilegies = db.users.Where(u => u.UserID == uID).FirstOrDefault();
            if (getUserPrivilegies.SecurityLevelID == 1)
            {
                viewModel.SaveAllProperties = true;
            } else
            {
                viewModel.SaveAllProperties = false;
            }


            // Set selected
            var formID = Convert.ToInt32(System.Web.HttpContext.Current.Session["SelectedFormId"]);
            viewModel.SelectedFormId = formID;

            return View(viewModel);
        }

        [HttpPost]
        public ActionResult CreateForm(formscreator formCreated)
        {
            db.formscreators.Add(formCreated);
            db.SaveChanges();
            System.Web.HttpContext.Current.Session["SelectedFormId"] = formCreated.FormsCreatorID;
            return Json(new { success = true });
        }

        [HttpPost]
        public ActionResult SaveFormData(SaveForm formData)
        {
            if(formData.SaveAllProperties == 0)
            {
                var getFormsPrintable = db.forms_printable.Where(x => x.PropertyID == formData.PropertyID && x.FormCreatorID == formData.FormCreatorID).FirstOrDefault();

                // Insert
                if (getFormsPrintable == null)
                {
                    if(formData.FormCreatorID == 2)
                    {
                        // Lease Agreement
                            var data1 = formData.Form.Substring(0, 64000);
                            var data2 = formData.Form.Substring(64001);

                            // First Data
                            forms_printable fp1 = new forms_printable();
                            fp1.Form = data1;
                            fp1.FormCreatorID = 2;
                            fp1.PropertyID = formData.PropertyID;
                            fp1.Form_Name = "Lease_Agreement";
                            db.forms_printable.Add(fp1);
                            db.SaveChanges();

                            // Second Data
                            forms_printable fp2 = new forms_printable();
                            fp2.Form = data2;
                            fp2.FormCreatorID = 2;
                            fp2.PropertyID = formData.PropertyID;
                            fp2.Form_Name = "Lease_Agreement";
                            db.forms_printable.Add(fp2);
                            db.SaveChanges();
                    } else
                    {
                        forms_printable fp = new forms_printable();
                        // Get Form Name
                        var getFormName = db.formscreators.Where(x => x.FormsCreatorID == formData.FormCreatorID).FirstOrDefault();

                        fp.Form = formData.Form;
                        fp.FormCreatorID = formData.FormCreatorID;
                        fp.PropertyID = formData.PropertyID;
                        fp.Form_Name = getFormName.FormName;
                        db.forms_printable.Add(fp);
                        db.SaveChanges();
                    }
                }
                // Update
                else
                {
                    if (formData.FormCreatorID == 2)
                    {
                        // Lease Agreement
                        var data1 = formData.Form.Substring(0, 64000);
                        var data2 = formData.Form.Substring(64001);

                        var getLeaseAgreement = db.forms_printable.Where(x => x.PropertyID == formData.PropertyID && x.FormCreatorID == 2).ToList();
                        int count = 0;
                        foreach (var lease in getLeaseAgreement)
                        {
                            if(count == 0)
                            {
                                lease.Form = data1;
                                db.SaveChanges();
                            } else
                            {
                                lease.Form = data2;
                                db.SaveChanges();
                            }
                            count++;
                        }
                    } else
                    {
                        getFormsPrintable.Form = formData.Form;
                        db.SaveChanges();
                    }
                }
            }
            else
            {
                // All the Company Properties
                var companyID = (from p in db.properties
                                where p.PropertyID == formData.PropertyID
                                select new { p.CompanyID }).FirstOrDefault();

                var getProperties = db.properties.Where(p => p.CompanyID == companyID.CompanyID && p.Active == 0).ToList();
                foreach(var property in getProperties)
                {
                    int formsCreatorID = (int)formData.FormCreatorID;
                    // Get Form Name
                    var getFormName = db.formscreators.Where(x => x.FormsCreatorID == formData.FormCreatorID).FirstOrDefault();

                    // 12 defaults
                    if (formsCreatorID > 12)
                    {
                        var getFormsCreator = db.formscreators.Where(x => x.PropertyID == property.PropertyID && x.FormsCreatorID == formData.FormCreatorID).FirstOrDefault();
                        if (getFormsCreator == null)
                        {
                            formscreator fc = new formscreator();
                            fc.FormName = getFormName.FormName;
                            fc.PropertyID = property.PropertyID;
                            db.formscreators.Add(fc);
                            db.SaveChanges();

                            formsCreatorID = fc.FormsCreatorID;
                        }
                        else
                        {
                            formsCreatorID = getFormsCreator.FormsCreatorID;
                        }
                    }

                    var getFormsPrintable = db.forms_printable.Where(x => x.PropertyID == property.PropertyID && x.FormCreatorID == formsCreatorID).FirstOrDefault();
                    if (getFormsPrintable == null)
                    {
                        if (formsCreatorID == 2)
                        {
                            // Lease Agreement
                            var data1 = formData.Form.Substring(0, 64000);
                            var data2 = formData.Form.Substring(64001);

                            // First Data
                            forms_printable fp1 = new forms_printable();
                            fp1.Form = data1;
                            fp1.FormCreatorID = 2;
                            fp1.PropertyID = property.PropertyID;
                            fp1.Form_Name = "Lease_Agreement";
                            db.forms_printable.Add(fp1);
                            db.SaveChanges();

                            // Second Data
                            forms_printable fp2 = new forms_printable();
                            fp2.Form = data2;
                            fp2.FormCreatorID = 2;
                            fp2.PropertyID = property.PropertyID;
                            fp2.Form_Name = "Lease_Agreement";
                            db.forms_printable.Add(fp2);
                            db.SaveChanges();
                        } else
                        {
                            forms_printable fp = new forms_printable();

                            fp.Form = formData.Form;
                            fp.FormCreatorID = formsCreatorID;
                            fp.PropertyID = property.PropertyID;
                            fp.Form_Name = getFormName.FormName;
                            db.forms_printable.Add(fp);
                            db.SaveChanges();
                        }
                    }
                    else
                    {
                        if (formsCreatorID == 2)
                        {
                            // Lease Agreement
                            var data1 = formData.Form.Substring(0, 64000);
                            var data2 = formData.Form.Substring(64001);

                            var getLeaseAgreement = db.forms_printable.Where(x => x.PropertyID == property.PropertyID && x.FormCreatorID == 2).ToList();
                            int count = 0;
                            foreach (var lease in getLeaseAgreement)
                            {
                                if (count == 0)
                                {
                                    lease.Form = data1;
                                    db.SaveChanges();
                                }
                                else
                                {
                                    lease.Form = data2;
                                    db.SaveChanges();
                                }
                                count++;
                            }
                        } else
                        {
                            getFormsPrintable.Form = formData.Form;
                            db.SaveChanges();
                        }
                    }
                }
            }
            
            System.Web.HttpContext.Current.Session["SelectedFormId"] = formData.FormCreatorID;
            return Json(new { success = true });
        }

        [HttpGet]
        public JsonResult LoadForm()
        {
            int propertyID = Request["pId"] == "" ? 0 : Int32.Parse(Request["pId"]);
            int formCreatorID = Int32.Parse(Request["id"]);
            var getForm = db.forms_printable.Where(x => x.FormCreatorID == formCreatorID && x.PropertyID == propertyID).ToList();
            if(getForm.Count > 0)
            {
                var formReturn = "";
                foreach(var f in getForm)
                {
                    formReturn += f.Form;
                }
                return Json(formReturn, JsonRequestBehavior.AllowGet);
            }
            else
            {
                // Load Default
                var getFormDefault = db.forms_printable.Where(x => x.FormCreatorID == formCreatorID && x.PropertyID == 0).ToList();
                if(getFormDefault.Count > 0)
                {
                    var formReturn = "";
                    foreach (var f in getFormDefault)
                    {
                        formReturn += f.Form;
                    }
                    return Json(formReturn, JsonRequestBehavior.AllowGet);
                } else
                {
                    return Json("", JsonRequestBehavior.AllowGet);
                }
            }
        }

        [HttpGet]
        public JsonResult DeleteForm()
        {
            int formCreatorID = Int32.Parse(Request["id"]);

            var formCreator = db.formscreators.Where(x => x.FormsCreatorID == formCreatorID).FirstOrDefault();
            db.formscreators.Remove(formCreator);

            var formsPrintable = db.forms_printable.Where(x => x.FormCreatorID == formCreatorID).FirstOrDefault();
            if(formsPrintable != null)
            {
                db.forms_printable.Remove(formsPrintable);
            }

            db.SaveChanges();
            return Json(true, JsonRequestBehavior.AllowGet);
        }

        [HttpGet]
        public JsonResult LoadDefaultForm()
        {
            int formCreatorID = Int32.Parse(Request["id"]);

            var formsPrintable = db.forms_printable.Where(x => x.FormCreatorID == formCreatorID && x.PropertyID == 0).ToList();
            if(formsPrintable != null)
            {
                string formData = "";
                foreach(var form in formsPrintable)
                {
                    formData += form.Form;
                }
                return Json(formData, JsonRequestBehavior.AllowGet);
            } else
            {
                return Json("", JsonRequestBehavior.AllowGet);
            }
        }
    }
}