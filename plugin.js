
function mytime() {
    $("#btnSubmit").removeAttr("disabled");
}


function SubmitForm() {
    $("#btnSubmit").attr("disabled","disabled");
    setTimeout(mytime , 4000);
    var jsFormData = $("#contact-form").serialize();
    $.ajax({
        type: "POST",
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScIARU_obMvUP-v8AzcsBK6BG9GqK3Jkr_zqsrDtMJoJqLwqg/formResponse",
        data: jsFormData,
        async: false,
        dataType: "xml",
        success: function (data) {
            SuccessResponse();
        }
    });
    SuccessResponse();
    window.open('index.html', '_self');
};

function SuccessResponse() {
    $('#btnSubmit').attr("disabled", 'true');
    $("#contact-form :input").attr('disabled', true);
};

function validateForm() {
    $("#contact-form").validate();
};
