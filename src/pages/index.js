import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
    motion,
    useSpring,
    useMotionValue,
    useTransform,
    AnimatePresence,
} from "framer-motion"

// import { Link } from "gatsby"
// import Layout from "../components/layout"
// import Image from "../components/image"

import SEO from "../components/seo"
import Section from "../components/styled/section"
import { H1, H4, Para } from "../components/styled/title"
import "../styles/styles.scss"
import logo from "../images/lamborghini/logo.svg"
import hamburger from "../images/lamborghini/hamburger-icon.svg"
import leftArrow from "../images/lamborghini/arrow.svg"
import close from "../images/lamborghini/close.svg"
import car from "../images/lamborghini/car.png"
import Button from "../components/styled/buttons"

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Span = styled.span`
    display: block;
    width: 100%;
    height: 0.5px;
    background: #e8e8e8;
`

const Index = () => {
    const ease = [0.6, 0.05, -0.01, 0.99]
    // let x = useSpring(0, { stiffness: 300, damping: 200, ease: ease })
    const x = useMotionValue(0, { stiffness: 300, damping: 200, ease: ease })
    const width = useTransform(x, [-1160, 0], [265, 0])
    const scale = useTransform(x, [-100, 0], [1.2, 1])
    const fadeIn = useTransform(x, [-100, 0], [1, 0])
    const fadeOut = useTransform(x, [-60, 0], [0, 1])
    const up = useTransform(x, [-100, 0], [-100, 0])

    //state
    const [state, setState] = useState(false)

    useEffect(() => {
        x.onChange(() => {
            x.get() > -100 ? setState(false) : setState(true)
        })
    }, [])

    const closeProductDrag = () => {
        x.stop()
        x.set(0)
    }

    //Setting body scroll
    useEffect(() => {
        state
            ? targetElement.classList.add("no-scroll")
            : targetElement.classList.remove("no-scroll")
    })

    //scrolltargets
    let targetElement
    //Setting scrolltargets
    useEffect(() => {
        targetElement = document.querySelector("html")
    }, [])

    return (
        <div className="container">
            <Section className="navbar">
                <SEO title="Home" />
                <Nav>
                    <img src={logo} alt="" />
                    <img src={hamburger} alt="" />
                </Nav>
            </Section>
            <Span></Span>
            <Section className="back">
                <img src={leftArrow} alt="" />
                <H4>Back</H4>
            </Section>
            <Span></Span>
            <motion.Section className="content" style={{ y: up }}>
                <H4 className="subheading">Premium</H4>
                <H1 className="title">Aventador SVJ Roadster</H1>
                <Para>
                    The Aventador SVJ is the first production V12 Lamborghini
                    model to feature Lamborghini's Aerodinamica Lamborghini
                    Attiva (ALA) system. This allows the car to achieve 40% more
                    downforce than the Aventador SV and 1% reduction in the
                    coefficient of drag.
                </Para>
                <Button>Book Now</Button>
            </motion.Section>

            <div className="product-slide-enlarge">
                <motion.div
                    style={{ opacity: fadeIn }}
                    className="background"
                ></motion.div>
                <AnimatePresence>
                    {state ? (
                        <motion.div
                            initial={{ opacity: 0, y: -30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ ease: ease }}
                            className="drag-header"
                        >
                            <img src={logo} onClick={closeProductDrag} alt="" />
                            <img
                                onClick={closeProductDrag}
                                src={close}
                                alt=""
                            />
                        </motion.div>
                    ) : null}
                </AnimatePresence>

                {/* <motion.H1 style={{ opacity: fadeIn }} className="title black">
                    Aventador SVJ Roadster
                </motion.H1> */}
            </div>
            <div className="car_container">
                <motion.div
                    style={{ x, scale }}
                    drag={"x"}
                    dragConstraints={{ left: -1160, right: 0 }}
                    dragElastic={0.05}
                    className="product-image"
                >
                    <img src={car} alt="Car" className="car" />
                </motion.div>
                <div className="drag_wrapper">
                    <motion.H4 style={{ opacity: fadeOut, x }}>
                        <img src={leftArrow} alt="" />
                        Drag to enlarge
                    </motion.H4>
                </div>
            </div>
            <div className="progress-bar">
                <span className="progress one"></span>
                <motion.span
                    style={{ width }}
                    className="progress two"
                ></motion.span>
            </div>
        </div>
    )
}

export default Index
