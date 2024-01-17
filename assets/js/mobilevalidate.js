jQuery(function ($) {

    jQuery.validator.addMethod("country", function (value, element) {
        return this.optional(element) || /^[^+]/.test(value);
    }, "Enter Number Without Country Code");
    // jQuery.validator.addMethod("number", function (value, element) {
    //     return this.optional(element) || value.match(/^[1-9][0-9]*$/);
    // }, "Please enter the number without beginning with '0'");

    jQuery.validator.addMethod("mobile", function (value, element) {
        return this.optional(element) || $(element).intlTelInput("isValidNumber");
    }, "Please enter a valid mobile number");

    jQuery.validator.addMethod("alphabets", function (value, element) {
        return this.optional(element) || /^[a-zA-Z ]*$/.test(value);
    }, "Please enter Alphabets only");

    jQuery.validator.addMethod("email", function (value, element) {
        return this.optional(element) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
    }, "Please enter a valid email address.");


    jQuery.validator.addMethod("valueNotEquals", function (value, element, arg) {
        return arg !== value;
    }, "Value must not equal arg.");


    if ($('#contact-form').length > 0) {
        $('#contact-form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                mobile: {
                    required: "Enter Your Number"
                },
                email: {
                    required: "Enter Your Email"
                }
            }
        });
    }

    if ($('#query_form').length > 0) {
        $('#query_form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                mobile: {
                    required: "Enter Your Number"
                },
                email: {
                    required: "Enter Your Email"
                }
            }
        });
    }


    if ($('#price-popup').length > 0) {
        $('#price-popup').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true
                }
            }
        });
    }

    if ($('#floor').length > 0) {
        $('#floor').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                email: {
                    required: "Enter Your Email"
                },
                mobile: {
                    required: "Enter Your Number"
                }
            }
        });
    }

    if ($('#offer-forms').length > 0) {
        $('#offer-forms').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                email: {
                    required: "Enter Your Email"
                },
                mobile: {
                    required: "Enter Your Number"
                }
            }
        });
    }


    $('#video-form').validate({
        rules: {
            fname: {
                required: true,
                maxlength: 100
            },
            mobile: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 10
            },
            email: {
                required: true
            }
        },
        messages: {
            fname: {
                required: "Enter Your Name"
            },
            email: {
                required: "Enter Your Email"
            },
            mobile: {
                required: "Enter Your Number"
            }
        }
    });


    if ($('#download-brochure').length > 0) {
        $('#download-brochure').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                email: {
                    required: "Enter Your Email"
                },
                mobile: {
                    required: "Enter Your Number"
                }
            }
        });
    }

    if ($('#main-popup').length > 0) {
        $('#main-popup').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                }
            }
        });
    }

    if ($('#float-form').length > 0) {
        $('#float-form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                email: {
                    required: "Enter Your Email"
                },
                mobile: {
                    required: "Enter Your Number"
                }
            }
        });
    }
    if ($('#query_form').length > 0) {
        $('#query_form').validate({
            rules: {
                fname: {
                    required: true,
                    maxlength: 100
                },
                mobile: {
                    required: true,
                    number: true,
                    minlength: 10,
                    maxlength: 10
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                fname: {
                    required: "Enter Your Name"
                },
                email: {
                    required: "Enter Your Email"
                },
                mobile: {
                    required: "Enter Your Number"
                }
            }
        });
    }
});



