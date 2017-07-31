/**
 * Created by AlexWang on 2/12/2016.
 */
import React, {
    Component
} from 'react';
import $ from 'jquery';
import ReactModal from 'react-modal';

class Waterfall extends Component {
    constructor() {
        super();
        this.state = {
            finishLoad: false,
            boxes: [],
            colume: 5,
            modalClass:[]
        };
        this.columechange = this.columechange.bind(this);
        this.minArr = this.minArr.bind(this);
        this._update = this._update.bind(this);

    }
    $fatherWidth(){ return( $(window).width() - 50)}

    minArr(arr) {
        var min = arr[0];
        var len = arr.length;
        for (var i = 1; i < len; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

    columechange() {
        var windowwidth = this.$fatherWidth();
        if (windowwidth < 768) {
            this.setState({
                colume: this.props.colXs
            })
        } else if (windowwidth >= 768 && windowwidth < 1200) {
            this.setState({
                colume: this.props.colMd
            })
        } else {
            this.setState({
                colume: this.props.colLg
            })
        }
    }

    componentWillMount() {

        this.columechange();
        var boxesTemp = [];
        var columnYs = [];
        for (let k = 0; k < this.state.colume; k++) {
            columnYs.push(0);
        }
        var currentX = 0;
        var column = -1;
        var i = -1;
        var loadedImg = 0;
        var marginLeft = this.props.marginLeft || 30;
        var marginRight = this.props.marginRight || 5;
        var marginMid = this.props.marginMid || 10;
        var marginTop = this.props.marginTop || 10;
        var textHeight = this.props.textHeight || 150;
        var width = (this.$fatherWidth() - marginLeft - marginRight - marginMid * (this.state.colume - 2)) / this.state.colume;
        this.props.images.map(
            function(image) {
           
                i++;
                let imgtemp = new Image();
                imgtemp.src = this.props.images[i].image;
                imgtemp.onload = function() {
                    //  column = (column + 1) % this.state.colume;
                    column = columnYs.indexOf(this.minArr(columnYs));
                   
                    //get height of current div
                    let divHeight;
                    let realHeight;
                    divHeight = imgtemp.height / imgtemp.width * width + textHeight; 
                     realHeight = columnYs[column] + 60;
                    columnYs[column] += divHeight + marginTop;
                    currentX = marginLeft + (marginMid + width) * column;
                    boxesTemp.push({
                        left: currentX,
                        top: realHeight,
                        width: width,
                        height: divHeight
                    });
                    //setstate after loop finish
                    loadedImg++;
                    if (loadedImg == this.props.images.length) {
                        //console.log(boxesTemp);
                        this.setState({
                            boxes: boxesTemp,
                            finishLoad: true
                        });
                    }
                    this._update();
                }.bind(this)

            }.bind(this)
        );

    }

    render() {

        if (this.state.finishLoad) {
            return (
                <div style={this.props.waterfallStyle}>
                    {this.props.images.map(
                        function (image, i) {
                            if (i < this.state.boxes.length) {
                                //console.log(i);
                                //console.log(this.state.boxes[i].top);
                                var top = this.state.boxes[i].top;
                                var left = this.state.boxes[i].left;
                                var width = this.state.boxes[i].width;
                                var height = this.state.boxes[i].height;
                                var idName = "#" +this.props.images[i].id;
                                var modalClass = "dialog dialogshow" + i ;
                                var modalClassname = ".dialogshow" + i;
                                var waterfallclass = "waterfall-item waterfallindex" + i;
                                var waterfallclassname = ".waterfallindex" + i;
                                var t = 1;
                               // var id = this.props.images[i].id;
                         $(document).on( "click" , waterfallclassname ,function(){
                            if (t) { t =2;
                              $(modalClassname).fadeIn(300)};
                              $("body").css({"overflow-y" :'hidden'});
                              $(modalClassname).find(".modalContainer").on("click",function(event){
                                event.stopPropagation();
                               
                              })
                         
                         });
                                 // var id = this.props.images[i].id;
                         $(document).on( "click" , modalClassname ,function(){
                           if (t===2) { $(modalClassname).fadeOut(300);

                               $("body").css({"overflow-y" :'auto'})}
                                   
                              
                          
                         })

                                return (
                                    <div  key={i}   style={{position:'absolute',background:'#fff',overflow:'hidden',width:width,height:height,top:top,left:left}} >
                                        <div className={waterfallclass}
                                            style={{position:'relative',height:'100%'}}>
                                            <div className="img-title">{this.props.images[i].imgtitle}</div>
                                            <p className="title-text">{this.props.images[i].titletext}</p>
                                            <img
                                                style={{width:width}} //height:height,top:top,left:left
                                                src={this.props.images[i].image}></img>
                                            <div className="bottom-text">{this.props.images[i].bottomtext}</div>
                                        </div>
                                    <div className={modalClass} ><div className="modalContainer"> <img src={this.props.images[i].imgBig}></img></div> 
                                     <div className="closebutton closeblack" >
              <span className="closeicon rounded thick"></span>
               
               </div> </div>
                                    </div>
                                );
                            }
                        }.bind(this)
                    )}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }


    componentDidMount() {
        this._update();
        window.addEventListener("resize", this._update.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this._update.bind(this));
    }

    _update() {
        this.columechange();
        var boxesTemp = [];
        var columnYs = [];
        for (let k = 0; k < this.state.colume; k++) {
            columnYs.push(0);
        }
        var currentX = 0;
        var column = -1;
        var i = -1;
        var loadedImg = 0;
        var marginLeft = this.props.marginLeft || 30;
        var marginRight = this.props.marginRight || 5;
        var marginMid = this.props.marginMid || 10;
        var marginTop = this.props.marginTop || 10;
        var textHeight = this.props.textHeight || 150;
        var width = (this.$fatherWidth() - marginLeft - marginRight - marginMid * (this.state.colume - 2)) / this.state.colume;



        this.props.images.map(
            function(image,index) {
                i++;
                let imgtemp = new Image();
                imgtemp.src = this.props.images[i].image;
                imgtemp.onload = function() {
                    //column = (column + 1) % this.state.colume;
                    column = columnYs.indexOf(this.minArr(columnYs))
                        //get height of current div
                    let divHeight;
                    let realHeight;
                    divHeight = imgtemp.height / imgtemp.width * width + textHeight ;


                    realHeight = columnYs[column] + 60;
                    columnYs[column] += divHeight + marginTop;
                    currentX = marginLeft + (marginMid + width) * column;
                    boxesTemp.push({
                        left: currentX,
                        top: realHeight,
                        width: width,
                        height: divHeight
                    });
                    //setstate after loop finish
                    loadedImg++;
                    if (loadedImg == this.props.images.length) {
                        //console.log(boxesTemp);
                        this.setState({
                            boxes: boxesTemp,
                            finishLoad: true
                        });
                    }
                }.bind(this)
            }.bind(this)
        )
    }
}

export default Waterfall