 document.addEventListener('DOMContentLoaded', ()=>{
     //Initial page load
     anime.timeline({
         easing:'easeOutExpo',
     })
      .add({
       targets:'.navbar',
        translateX:['100%', '0'],
        duration:1000,
     
   })
     .add({
         targets:'body',
         opacity:['0','1'],
          translateX:['-100vw', '0vw'],
          duration:'3500',
          // delay:'300',
         // offset: '-=1000',
        
     })
     .add({
      targets:'.shape',
      opacity:['0','1'],
      clipPath:['circle(1%)', ' circle(38%)'],
      offset: '-=2800',
      // delay:'300',
      duration:'1500',  
    })
    .add({
      targets:'.circle-text',
       opacity:['0','0.8'],
     
      fontSize:[ '5rem', '4.5rem'],
      letterSpacing:[ '0.8rem', '0.2rem'],
      offset: '-=2600',
       delay:'100',
      duration:'1500',  
    })
    
    
     .add({
        targets:'.list',
        opacity:['0','1'],
        translateX:['-30rem', '0'],
        duration:'1900',
        offset: '-=2500',
        
     })
     
     .add({
      targets:'.jacket-box',
      opacity:['0','0.8'],
      translateY:['40rem', '0rem'],
      duration:'1500',
      offset: '-=2800',
      
   })
   
   .add({
    targets:'.box-text',
    opacity:['0','1'],
    translateY:['10rem', '0rem'],
    duration:'1500',
    offset: '-=2200',
    
 })
 .add({
  targets:'.footer',
  opacity:['0','1'],
  translateY:['2rem', '0rem'],
  duration:'500',
  offset: '-=2000',
  
})




 })