// Transfer the logic for form submission for Shivji Krupa
function numbersonly(e) {
    var unicode = e.charCode ? e.charCode : e.keyCode
    if (unicode != 8) { //if the key isn't the backspace key (which we should allow)
        if (unicode < 48 || unicode > 57) //if not a number
            return false //disable key press
    }
    // isValidOTP();
  }
  
  function ValidateEmail(mail) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
        return (true)
    }
    // alert("You have entered an invalid email address!")
    return (false)
  }
  
  function queryParameter(name, url) {
    if (!url) url = location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    return results == null ? null : results[1];
  }
  
  $("form").submit(function (e) {
  
    e.preventDefault();
  
  
    var formName = (e.target).getAttribute("id");
  
    const nameInputSelector = `#${formName} input[name="fname"]`;
    const emailInputSelector = `#${formName} input[name="email"]`;
    const countryCodeSelector = `#${formName} select[name="CountryCode"]`;
    const mobileInputSelector = `#${formName} input[name="mobile"]`;
    const submitButton = `#${formName} #submitf`;
    var name = $(nameInputSelector).val();
    var email = $(emailInputSelector).val();
    var countryCode = $(countryCodeSelector).val();
    var mobile = $(mobileInputSelector).val();
    $(submitButton).prop('disabled', true);
    
  
    if (name == "") {
      alert('Please enter your name');
      return;
    }
  
    if (email == "") {
      alert('Please enter your email id');
      return;
    } else {
      if (!ValidateEmail(email)) {
        alert('Please enter a valid email id');
        return;
      }
  
    }
    if (mobile == "") {
      alert('Please enter your valid mobile number');
      return;
    } else {
      const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
      if (!regex.test(mobile)) {
        alert('Please enter your valid 10 digit mobile number');
        return;
      }
    }
    console.log(countryCode);
    if(countryCode && countryCode != "")  mobile = "+"+countryCode+mobile;
  
    var currentUrl = window.location.href;
    var project = 'Satyam Solaris';
    var utm_source = queryParameter('utm_source', currentUrl);
    var utm_medium = queryParameter('utm_medium', currentUrl);
    var utm_campaign = queryParameter('utm_campaign', currentUrl);
    var utm_term = queryParameter('utm_term', currentUrl);
    var utm_content = queryParameter('utm_content', currentUrl);
  
    var source = "Website"
    if (utm_source) {
      if (utm_source == "google") {
        source = (utm_term) ? "Google Search" : "Google Discovery";
      } else if (utm_source == "facebook") {
        source = "Facebook";
      }
  
    }
  
    var data = {
      "name": name,
      "mobile": mobile,
      "email": email,
      "source": source,
      "comment": "Source:" + utm_source + "|Medium:" + utm_medium + "|term:" + utm_term + "|content:" + utm_content + "|campaign:" + utm_campaign + "|URL:" + currentUrl.substring(0, 255),
      "sub_source": utm_medium,
      "project": project
  
    }
  
    var sfdcData = {
      "req":
      {
      "name": name,
      "mobile": mobile,
      "phone":  "",
      "email": email, 
      "alternateEmail":  "",
      "campaignCode": "a025i00000dNCyTAAW",
      "url":currentUrl.substring(0,255),
      "remarks": "Source:" + utm_source + "|Medium:" + utm_medium + "|term:" + utm_term + "|content:" + utm_content + "|campaign:" + utm_campaign + "|URL:" + currentUrl.substring(0, 255),
      "UTM_Medium":  utm_medium,
      "UTM_Source":  utm_source,
      "LeadIdentifier":  "post"
      }
  }
  
  storeLeadInSFDC(sfdcData);
  
  // storeLeadInEnrichr(data,formName);
  return;
  
  });
  
  
  function storeLeadInSFDC(data) {
    console.log(data)
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://l3g8sgyj77.execute-api.ap-south-1.amazonaws.com/Production",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        },
        "processData": false,
        "data": JSON.stringify(data)
    }
  
    $.ajax(settings).done(function (response) {
        console.log(response);
        data = data['req'];
        // storeLeadInDB(data["name"], data["email"], data["mobile"], JSON.stringify(response));
        setTimeout(function redirect_response() { window.location.href = "response.html"; }, 2000);
        return;
  
    });
  
  }
  
  
  function storeLeadInEnrichr(data, formName) {
    console.log("Adding Data to Enrichr");
    console.log(data)
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://pinkode.glitz.apps.enrichr.co/public/companies/41b21e3e-600b-4d9f-aab1-bfb72c5b915e/leads-all",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
        },
        "processData": false,
        "data": JSON.stringify(data)
    }
  
    $.ajax(settings).done(function (response) {
        console.log(response);
        // storeLeadInDB(data["name"], data["email"], data["mobile"], JSON.stringify(response), formName);
        setTimeout(function redirect_response() { window.location.href = "response.php"; }, 2000)
    });
  
  }
  
  function storeLeadInDB(name, email, mobile, response, formName) {
    var currentUrl = window.location.href;
    var utm_source = queryParameter('utm_source', currentUrl);
    var utm_medium = queryParameter('utm_medium', currentUrl)
    var utm_campaign = queryParameter('utm_campaign', currentUrl)
    var utm_adgroup = queryParameter('utm_adgroup', currentUrl)
    var utm_keyword = queryParameter('utm_keyword', currentUrl)
    var utm_adset = queryParameter('utm_adset', currentUrl)
    var utm_ad = queryParameter('utm_ad', currentUrl)
    var utm_device = queryParameter('utm_device', currentUrl)
    var utm_site = queryParameter('utm_site', currentUrl)
    var utm_placement = queryParameter('utm_placement', currentUrl);
    var gclid = queryParameter('gclid', currentUrl);
    var fbclid = queryParameter('fbclid', currentUrl);
    var srd = queryParameter('srd', currentUrl);
  
  
    var project = 'Shivji Krupa';
    var timestamp = Date();
    data = {
        "formId": String(Math.floor(Date.now() / 1000)),
        "name": name,
        "email": email,
        "mobile": mobile,
        "project": project,
        "lead_creation_date": timestamp,
        "utm_source": utm_source,
        "utm_medium": utm_medium,
        "utm_campaign": utm_campaign,
        "utm_adgroup": utm_adgroup,
        "utm_keyword": utm_keyword,
        "utm_adset": utm_adset,
        "utm_ad": utm_ad,
        "utm_device": utm_device,
        "utm_site": utm_site,
        "utm_placement": utm_placement,
        "gclid": gclid,
        "fbclid": fbclid,
        "response": response,
        "formName": formName,
        "url": currentUrl,
        "srd": srd
  
    }
    const formURL = 'https://dj2kxzt125.execute-api.ap-south-1.amazonaws.com/Prod/submitForm';
  
    var xhr = new XMLHttpRequest();
    xhr.open('POST', formURL, true);
    xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  
    // Send the collected data as JSON
    xhr.send(JSON.stringify(data));
  
    xhr.onloadend = response => {
        if (response.target.status === 200) {
            //   form.reset();
            console.error(JSON.parse(response));
  
            //   submitResponse.innerHTML = 'Form submitted. Success!';
        } else {
            //   submitResponse.innerHTML = 'Error! Please try again.';
            console.error(JSON.parse(response));
        }
    };
  
  }
  
  