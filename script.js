function createInvestigation(data) {

    let divcontent = document.createElement('div')
    divcontent.classList.add('Provisionaldata')



    data.forEach(names => {

        console.log(names.name)

        let Provisionaldata = document.createElement('div')
        Provisionaldata.classList.add('Provisionaldata')

        let Provisionaldatabox1 = document.createElement('div')
        Provisionaldatabox1.classList.add('Provisionaldatabox1')

        Provisionaldatabox1.innerText = names.name


        Provisionaldata.appendChild(Provisionaldatabox1)
        divcontent.appendChild(Provisionaldata)
        console.log('divcontent => ', divcontent)




        //        `
        //        <div class="Provisionaldata">
        //        <div class="Provisionaldatabox1">
        //            ${names.name}
        //        </div>
        //        <div class="Provisionaldatabox1">
        //            ${names.name}
        //        </div>
        //    </div>
        //        `

    })
    return divcontent


}
function createAllergies(data) {

    let divcontent = document.createElement('div')
    divcontent.classList.add('Allergies')
    let allergiesArray = [];
    data.forEach(val => {

        allergiesArray.push(val.name)

    })
    let spann = document.createElement('span')
    spann.classList.add("allergy")
    spann.innerText = allergiesArray.join(', ')
    divcontent.appendChild(spann)

    return divcontent

}


function createAdvice(data) {

    let divcontent = document.createElement('div')
    divcontent.classList.add('advice')


    data.forEach(val => {
        let medicinedatabox1 = document.createElement("medicinedatabox1")
        medicinedatabox1.classList.add("medicinedatabox1")

        let text = document.createElement('span')
        text.classList.add('spann')
        text.innerText = val.advice

        medicinedatabox1.appendChild(text)

        divcontent.appendChild(medicinedatabox1)

    })

    return divcontent

}

function createChronicIllness(data) {

    let divcontent = document.createElement("div")
    divcontent.classList.add("Chronic-Illness")


    data.forEach(val => {

        let medicinedatabox1 = document.createElement("medicinedatabox1")
        medicinedatabox1.classList.add("medicinedatabox1")

        let Investigationprofile = document.createElement("div")
        Investigationprofile.classList.add("Investigationprofile")
        Investigationprofile.innerText = val.chronic_illness.name

        let Investigationdate = document.createElement("Investigationdate")
        Investigationdate.classList.add("Investigationdate")
        Investigationdate.innerText = val.date



        medicinedatabox1.appendChild(Investigationprofile)
        medicinedatabox1.appendChild(Investigationdate)

        divcontent.appendChild(medicinedatabox1)



    })

    return divcontent
}

function createDocument(data) {
    let divcontent = document.createElement('div')
    divcontent.classList.add('Chronic-Illness')


    data.forEach(val => {

        let medicinedatabox1 = document.createElement("medicinedatabox1")
        medicinedatabox1.classList.add("medicinedatabox1")

        let Investigationprofile = document.createElement("div")
        Investigationprofile.classList.add("Investigationprofile")
        Investigationprofile.innerText = val.fileName

        let Investigationdate = document.createElement("Investigationdate")
        Investigationdate.classList.add("Investigationdate")
        Investigationdate.innerText = val.category.name



        medicinedatabox1.appendChild(Investigationprofile)
        medicinedatabox1.appendChild(Investigationdate)

        divcontent.appendChild(medicinedatabox1)



    })

    return divcontent


}

function createFamilyHistroy(data) {

    
    let divcontent = document.createElement("div")
    divcontent.classList.add("Provisionaldata")


    console.log(data.length)





    data.forEach(val => {
      
        let divvv=document.createElement('div')
        divvv.classList.add('Heading')
        divvv.innerText=val.family_relation


        divcontent.appendChild(divvv)
        val.family_history.forEach(valll=>{

           
            let allchipss=document.createElement('div')
            allchipss.classList.add('allChips')

            // let Provisionaldata = document.createElement('div')
            // Provisionaldata.classList.add('Provisionaldata')
    
            let Provisionaldatabox1 = document.createElement('div')
            Provisionaldatabox1.classList.add('Provisionaldatabox1')
            Provisionaldatabox1.innerText=valll.name

            // allchipss.appendChild(Provisionaldata)
            allchipss.appendChild(Provisionaldatabox1)
            // Provisionaldata.appendChild(Provisionaldatabox1)
            divcontent.appendChild(allchipss)
        })

       
    })

    return divcontent
}

