/**
 * Created by AlexWang on 8/11/2016.
 */
import React, {
    Component
} from 'react'
import Navbar from "./component/navbar";
import Waterfall from "./component/Waterfall";
import LoadingPage from "./component/loadingPage";
import $ from "jquery";

require("./main.less")
class Home extends Component {



    constructor() {

        var images = [{
            id:"qwe",
            imgtitle: "Origin Login",
            titletext:"login flow ux design",
            image: "./img/Loginsmall.png",
            imgBig:"./img/Login.png",
       bottomtext:" 2016/8-2016/9"
        }, {
            id:"fewf",
            imgtitle: "Order Stystem",
            titletext:"dashboard design and front end coding",
            image: "./img/rongtaismall.png",
            imgBig:"./img/rongtaibig.png",
       bottomtext:" 2016/10-2016/11"
        }, {id:"wersv",
            imgtitle: "LOCALBOX-TOOL",
            titletext:"web tool design",
            image: "./img/localbox-toolsmall.png",
            imgBig:"./img/localbox-toolbig.png",
       bottomtext:" 2017/1-2017/2"
        }, {id:"wfwf",
            imgtitle: "Xbox alive Login",
            titletext:"third party account login",
            image: "./img/xboxloginsmall.png",
            imgBig: "./img/xboxloginbig.png",
            bottomtext:"2016/3-2016/4"
        },  {
            imgtitle: "CRICKET-Dashboard",
            titletext:"Dashboard design for testers and boss",
            image: "./img/cricketsmall.png",
            imgBig: "./img/cricketbig.png",
       bottomtext:"2016/12-2017/1"
        }, {
            imgtitle: "GAGA App",
            titletext:"O2O education platform ",
            image: "./img/gagasmall.png",
            imgBig: "./img/gagabig.png",
       bottomtext:"2015/3-2015/9"
        },{
            imgtitle: "MEIZHAI App",
            titletext:"O2O home decoration platform ",
            image: "./img/meizhaismall.png",
            imgBig: "./img/meizhai.png",
       bottomtext:"2015/8-2015/9"
        },{
            imgtitle: "Web Registration",
            titletext:"registration flow design and design standard ",
            image: "./img/webregistrationsmall.png",
            imgBig: "./img/webregistrationbig.png",
       bottomtext:"2015/8-2015/9"
        },{
            imgtitle: "KEYMASTER",
            titletext:"Keymaster ux flow design",
            image: "./img/keymastersmall.png",
            imgBig: "./img/keymasterbig.png",
       bottomtext:"2015/8-2015/9"
        },{
            imgtitle: "VR DESIGN ",
            titletext:"display interior design works by VR",
            image: "./img/VRsmall.png",
            imgBig: "./img/VRbig.png",
       bottomtext:"2016/1-2016/2"
        },{imgtitle: "AIRPORT SUPPLY",
            titletext:"air china supply management stystem",
            image: "./img/guohangbig.png",
            imgBig: "./img/guohangbig.png",
       bottomtext:"2014/10-2015/2"
        },{imgtitle: "CG WORKS",
            titletext:"cg works collection",
            image: "./img/cgworks.png",
            imgBig: "./img/cgworks.png",
       bottomtext:"null"
        },];
        super();
        this.state = {
            images: images,
            loadingpageshow: "block",
            waterfallshow: "none"
        };
        this.showGallery = this.showGallery.bind(this);
    }
    componentWillMount() {
        this.setState({
            loadingpageshow: "block",
            waterfallshow: "block"
        });
     $("body").css({"overflow":"hidden"});
    }

    componentDidMount() {
      $("#contactme").on("click",function(){
        
window.open("https://fzp727272.github.io/react-design-works/public/img/resume.pdf");


      });

 



    }

    showGallery() {
            this.setState({
                loadingpageshow: "none",
                waterfallshow: "block"
            });
            $("body").css({
                "overflow-y": "auto"
            });
    }
    render() {

        var loadpageStyle = {
            display: this.state.loadingpageshow
        };
        var waterfallStyle = {
             display: this.state.waterfallshow
        }
        return (
            <div>
                <LoadingPage showGallery={this.showGallery} loadpageStyle={loadpageStyle} ></LoadingPage>
                <div className="waterfallcontainer">
                <Navbar></Navbar>
                     <Waterfall textHeight={100} marginMid={25} marginTop={20} $father={$(".container")} waterfallStyle={waterfallStyle}  images={this.state.images} colLg={4} colMd={3} colXs={1} ></Waterfall>              
                </div>
     
              
            
              </div>
        );
    }
}

export default Home