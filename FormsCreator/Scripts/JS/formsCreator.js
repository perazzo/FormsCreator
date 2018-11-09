$(document).ready(function () {
    $("#btn-save").click(function (e) {
        //Read the value from input in modal dialog
        var v = $("#formNameTemp").val();
        // Set the value to the hidden input in form and submit the form
        $("#formName").val(v).closest("form").submit();
    });

    tinymce.init({
        selector: '#mytextarea',
        menubar: false,
        branding: false,
        plugins: [
            "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
            "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
            "table contextmenu directionality emoticons template textcolor paste fullpage textcolor colorpicker",
            "pagebreak"
        ],

        setup: function (editor) {
            editor.addButton('contactButton', {
                type: 'menubutton',
                text: 'Contact Information',
                icon: false,
                menu: [{
                    text: 'First Name',
                    onclick: function () {
                        editor.insertContent('<strong>#tenantFName#</strong>');
                    }
                }, {
                    text: 'Last Name',
                    onclick: function () {
                        editor.insertContent('<strong>#tenantLName#</strong>');
                    }
                }, {
                    text: 'Others On Lease',
                    onclick: function () {
                        editor.insertContent('<strong>#peopleOnLease#</strong>');
                    }
                }]
            });
            editor.addButton('datesButton', {
                type: 'menubutton',
                text: 'Dates',
                icon: false,
                menu: [{
                    text: 'Move in Date',
                    onclick: function () {
                        editor.insertContent('<strong>#moveInDate#</strong>');
                    }
                }, {
                    text: 'Lease start Date',
                    onclick: function () {
                        editor.insertContent('<strong>#leaseStartDate#</strong>');
                    }
                }, {
                    text: 'Lease end Date',
                    onclick: function () {
                        editor.insertContent('<strong>#leaseEndDate#</strong>');
                    }
                }, {
                    text: 'Move out Date',
                    onclick: function () {
                        editor.insertContent('<strong>#moveOutDate#</strong>');
                    }
                }, {
                    text: 'Current Date',
                    onclick: function () {
                        editor.insertContent('<strong>#currentDate#</strong>');
                    }
                }, {
                    text: 'Current Date + 3 days',
                    onclick: function () {
                        editor.insertContent('<strong>#currentDate3Days#</strong>');
                    }
                }, {
                    text: 'Current Date + 3 days (Formatted Date)',
                    onclick: function () {
                        editor.insertContent('<strong>#currentDatePlus3Days#</strong>');
                    }
                }, {
                    text: 'Current Month',
                    onclick: function () {
                        editor.insertContent('<strong>#currentMonth#</strong>');
                    }
                }, {
                    text: 'Current Year',
                    onclick: function () {
                        editor.insertContent('<strong>#currentYear#</strong>');
                    }
                }, {
                    text: 'Office Hours',
                    onclick: function () {
                        editor.insertContent('<strong>#officeHours#</strong>');
                    }
                }, ]
            });
            editor.addButton('feesButton', {
                type: 'menubutton',
                text: 'Fees',
                icon: false,
                menu: [{
                    text: 'Rental Amount',
                    onclick: function () {
                        editor.insertContent('<strong>#rentalAmount#</strong>');
                    }
                }, {
                    text: 'Housing Portion',
                    onclick: function () {
                        editor.insertContent('<strong>#housePortion#</strong>');
                    }
                }, {
                    text: 'Tenant Portion',
                    onclick: function () {
                        editor.insertContent('<strong>#tenantPortion#</strong>');
                    }
                }, {
                    text: 'Pet Fee',
                    onclick: function () {
                        editor.insertContent('<strong>#petFee#</strong>');
                    }
                }, {
                    text: 'Security Deposit',
                    onclick: function () {
                        editor.insertContent('<strong>#securityDeposit#</strong>');
                    }
                }, {
                    text: 'TV Charge',
                    onclick: function () {
                        editor.insertContent('<strong>#TvCharge#</strong>');
                    }
                }, {
                    text: 'Utility Charge',
                    onclick: function () {
                        editor.insertContent('<strong>#utilityCharge#</strong>');
                    }
                }, {
                    text: 'Parking Charge',
                    onclick: function () {
                        editor.insertContent('<strong>#parkingCharge#</strong>');
                    }
                }, {
                    text: 'Storage Charge',
                    onclick: function () {
                        editor.insertContent('<strong>#storageCharge#</strong>');
                    }
                }, {
                    text: 'Late Fee',
                    onclick: function () {
                        editor.insertContent('<strong>#lateFee#</strong>');
                    }
                }, {
                    text: 'NSF Check Fee',
                    onclick: function () {
                        editor.insertContent('<strong>#bankFee#</strong>');
                    }
                }, {
                    text: 'Tenant Currently Owes',
                    onclick: function () {
                        editor.insertContent('<strong>#TenantOwes#</strong>');
                    }
                }, ]
            });
            editor.addButton('propertyButton', {
                type: 'menubutton',
                text: 'Property Information',
                icon: false,
                menu: [{
                    text: 'Property Name',
                    onclick: function () {
                        editor.insertContent('<strong>#propertyName#</strong>');
                    }
                }, {
                    text: 'Property Phone',
                    onclick: function () {
                        editor.insertContent('<strong>#propertyPhone#</strong>');
                    }
                }, {
                    text: 'Property Street Address',
                    onclick: function () {
                        editor.insertContent('<strong>#propertyStreet#</strong>');
                    }
                }, {
                    text: 'Property City Address',
                    onclick: function () {
                        editor.insertContent('<strong>#propertyCity#</strong>');
                    }
                }, {
                    text: 'Property State Address',
                    onclick: function () {
                        editor.insertContent('<strong>#propertyState#</strong>');
                    }
                }, {
                    text: 'Property ZIP Address',
                    onclick: function () {
                        editor.insertContent('<strong>#propertyZIP#</strong>');
                    }
                }, {
                    text: 'Unit Number',
                    onclick: function () {
                        editor.insertContent('<strong>#unitNumber#</strong>');
                    }
                }, ]
            });
            editor.addButton('violations', {
                type: 'menubutton',
                text: 'Violations',
                icon: false,
                menu: [{
                    text: 'Loud Music',
                    onclick: function () {
                        editor.insertContent('<strong>Loud Music</strong>');
                    }
                }, {
                    text: 'Littered patio',
                    onclick: function () {
                        editor.insertContent('<strong>Littered Patio</strong>');
                    }
                }, {
                    text: 'Trash by your entry',
                    onclick: function () {
                        editor.insertContent('<strong>Trash by your entry</strong>');
                    }
                }, {
                    text: 'Disturbance',
                    onclick: function () {
                        editor.insertContent('<strong>Disturbance</strong>');
                    }
                }, {
                    text: 'Damage to property',
                    onclick: function () {
                        editor.insertContent('<strong>Damage to property</strong>');
                    }
                }, {
                    text: 'Unauthorized occupant',
                    onclick: function () {
                        editor.insertContent('<strong>Unauthorized occupant</strong>');
                    }
                }, {
                    text: 'Unauthorized animals',
                    onclick: function () {
                        editor.insertContent('<strong>Unauthorized animals</strong>');
                    }
                }, {
                    text: 'Unauthorized modification of dwelling',
                    onclick: function () {
                        editor.insertContent('<strong>Unauthorized modification of dwelling</strong>');
                    }
                }, {
                    text: 'Foil on window',
                    onclick: function () {
                        editor.insertContent('<strong>Foil on window</strong>');
                    }
                }, {
                    text: 'Excessive noise',
                    onclick: function () {
                        editor.insertContent('<strong>Excessive noise</strong>');
                    }
                }, {
                    text: 'Illegal Parking',
                    onclick: function () {
                        editor.insertContent('<strong>Illegal Parking</strong>');
                    }
                }, {
                    text: 'Other (see explaination)',
                    onclick: function () {
                        editor.insertContent('<strong>Other (see explaination)</strong>');
                    }
                }, ]
            });
            editor.addButton('signatures', {
                type: 'menubutton',
                text: 'Signatures',
                icon: false,
                menu: [{
                    text: 'User Signature',
                    onclick: function () {
                        editor.insertContent('<strong>#userSignature#</strong>');
                    }
                }, {
                    text: 'Tenant Signature',
                    onclick: function () {
                        editor.insertContent('<strong>#tenantSignature#</strong>');
                    }
                }, {
                    text: 'Tenant Signature Date',
                    onclick: function () {
                        editor.insertContent('<strong>#tenantSignatureDate#</strong>');
                    }
                }, ]
            });
            editor.addButton('mybutton', {
                text: 'Page Break',
                icon: false,
                onclick: function () {
                    editor.insertContent('<strong>#pageBreak#</strong>');
                }
            });
        },

        toolbar1: "newdocument fullpage | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | styleselect formatselect fontselect fontsizeselect",
        toolbar2: "cut copy paste | searchreplace | bullist numlist | outdent indent blockquote | undo redo | link image unlink anchor | insertdatetime preview | forecolor backcolor ",
        toolbar3: "table | hr removeformat | subscript superscript | charmap | print fullscreen | ltr rtl | spellchecker | visualchars visualblocks | pagebreak",
        toolbar4: 'contactButton | datesButton | feesButton | propertyButton | signatures | violations |  mybutton',
        init_instance_callback: "renderEditor",
        height: "300" 
    }); 
});

