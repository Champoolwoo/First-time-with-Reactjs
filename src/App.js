import React,{Component} from 'react';

export default class App extends Component {

  state = {
    custom: '',
    gift: ''
  }//state
  
  customAdd = (e) =>{
    this.setState({
      custom: e.target.value
    })
    
  }//customAdd

  giftAdd = (a) =>{
    this.setState({
      gift: a.target.value
    })
  }//giftAdd

  render() {
    let cus = this.state.custom
    let gift = this.state.gift
    let sumcus
    let promotion
    let sumgift
    
    sumcus = cus * 500
    promotion = (sumcus * gift) / 100
    sumgift = sumcus - promotion
    
    console.log(sumcus)

    return (
      <center>
      <div className="App">
        <div className="App-header">
          <h2>โปรแรกมจองโต๊ะอาหาร</h2>
        </div>
        <p className="App-intro">
          ราคา 500 ต่อ 1 ท่าน
        </p>
        ใส่จำนวน <input type='number' onChange={this.customAdd} value={this.state.custom}/> ท่าน
        <br/>
        ส่วนลด <input type='number' onChange={this.giftAdd} value={this.state.gift}/> %
        <br/>
        
        จำนวนการจอง {cus} ท่าน
        <br/>
        รวมเป็นเงิน {sumcus} บาท
        <br/>
        ได้รับส่วนลด {gift} %
        <br/>
        จำนวนเงินที่ต้องจ่าย {sumgift} บาท
        <br/>
      </div>
      </center>
    );//return
  }//render
}//export

