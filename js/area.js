// for triangle
function TrianglecalculateArea(){
    const baseText =document.getElementById("base-text")
    const baseTextValue =baseText.value
    const baseTextValueFloat = parseFloat(baseTextValue)
    console.log(baseTextValueFloat)
    baseText.value=''

    const heightText =document.getElementById("height-text")
    const heightTextValue =heightText.value
    const heightTextValueFloat =parseFloat(heightTextValue)
    //console.log(heightTextValueFloat)
    heightText.value=''

    const totalAreaTri = 0.5 * baseTextValueFloat * heightTextValueFloat
    //console.log(totalAreaTri)

    const areaText =document.getElementById("area-text")
    areaText.innerText =totalAreaTri
}

//for rectangle area

function RectangleArea(){
    const widthText =document.getElementById("width-text")
    const widthTextValue =widthText.value
    const widthTextValueFloat =parseFloat(widthTextValue)
    widthText.value=''

    const lengthText =document.getElementById("length-text")
    const lengthTextValue =lengthText.value
    const lengthTextValueFloat =parseFloat(lengthTextValue)
    lengthText.value=''
    
    const totalAreaRect =widthTextValueFloat*lengthTextValueFloat
    const areaText =document.getElementById("area2-text")
    areaText.innerText = totalAreaRect
}

//different shortcut way
//for call
function parallelogramAngle(){
    const basePara = getInputValue("basepara-text")
    const heightPara =getInputValue("heightpara-text")
    const areaTotalPara = basePara*heightPara
    const areaTotalParaFixed = areaTotalPara.toFixed(3)
    setElementInnerText('area3-text',areaTotalParaFixed)
    

}

function ellipseAngle(){
    const bigR =getInputValue("bigR-text")
    const smallr=getInputValue("smallr-text")
    const areaTotalellips = 3.14 * bigR * smallr

    // for validation
    if(isNaN(bigR) || isNaN(smallr)){
        alert('please give a number');
        return 0;
    }

    setElementInnerText('area4-text', areaTotalellips)
  
}

//for get value
function getInputValue(fieldId){
    const inputField =document.getElementById(fieldId)
    const inputFieldValue =inputField.value;
    const inputFieldValueFloat =parseFloat(inputFieldValue)
    return inputFieldValueFloat
}

//for set value 
function setElementInnerText(areaTextId, areaTotalPara){
    const areaText =document.getElementById(areaTextId)
    areaText.innerText = areaTotalPara

}