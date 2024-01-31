"use client"
import React from 'react'
import Image from 'next/image'
import achievement from '../resources/achievement.png'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import {Accordion, AccordionItem} from "@nextui-org/react";


export default function ListItem() {

    const list_item1 = <div>
                        <div className="cont">
                            <div className="details">
                                <p className="definition">With our software, operational and value-added processes can be flexibly defined and reconfigured without programming to then be executed in nearly real-time in the real environment - be it in production plants, the overall factory process, intralogistics, or in industrial components themselves. Our technology is independent of manufacturers and is available in the Cloud, on Prem, or on Edge.</p>
                            </div>
                            <div className='image_div'>
                                <Image
                                    src={achievement}
                                    alt='details'
                                    style={{
                                        width: "100%"
                                    }}
                                    quality={100}
                                    placeholder='blur'
                                />
                            </div>
                        </div>
                        <p className='dnt'>Date/Learn More</p>
                        </div>
    

  return (
    <div className='list'>
        <Accordion>
            <AccordionItem key="1" 
            aria-label="Accordion 1" 
            className='title' 
            indicator={({ isOpen }) => (isOpen ? <FaMinus /> : <FaPlus />)} 
            title={<h4>We did this at that particular time</h4>}>
                {list_item1}
            </AccordionItem>
            <AccordionItem key="2" 
            aria-label="Accordion 2" 
            className='title' 
            indicator={({ isOpen }) => (isOpen ? <FaMinus /> : <FaPlus />)} 
            title={<h4>We did this at that particular time</h4>}>
                {list_item1}
            </AccordionItem>
            <AccordionItem key="3" 
            aria-label="Accordion 3" 
            className='title' 
            indicator={({ isOpen }) => (isOpen ? <FaMinus /> : <FaPlus />)} 
            title={<h4>We did this at that particular time</h4>}>
                {list_item1}
            </AccordionItem>
        </Accordion>
        <hr />
    </div>
    
  )
}
