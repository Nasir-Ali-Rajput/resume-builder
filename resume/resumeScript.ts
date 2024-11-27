let myName= localStorage.getItem("name")

window.addEventListener('load', ()=>{
   let picture= localStorage.getItem("profile_pic")
   let desig=localStorage.getItem("desig")
   let phone= localStorage.getItem("phone")
   let email= localStorage.getItem("email")
   let add= localStorage.getItem("add")
   let pass1= localStorage.getItem("pass1")
   let deg1= localStorage.getItem("deg1")
   let inst1= localStorage.getItem("inst1")
   let pass2= localStorage.getItem("pass2")
   let deg2= localStorage.getItem("deg2")
   let inst2= localStorage.getItem("inst2")
   let pass3= localStorage.getItem("pass3")
   let deg3= localStorage.getItem("deg3")
   let inst3= localStorage.getItem("inst3")
   let pass4= localStorage.getItem("pass4")
   let deg4= localStorage.getItem("deg4")
   let inst4= localStorage.getItem("inst4")
   let pass5= localStorage.getItem("pass5")
   let deg5= localStorage.getItem("deg5")
   let inst5= localStorage.getItem("inst5")
   let skill1= localStorage.getItem("skill1")
   let skill2= localStorage.getItem("skill2")
   let skill3= localStorage.getItem("skill3")
   let skill4= localStorage.getItem("skill4")
   let skill5= localStorage.getItem("skill5")
   let skill6= localStorage.getItem("skill6")
   let lang1= localStorage.getItem("lang1")
   let lang2= localStorage.getItem("lang2")
   let ref= localStorage.getItem("ref")
   let about= localStorage.getItem("about")
   let stYear= localStorage.getItem("stYear")
   let endYear= localStorage.getItem("endYear")
   let company= localStorage.getItem("company")
   let comLocation= localStorage.getItem("comLocation")
   let jobTitle= localStorage.getItem("jobTitle")
   let achv1= localStorage.getItem("achv1")
   let achv2= localStorage.getItem("achv2")
   let achv3= localStorage.getItem("achv3")
   let stYear1= localStorage.getItem("stYear1")
   let endYear1= localStorage.getItem("endYear1")
   let company1= localStorage.getItem("company1")
   let comLocation1= localStorage.getItem("comLocation1")
   let jobTitle1= localStorage.getItem("jobTitle1")
   let achv11= localStorage.getItem("achv11")
   let achv22= localStorage.getItem("achv22")
   let achv33= localStorage.getItem("achv33")
   let stYear2= localStorage.getItem("stYear2")
   let endYear2= localStorage.getItem("endYear2")
   let company2= localStorage.getItem("company2")
   let comLocation2= localStorage.getItem("comLocation2")
   let jobTitle2= localStorage.getItem("jobTitle2")
   let achv111= localStorage.getItem("achv111")
   let achv222= localStorage.getItem("achv222")
   let achv333= localStorage.getItem("achv333")
   
    
   let resImag:any = document.getElementById('resImag')
   resImag.src = picture;

let resName:any = document.getElementById('resName')
resName.textContent = myName

let resDesig:any = document.getElementById('resDesig')
resDesig.textContent = desig

let resPhone:any = document.getElementById('resPhone')
resPhone.textContent = phone

let resCompany:any = document.getElementById('resCompany')
resCompany.textContent = company

let resEmail:any = document.getElementById('resEmail')
resEmail.textContent = email

let resAdd:any = document.getElementById('resAdd')
resAdd.textContent = add

let resPass1:any = document.getElementById('resPass1')
resPass1.textContent = pass1

let resDeg1:any = document.getElementById('resDeg1')
resDeg1.textContent = deg1

let resInst1:any = document.getElementById('resInst1')
resInst1.textContent = inst1

let resPass2:any = document.getElementById('resPass2')
resPass2.textContent = pass2

let resDeg2:any = document.getElementById('resDeg2')
resDeg2.textContent = deg2

let resInst2:any = document.getElementById('resInst2')
resInst2.textContent = inst2

let resPass3:any = document.getElementById('resPass3')
resPass3.textContent = pass3

let resDeg3:any = document.getElementById('resDeg3')
resDeg3.textContent = deg3

let resInst3:any = document.getElementById('resInst3')
resInst3.textContent = inst3

let resPass4:any = document.getElementById('resPass4')
resPass4.textContent = pass4

let resDeg4:any = document.getElementById('resDeg4')
resDeg4.textContent = deg4

let resInst4:any = document.getElementById('resInst4')
resInst4.textContent = inst4

let resPass5:any = document.getElementById('resPass5')
resPass5.textContent = pass5

let resDeg5:any = document.getElementById('resDeg5')
resDeg5.textContent = deg5

let resInst5:any = document.getElementById('resInst5')
resInst5.textContent = inst5

let resSkill1:any = document.getElementById('resSkill1')
resSkill1.textContent = skill1

let resSkill2:any = document.getElementById('resSkill2')
resSkill2.textContent = skill2

let resSkill3:any = document.getElementById('resSkill3')
resSkill3.textContent = skill3

let resSkill4:any = document.getElementById('resSkill4')
resSkill4.textContent = skill4

let resSkill5:any = document.getElementById('resSkill5')
resSkill5.textContent = skill5

let resSkill6:any = document.getElementById('resSkill6')
resSkill6.textContent = skill6

let resLang1:any = document.getElementById('resLang1')
resLang1.textContent = lang1

let resLang2:any = document.getElementById('resLang2')
resLang2.textContent = lang2

let resRef:any = document.getElementById('resRef')
resRef.textContent = ref

let resAbout:any = document.getElementById('resAbout')
resAbout.textContent = about

let resStyear:any = document.getElementById('resStyear')
resStyear.textContent = stYear

let resEndyear:any = document.getElementById('resEndyear')
resEndyear.textContent = endYear

let resComlocation:any = document.getElementById('resComlocation')
resComlocation.textContent = comLocation

let resJobtitle:any = document.getElementById('resJobtitle')
resJobtitle.textContent = jobTitle

let resAchv1:any = document.getElementById('resAchv1')
resAchv1.textContent = achv1

let resAchv2:any = document.getElementById('resAchv2')
resAchv2.textContent = achv2

let resAchv3:any = document.getElementById('resAchv3')
resAchv3.textContent = achv3

let resStyear1:any = document.getElementById('resStyear1')
resStyear1.textContent = stYear1

let resEndyear1:any = document.getElementById('resEndyear1')
resEndyear1.textContent = endYear1

let resComlocation1:any = document.getElementById('resComlocation1')
resComlocation1.textContent = comLocation1

let resJobtitle1:any = document.getElementById('resJobtitle1')
resJobtitle1.textContent = jobTitle1

let resAchv11:any = document.getElementById('resAchv11')
resAchv11.textContent = achv11

let resAchv22:any = document.getElementById('resAchv22')
resAchv22.textContent = achv22

let resAchv33:any = document.getElementById('resAchv33')
resAchv33.textContent = achv33

let resStyear2:any = document.getElementById('resStyear2')
resStyear2.textContent = stYear2

let resEndyear2:any = document.getElementById('resEndyear2')
resEndyear2.textContent = endYear2

let resComlocation2:any = document.getElementById('resComlocation2')
resComlocation2.textContent = comLocation2

let resJobtitle2:any = document.getElementById('resJobtitle2')
resJobtitle2.textContent = jobTitle2

let resAchv111:any = document.getElementById('resAchv111')
resAchv111.textContent = achv111

let resAchv222:any = document.getElementById('resAchv222')
resAchv222.textContent = achv222

let resAchv333:any = document.getElementById('resAchv333')
resAchv333.textContent = achv333


})














// print button //
let print_btn: HTMLElement|null = document.getElementById('print_btn');

print_btn?.addEventListener('click', ()=> {
    window.print()
})

// edit button //
let edit_btn: HTMLElement|null = document.getElementById('edit_btn');

edit_btn?.addEventListener("click", ()=>{
    window.history.back()
})

// shareable link button //
let share_btn: HTMLElement|null = document.getElementById('share_btn')
let anc = document.getElementById("anc")
let userName;
if(myName){
   userName= myName.toLocaleLowerCase().replace(/\s+/g, "-")
} else{
    userName = "user"
}
let baseUrl = "http://127.0.0.1:5500/resume/resume.html";
let uniqueUrl = `${baseUrl}?/${myName}`


share_btn?.addEventListener("click", ()=>{
    anc?.setAttribute("href", uniqueUrl)
    
})
// copy link button //
let copy_btn: HTMLElement|null = document.getElementById('copy_btn')

copy_btn?.addEventListener("click", ()=>{
    navigator.clipboard.writeText(uniqueUrl).then(()=>{
        alert("copy done")
    })

})