function renderEditor() {
    // clean tinyMCE
    tinymce.activeEditor.setContent('');

    // selected form
    var selectedForm = $("#SelectedFormId").val();
    if (selectedForm != '') {
        $.ajax({
            type: "GET",
            url: '/FormsCreator/LoadForm?id=' + selectedForm + '&pId=' + $("#propertyID").val(),
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                tinymce.activeEditor.setContent(data);
                // Default Forms
                if (selectedForm >= 1 && selectedForm <= 12) {
                    $("#btnLoadDefault").show();
                    $("#btnDeleteForm").hide();
                } else {
                    $("#btnDeleteForm").show();
                    $("#btnLoadDefault").hide();
                }
            },
            error: function (erro) {
                console.debug(erro);
            }
        });
    }
}

function changeForm(formID) {
    renderEditor();
}

function openModal() {
    $("#createForm").modal();
}

function saveCreateForm() {
    if ($("#formNameTemp").val() == '') {
        $("#formNameTemp").prop('required', true);
    } else {
        // clean tinyMCE
        tinymce.activeEditor.setContent('');

        $.ajax({
            url: '/FormsCreator/CreateForm',
            type: 'POST',
            data: JSON.stringify({
                FormName: $("#formNameTemp").val(),
                PropertyID: $("#propertyID").val()
            }),
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                if (data) {
                    var url = '/FormsCreator/Index/' + $("#propertyID").val() + '/' + $("#userID").val();
                    $(location).attr('href', url);
                }
            },
            error: function (erro) {
                console.debug(erro);
            }
        });
    }
}

