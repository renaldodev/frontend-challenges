import {motionValue} from 'framer-motion'
import React, { ComponentType, useLayoutEffect, useRef } from 'react'

export function withScroll<T>(Component:ComponentType<T>){
    const scrollOffset=motionValue(0)
   const ref=useRef<HTMLDivElement>(null)
    useLayoutEffect(()=>{
        scrollOffset.set(0)
    },[])
    const onScroll=()=>{
        if (!ref.current) return
        scrollOffset.set(ref.current.scrollTop)
    }
    return (props:T)=>{
        return <Component {...props} ref={ref} onScroll={onScroll}/>
    }
}