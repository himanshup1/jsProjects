const wrapper=document.querySelector(".wrapper");
const generateBtn=wrapper.querySelector(".form button");
const qrInput=wrapper.querySelector(".form input");
const qrImg=wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click",()=>{
    let qrValue=qrInput.value;
    if(!qrValue) return;

    // console.log(qrValue);
    qrImg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    wrapper.classList.add("active");
});