function saveFormData() {
    // loading modal
    $("#loadingModalText").html("Saving!!!");
    $('#LoadingModal').modal({
        backdrop: 'static',
        keyboard: false
    });

    myData = {
        Form: tinymce.activeEditor.getContent(),
        PropertyID: $("#propertyID").val(),
        FormCreatorID: $("#SelectedFormId").val(),
        SaveAllProperties: $("#saveAllProperties").is(":checked") ? 1 : 0
    };
    $.ajax({
        url: '/FormsCreator/SaveFormData',
        type: 'POST',
        data: JSON.stringify(myData),
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            if (data) {
                $('#LoadingModal').modal('toggle');
                var url = '/FormsCreator/Index/' + $("#propertyID").val() + '/' + $("#userID").val();
                $(location).attr('href', url);
            }
        },
        error: function (erro) {
            console.debug(erro);
        }
    });
}

function deleteForm() {
    $("#modalDefaultTitle").html("Delete Form");
    var msg = "Confirm to delete '" + $("#SelectedFormId option:selected").text() + "' form.";
    $("#modalDefaultMessage").html(msg);
    $("#action").val("DELETE");
    $("#defaultMessageModal").modal();
}

function LoadDefault() {
    $("#modalDefaultTitle").html("Load Default Form");
    var msg = "Confirm to load '" + $("#SelectedFormId option:selected").text() + "' default form.";
    $("#modalDefaultMessage").html(msg);
    $("#action").val("LOAD");
    $("#defaultMessageModal").modal();
}

function modalDefaultAction() {
    if ($("#action").val() == "DELETE") {
        $.ajax({
            type: "GET",
            url: '/FormsCreator/DeleteForm?id=' + $("#SelectedFormId").val(),
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                if (data) {
                    var url = '/FormsCreator/Index/' + $("#propertyID").val() + '/' + $("#userID").val();
                    $(location).attr('href', url);
                }
            },
            error: function (erro) {
                console.debug(erro);
            }
        });
    } else if ($("#action").val() == "LOAD") {
        $.ajax({
            type: "GET",
            url: '/FormsCreator/LoadDefaultForm?id=' + $("#SelectedFormId").val(),
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                tinymce.activeEditor.setContent(data);
                $("#btnDeleteForm").hide();
                $("#defaultMessageModal").modal('toggle');
        },
            error: function (erro) {
                console.debug(erro);
        }
        });
    }
}