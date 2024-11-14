document.querySelector(".CRSReadmore").addEventListener("click", function() {
   const dialog = document.getElementById("CRSdialogue");
   if (dialog) {
       dialog.showModal();
   }
});

document.querySelector(".PCCReadmore").addEventListener("click", function() {
    const dialog = document.getElementById("PCCdialogue");
    if (dialog) {
        dialog.showModal();
    }
 });

 document.querySelector(".IReadmore").addEventListener("click", function() {
    const dialog = document.getElementById("Idialogue");
    if (dialog) {
        dialog.showModal();
    }
 });

 document.querySelector(".NTSAReadmore").addEventListener("click", function() {
    const dialog = document.getElementById("NTSAdialogue");
    if (dialog) {
        dialog.showModal();
    }
 });
 
 document.querySelector(".BRSReadmore").addEventListener("click", function() {
    const dialog = document.getElementById("BRSdialogue");
    if (dialog) {
        dialog.showModal();
    }
 });

 document.querySelector(".KRAReadmore").addEventListener("click", function() {
    const dialog = document.getElementById("KRAdialogue");
    if (dialog) {
        dialog.showModal();
    }
 });

 document.querySelector(".MpesaReadmore").addEventListener("click", function() {
    const dialog = document.getElementById("Mpesadialogue");
    if (dialog) {
        dialog.showModal();
    }
 });

 document.querySelector(".BULKReadmore").addEventListener("click", function() {
    const dialog = document.getElementById("BULKdialogue");
    if (dialog) {
        dialog.showModal();
    }
 });


const CRSdialog = document.getElementById("CRSdialogue");
function closeDialog1() {
    CRSdialog.close();
}

const PCCdialog = document.getElementById("PCCdialogue");
function closeDialog2() {
    PCCdialog.close();
}

const Idialog = document.getElementById("Idialogue");
function closeDialog3() {
    Idialog.close();
}

const NTSAdialog = document.getElementById("NTSAdialogue");
function closeDialog4() {
    NTSAdialog.close();
}

const BRSdialog = document.getElementById("BRSdialogue");
function closeDialog5() {
    BRSdialog.close();
}

const KRAdialog = document.getElementById("KRAdialogue");
function closeDialog6() {
    KRAdialog.close();
}

const Mpesadialog = document.getElementById("Mpesadialogue");
function closeDialog7() {
    Mpesadialog.close();
}

const BULKdialog = document.getElementById("BULKdialogue");
function closeDialog8() {
    BULKdialog.close();
}

function myFunction(x) {
    const dropdown = document.getElementById("myDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
    x.classList.toggle("change");
}