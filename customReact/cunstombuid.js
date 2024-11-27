import { Children } from "react"
/*   function customRender(reactElemnt,container){
    const domElement=document.creatElement(reactElemnt.type)
                  domElement.innerHTML = reactElemnt.Children
                  domElement.setAttribute('href',reactElemnt.props.href)
                  domElement.setAttribute('target',reactElemnt.props.target)

            container.appendChild(domElement);   
}  */




const reactElemnt ={
    type:'a',
    props:{
        href: 'https://www.google.com',
        target: 'p'
    
    } , 
    Children: 'Click me to visit google'
}



const mainContainer = document.querySelector('#root')
customRender(reactElemnt,mainContainer)