function createNextVisit(data){

    let divcontent =document.createElement('div')
    divcontent.classList.add('nextVisit')

    data.forEach(val =>{

        let medicinedatabox1 = document.createElement("medicinedatabox1")
        medicinedatabox1.classList.add("medicinedatabox1")

        let Investigationprofile = document.createElement("div")
        Investigationprofile.classList.add("Investigationprofile")
        const eveen=new Date(val.next_visit_date)
        const options = {
            // weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };

        let date =eveen.toLocaleDateString('de-DE', options);

        
        // console.log()
        Investigationprofile.innerText ="Next Visit - " +date

        medicinedatabox1.appendChild(Investigationprofile)
        divcontent.appendChild(medicinedatabox1)
    })

    return divcontent

}


function createMedicationHistroy(data){

    let divcontent =document.createElement('div')
    divcontent.classList.add('medication_history')

    data.forEach(val=>{
        console.log(val.medicine.form+"."+val.medicine.fullbrandname)
        let container=document.createElement('div')
        container.classList.add('medicinedatabox')

        let div1=document.createElement('div')
        div1.classList.add('Investigationprofile')
        div1.innerText=val.medicine.form+".  "+val.medicine.fullbrandname

        let div2=document.createElement('div')
        div2.classList.add('div2')

        container.appendChild(div1)
        container.appendChild(div2)

        let dosage=document.createElement('div')
        dosage.classList.add('datarow4')
        dosage.setAttribute('id' ,'one')

        let dosageHead=document.createElement('span')
        dosageHead.classList.add('Investigationdateee')
        dosageHead.innerText="Dosage"

        let dosagefooter=document.createElement('span')
        dosagefooter.classList.add('Investigationprofile11')
        dosagefooter.innerText=val.frequency1+" - "+val.frequency2+" - "+val.frequency3

        dosage.appendChild(dosageHead)
        dosage.appendChild(dosagefooter)

        div2.appendChild(dosage)


        let since=document.createElement('div')
        since.classList.add('datarow4')
        since.setAttribute('id' ,'two')

        let sinceHead=document.createElement('span')
        sinceHead.classList.add('Investigationdateee')
        sinceHead.innerText="Since"

        let sincefooter=document.createElement('span')
        sincefooter.classList.add('Investigationprofile11')
        const eveen=new Date(val.from_date)
        const options = {
            // weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };

        let date =eveen.toLocaleDateString(undefined , options);
        sincefooter.innerText=date

        since.appendChild(sinceHead)
        since.appendChild(sincefooter)

        div2.appendChild(since)

        let status=document.createElement('div')
        status.classList.add('datarow4')
        status.setAttribute('id' ,'threee')

        let statusHead=document.createElement('span')
        statusHead.classList.add('Investigationdateee')
        statusHead.innerText="Status"


        let statusfooter=document.createElement('span')
        statusfooter.classList.add('Investigationprofile11')
        statusfooter.innerText=val.medstatus

        status.appendChild(statusHead)
        status.appendChild(statusfooter)

        div2.appendChild(status)

        divcontent.appendChild(container)


    })

    return divcontent


}

function createMedication(data){
    let divcontent =document.createElement('div')
    divcontent.classList.add("mediction")

    data.forEach(val=>{
        let container=document.createElement('div')
        container.classList.add('medicinedatabox')

        let div1=document.createElement('div')
        div1.classList.add('Investigation')
        div1.innerText=val.medicine.form+".  "+val.medicine.fullbrandname

        let div2=document.createElement('div')
        div2.classList.add('div2')

        container.appendChild(div1)
        container.appendChild(div2)

        let dosage=document.createElement('div')
        dosage.classList.add('datarow4')
        dosage.setAttribute('id' ,'one')

        let dosageHead=document.createElement('span')
        dosageHead.classList.add('Investigationdateee')
        dosageHead.innerText="Dosage"

        let dosagefooter=document.createElement('span')
        dosagefooter.classList.add('Investigation')
        dosagefooter.innerText=val.frequency1+" - "+val.frequency2+" - "+val.frequency3

        dosage.appendChild(dosageHead)
        dosage.appendChild(dosagefooter)

        div2.appendChild(dosage)


        let since=document.createElement('div')
        since.classList.add('datarow4')
        since.setAttribute('id' ,'two')

        let sinceHead=document.createElement('span')
        sinceHead.classList.add('Investigationdateee')
        sinceHead.innerText="Duration"

        let sincefooter=document.createElement('span')
        sincefooter.classList.add('Investigation')
        sincefooter.innerText=val.duration +" "+val.duration_type

        since.appendChild(sinceHead)
        since.appendChild(sincefooter)

        div2.appendChild(since)

        let status=document.createElement('div')
        status.classList.add('datarow4')
        status.setAttribute('id' ,'threee')

        let statusHead=document.createElement('span')
        statusHead.classList.add('Investigationdateee')
        statusHead.innerText="Instruction"


        let statusfooter=document.createElement('span')
        statusfooter.classList.add('Investigationprofile11')
        val.instructions.forEach(valu=>{
            console.log(valu.name)
            statusfooter.innerText=valu.name
        })
       

        status.appendChild(statusHead)
        status.appendChild(statusfooter)

        div2.appendChild(status)

        divcontent.appendChild(container)


    })

    return divcontent

}

function createChiefComplaints(data){
    let divcontent=document.createElement('div')
    divcontent.classList.add('Chief_Complaints')


    data.forEach(val=>{
        let container=document.createElement('div')
        container.classList.add('medicinedatabox')

        let div1=document.createElement('div')
        div1.classList.add('Investigation')
        div1.innerText=val.chief_complaint.name

        let div2=document.createElement('div')
        div2.classList.add('div22')

        container.appendChild(div1)
        container.appendChild(div2)

        let dosage=document.createElement('div')
        dosage.classList.add('datarow44')
        // dosage.setAttribute('id' ,)

        let dosageHead=document.createElement('span')
        dosageHead.classList.add('Investigationdateee')
        dosageHead.innerText="Severity"

        let dosagefooter=document.createElement('span')
        dosagefooter.classList.add('Investigationprofile11')
        dosagefooter.innerText=val.severity
        // dosagefooter.innerText=val.frequency1+" - "+val.frequency2+" - "+val.frequency3

        dosage.appendChild(dosageHead)
        dosage.appendChild(dosagefooter)

        div2.appendChild(dosage)


        let since=document.createElement('div')
        since.classList.add('datarow44')
        // since.setAttribute('id' ,'')

        let sinceHead=document.createElement('span')
        sinceHead.classList.add('Investigationdateee')
        sinceHead.innerText="Duration"

        let sincefooter=document.createElement('span')
        sincefooter.classList.add('Investigationprofile11')
        sincefooter.innerText=val.duration+" "+val.duration_type
        
        // sincefooter.innerText=date

        since.appendChild(sinceHead)
        since.appendChild(sincefooter)

        div2.appendChild(since)

        divcontent.appendChild(container)
    })

    return divcontent;
}

function createSystemReview(data)
{
    let divcontent = document.createElement('div')
    divcontent.classList.add('Provisionaldata')

    data.forEach(val=>{

        let divvv=document.createElement('div')
        divvv.classList.add('Heading')
        divvv.innerText=val.category.name

 
        divcontent.appendChild(divvv)
        val.system_reviews.forEach(valll=>{

           

            let Provisionaldata = document.createElement('div')
            Provisionaldata.classList.add('Provisionaldata')
    
            let Provisionaldatabox1 = document.createElement('div')
            Provisionaldatabox1.classList.add('Provisionaldatabox1')
            Provisionaldatabox1.innerText=valll.name

            Provisionaldata.appendChild(Provisionaldatabox1)
            divcontent.appendChild(Provisionaldata)
        })
        


       
    })

    return divcontent
}

function createInvestigationHistory(data){
    let divcontent =document.createElement('div')
    divcontent.classList.add("Chronic-Illness")

    data.forEach(val=>{
        let medicinedatabox=document.createElement('div')
        medicinedatabox.classList.add('medicinedatabox')


        let nameandDate=document.createElement('div')
        nameandDate.classList.add('nameandDate')


        let head=document.createElement('div')
        head.classList.add("Investigation12")
        head.innerText=val.investigation.name

        let date=document.createElement('div')
        date.classList.add("Datee")
        const eveen=new Date(val.date)
        const options = {
            // weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          };

        let datee =eveen.toLocaleDateString('de-DE', options);

        date.innerText=datee

        nameandDate.appendChild(head)
        nameandDate.appendChild(date)


        medicinedatabox.appendChild(nameandDate)

        val.params.forEach(vall=>{
            let allData=document.createElement('div')
            allData.classList.add("allData")

            let allInfo=document.createElement('div')
            allInfo.classList.add('allInfo')

            allInfo.innerText=vall.param.name+"-"+vall.value

            allData.appendChild(allInfo)

          
            medicinedatabox.appendChild(allData)
    

        })

       


        divcontent.appendChild(medicinedatabox)




    })

    return divcontent
}


function createVitals(data){
    let divcontent =document.createElement('div')
    divcontent.classList.add('vitals')


    data.forEach(val=>{
        console.log(val)

        val.forEach(ele=>{
            console.log(ele)
            

            let  HbA1cHeartAndWeight=document.createElement('div')
            HbA1cHeartAndWeight.classList.add('HbA1cHeartAndWeight')

            let column=document.createElement('div')
            column.classList.add('column')

            HbA1cHeartAndWeight.appendChild(column)

            let alldatat=document.createElement('div')
            alldatat.classList.add('alldatat')

            column.appendChild(alldatat)

            let Oval=document.createElement('div')
            Oval.classList.add('Oval')

            alldatat.appendChild(Oval)

            let perHB1Accand7_2=document.createElement('div')
            perHB1Accand7_2.classList.add('perHB1Accand7-2')

            alldatat.appendChild(perHB1Accand7_2)


            let HbA1cAllData=document.createElement('div')
            HbA1cAllData.classList.add('HbA1cAllData')

            perHB1Accand7_2.appendChild(HbA1cAllData)

            let sevenpointwo=document.createElement('span')
            sevenpointwo.classList.add('sevenpointwo')
            sevenpointwo.innerText=ele.value

            let percentage=document.createElement('span')
            percentage.classList.add('percentagee')
            percentage.innerText=ele.unit

            let HbA1cc= document.createElement('div')
            HbA1cc.classList.add('HbA1cc')
            HbA1cc.innerText=ele.vital.name

            HbA1cAllData.appendChild(sevenpointwo)
            HbA1cAllData.appendChild(percentage)
            HbA1cAllData.appendChild(HbA1cc)

          
            divcontent.appendChild(HbA1cHeartAndWeight)


     

      
        })

       
// console.log(vitalsinfo)

    })
    return divcontent
}






function fetchhh() {
    fetch("./patient-summary.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {

            data.forEach(summarydata => {




                const box = document.getElementById("boxess")

                const card = document.createElement('div');
                card.classList.add('cards');





                let boxess = document.createElement('div');
                boxess.classList.add("box2")

                let boxtwoheader = document.createElement('div')
                boxtwoheader.classList.add("boxtwoheader")

                let vitals = document.createElement('div')
                vitals.classList.add("vitals")

                let summarydatass=new String(summarydata.name)
                vitals.innerText = summarydatass.toUpperCase()

                let content = document.createElement('div')
                content.classList.add("content")

                if (summarydata.key_name === "investigation" || summarydata.key_name === "diagnosis") {
                    console.log('inv')
                    let investigaon = createInvestigation(summarydata.items)
                    console.log('investigaon => ', investigaon)
                    content.appendChild(investigaon)

                }
                else if (summarydata.key_name === "advice") {
                    let advice = createAdvice(summarydata.items)
                    content.appendChild(advice)
                }
                else if (summarydata.key_name === "allergy") {
                    let Allergies = createAllergies(summarydata.items)
                    content.appendChild(Allergies)
                }
                else if (summarydata.key_name === "chronic_illness") {
                    let chronic_illness = createChronicIllness(summarydata.items)
                    content.appendChild(chronic_illness)
                }
                else if (summarydata.key_name === "report") {
                    let documentt = createDocument(summarydata.items)
                    content.appendChild(documentt)

                }

                else if (summarydata.key_name === "family_history") {
                    let family_history = createFamilyHistroy(summarydata.items)
                    content.appendChild(family_history)
                   
                    // summarydata.items.forEach(val=>{
                    //     // console.log(val.family_history)

                       
                    //     content.appendChild(family_history)
    

                        
                    // })
                }

                else if(summarydata.key_name === "next_visit"){
                    let next_visit=createNextVisit(summarydata.items)
                    content.appendChild(next_visit)
                }
                else if(summarydata.key_name === "medication_history"){
                    let medication_history=createMedicationHistroy(summarydata.items)
                    content.appendChild(medication_history)
                }
                else if(summarydata.key_name==="chief_complaint"){
                    let chief_complaint=createChiefComplaints(summarydata.items)
                    content.appendChild(chief_complaint)
                }
                else if(summarydata.key_name === "medication"){
                    let medication=createMedication(summarydata.items)
                    content.appendChild(medication)

                }
                else if(summarydata.key_name === "system_review"){
                    let system_review=createSystemReview(summarydata.items)
                    content.appendChild(system_review)
                }
                else if(summarydata.key_name === "investigation_history"){
                    let investigation_history=createInvestigationHistory(summarydata.items)
                    content.appendChild(investigation_history)
                }
                else if(summarydata.key_name === "vital"){
                    let vital=createVitals(summarydata.items)
                    content.appendChild(vital)
                    console.log(vital)
                }




                let viewbtn = document.createElement('div')
                viewbtn.classList.add("viewbtn")

                let spanele = document.createElement('span')
                spanele.classList.add('material-symbols-outlined')
                spanele.setAttribute("id", "arrow2right");
                spanele.innerText = "arrow_forward"







                viewbtn.appendChild(spanele)
                boxtwoheader.appendChild(vitals)
                boxtwoheader.appendChild(viewbtn)
                boxess.appendChild(boxtwoheader)
                boxess.appendChild(content)


                card.appendChild(boxess)






                

                box.appendChild(card)

            });



        });



}

fetchhh();