enum Week{
  Sunday,
  Monday
}

namespace Week{
  export function getDay(day:Week){
    if(day == Week.Sunday){
      console.info(0)
    }else if(day == Week.Monday){
      console.info(1)
    }
  }
}


