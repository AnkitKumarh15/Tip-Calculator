// frontend

function evaluation(){
    const ta = document.getElementById("total")
    const t = document.getElementById("tip")
    const n = document.getElementById("numberofperson")
    const output = document.getElementById("output")

    const tamount = ta.value
    const tips = t.value
    const num = n.value
    // console.log(`Total amount: ${tamount} Tips: ${tips} Numbers: ${num}`)
    const values = {
        "TA_input" : tamount ,
        "T_input" : tips,
        "N_input" : num
    }

    axios.post('http://localhost:1515/results',values).then((response)=>{
        output.style.display="block"
        const ar1 = document.getElementById("tpp")
        const ar2 = document.getElementById("app")
        const ar3 = document.getElementById("tawp")

        ar1.innerHTML = response.data.tpp
        ar2.innerHTML = response.data.app
        ar3.innerHTML = response.data.tawp
    }).catch((err)=>{
        console.log(err)
    })

}