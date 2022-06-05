import React from "react"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import fb from "../images/fb.png"
import twitter from "../images/twitter.png"
import ig from "../images/ig.png"
function Footer() {
    return(
        <div class="container-fluid bg-black">
            <Row className="topFooterRow">
                <Col className="titleCol">
                    <h2 style={{fontFamily: "'Courier New', Courier, monospace"}}>iWristWatch</h2>
                </Col>
                <Col className="col">
                    <h6>NEW TO iWristWatch?</h6>
                    <p class="text-secondary">Subscribe to our  newsletter to get updates on our latest offers!</p>
                    <form>
                        <input type="text" placeholder="Enter E-mail Address" />
                        <button>MALE</button>
                        <button>FEMALE</button>
                    </form>
                </Col>
                <Col style={{marginTop:"1rem"}}>
                    <h6>DOWNLOAD iWristWatch FREE APP</h6>
                    <p>Get access to exclusive offer!</p>
                    <form>
                        <button>App Store</button>
                        <button>Google Play</button>
                    </form>
                </Col>
            </Row>
            <Row className="secondFooterRow">
                <Col className="col">
                    <h6>LET US HELP YOU</h6>
                    <div class="text-secondary mb-5">
                        <a href="#">
                            <p style={{marginBottom:"-2px"}}>Help Center</p>
                            <p style={{marginBottom:"-2px"}}>How to Shop On iwristwatch?</p>
                            <p style={{marginBottom:"-2px"}}>Delivery options and timelines</p>
                            <p style={{marginBottom:"-2px"}}>How to return a product on iwristwatch?</p>
                            <p style={{marginBottom:"-2px"}}>Corporate and board purchases</p>
                            <p style={{marginBottom:"-2px"}}>Report a product</p>
                            <p>Ship your package in anywhere in Nigeria</p>
                        </a>
                    </div>
                    
                </Col>
                <Col className="col">
                    <h6>ABOUT iwristwatch </h6>
                    <div class="text-secondary mb-4">
                        <a href="#">
                            <p style={{marginBottom:"-2px"}}>About us</p>
                            <p style={{marginBottom:"-2px"}}>iwristwatch careers</p>
                            <p style={{marginBottom:"-2px"}}>iwristwatch Express</p>
                            <p style={{marginBottom:"-2px"}}>Terms and conditions </p>
                            <p style={{marginBottom:"-2px"}}>Privacy and Cookies Notice</p>
                            <p style={{marginBottom:"-2px"}}>iwristwatch Prime</p>
                            <p style={{marginBottom:"-2px"}}>iwristwatch Global</p>
                            <p>iwristwatch Anniversary 2022</p>
                        </a>
                    </div>
                    <h6>JOIN US ON</h6>
                    <div style={{marginBottom:"3rem",marginTop:"2px"}}>
                        <img style={{marginRight:"2rem",background:"white"}} src ={fb} height={25} width={35} />
                        <img style={{marginRight:"2rem",background:"white"}} src ={twitter} height={25} width={35} />
                        <img style={{background:"white"}} src ={ig} height={25} width={35} />
                    </div>
                </Col>
                <Col className="col">
                    <h6>MAKE MONEY WITH iwristwatch </h6>
                    <div class="text-secondary">
                        <a href="#">
                            <p style={{marginBottom:"-2px"}}>Sell on iWristWatch</p>
                            <p style={{marginBottom:"-2px"}}>Become a Sales Consultant</p>
                            <p style={{marginBottom:"-2px"}}>Become a iwristwatch Vendor Service Provider</p>
                            <p style={{marginBottom:"-2px"}}>Become a Logistic Service Partner </p>
                            <p style={{marginBottom:"-2px"}}>Join the iwristwatch DA Academy</p>
                            <p style={{marginBottom:"-2px"}}>Join the iwristwatch KOL Program</p>
                        </a>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Footer