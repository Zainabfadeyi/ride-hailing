// import { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// // import headerImg from "../assets/img/header-img.svg";
// import { ArrowRightCircle } from 'react-bootstrap-icons';
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import './banner.css'
// export const Banner = () => {
//   const [loopNum, setLoopNum] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [text, setText] = useState('');
//   const [delta, setDelta] = useState(300 - Math.random() * 100);
//   const [index, setIndex] = useState(1);
//   const toRotate = [ "transportation", "ride-hailing", "ride booking","task services" ];
//   const period = 2000;

//   useEffect(() => {
//     let ticker = setInterval(() => {
//       tick();
//     }, delta);

//     return () => { clearInterval(ticker) };
//   }, [text])

//   const tick = () => {
//     let i = loopNum % toRotate.length;
//     let fullText = toRotate[i];
//     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

//     setText(updatedText);

//     if (isDeleting) {
//       setDelta(prevDelta => prevDelta / 2);
//     }

//     if (!isDeleting && updatedText === fullText) {
//       setIsDeleting(true);
//       setIndex(prevIndex => prevIndex - 1);
//       setDelta(period);
//     } else if (isDeleting && updatedText === '') {
//       setIsDeleting(false);
//       setLoopNum(loopNum + 1);
//       setIndex(1);
//       setDelta(500);
//     } else {
//       setIndex(prevIndex => prevIndex + 1);
//     }
//   }

//   return (
//     <section className="banner" id="home">
//       <Container className="banner-container">
//         <Row className="aligh-items-center">
//           <Col xs={12} md={6} xl={7}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div  className={isVisible ? "animate__animated animate__fadeIn" : ""}>
//                 <h1>{`Get white-label apps for your`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "transportation", "ride-hailing", "ride booking","task services" ]'><span className="wrap">{text}</span></span></h1>

//                   {/* <button onClick={() => console.log('connect')}>Get the app <ArrowRightCircle size={25} /></button> */}
//               </div>}
//             </TrackVisibility>
//           </Col>
//           <Col xs={12} md={6} xl={5}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//                 <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
//                 </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   )
// }

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import './banner.css';
import { Into } from "./Into";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(2000); // Time between each transition
  const toRotate = ["transportation", "ride-hailing", "ride booking", "task services"];
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8"];
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let ticker = setInterval(() => {
        tick();
      }, delta);

      return () => clearInterval(ticker); // Clean up interval on unmount
    }
  }, [text, inView]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    setText(toRotate[i]);
    setLoopNum(loopNum + 1);
  };

  return (
    <>
     <Into/>
    <section className="banner" id="home">
     
      <Container className="banner-container">
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            {/* Visibility tracking */}
            <div ref={ref}>
              {inView && (
                <motion.div
                  className="text-container"
                  initial={{ opacity: 0, y: 50 }} // Starts below
                  animate={{ opacity: 1, y: 0 }} // Slides up into place
                  exit={{ opacity: 0, y: -50 }}  // Slides out upwards when leaving
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <h1 className="banner-text">{`Get white-label apps for your`}{" "}
                    <span className="txt-rotate" style={{ display: 'block' }}>
                      <AnimatePresence mode="wait">
                        <motion.span
                          key={text} // Ensures each word has a unique key to trigger re-animation
                          initial={{ opacity: 0, y: 50 }}  // Start off-screen below
                          animate={{ opacity: 1, y: 0 }}    // Slide into view
                          exit={{ opacity: 0, y: -50 }}     // Slide out upwards
                          transition={{ duration: 0.5 }}    // Duration for smooth animation
                          style={{ color: colors[loopNum % colors.length] }}
                        >
                          {text}
                        </motion.span>
                      </AnimatePresence>
                    </span>
                  </h1>
                </motion.div>
              )}
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* Add content for the image or additional section */}
          </Col>
        </Row>
      </Container>
    </section>
    </>
  );
};
